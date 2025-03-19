import React, { Component } from 'react';
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import axios from 'axios';

export class UserList extends Component {
  state = {
    users: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const users = response.data.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
        city: user.address.city,
        company: user.company.name,
        img: `https://i.pravatar.cc/150?u=${user.id}`,
      }));
      this.setState({ users, loading: false });
    } catch (error) {
      console.error('Error fetching users:', error);
      message.error('Failed to load users');
      this.setState({ loading: false });
    }
  };

  deleteUser = userId => {
    this.setState({
      users: this.state.users.filter(item => item.id !== userId),
    });
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  handleViewProfile = (userId) => {
    const { match, history } = this.props;
    history.push(`${match.url}/editProfile/${userId}`); 
  };

  render() {
    const { users, loading } = this.state;

    const tableColumns = [
      {
        title: 'User',
        dataIndex: 'name',
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus src={record.img} name={record.name} subTitle={record.email} />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        sorter: {
          compare: (a, b) => a.phone.length - b.phone.length,
        },
      },
      {
        title: 'Website',
        dataIndex: 'website',
        render: website => (
          <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        ),
        sorter: {
          compare: (a, b) => a.website.length - b.website.length,
        },
      },
      {
        title: 'City',
        dataIndex: 'city',
        sorter: {
          compare: (a, b) => a.city.length - b.city.length,
        },
      },
      {
        title: 'Company',
        dataIndex: 'company',
        sorter: {
          compare: (a, b) => a.company.length - b.company.length,
        },
      },
      {
        title: '',
        dataIndex: 'actions',
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={() => this.handleViewProfile(elm.id)} // Переход на страницу профиля
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => this.deleteUser(elm.id)}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];

    return (
      <Card bodyStyle={{ padding: '0px' }}>
        <Table
          columns={tableColumns}
          dataSource={users}
          rowKey="id"
          loading={loading}
        />
      </Card>
    );
  }
}

export default UserList;