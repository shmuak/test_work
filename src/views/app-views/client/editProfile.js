import React, { Component } from 'react';
import { Form, Avatar, Button, Input, Row, Col, Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import Flex from 'components/shared-components/Flex';

const ROW_GUTTER = 16;

class EditProfile extends Component {
  formRef = React.createRef();

  state = {
    loading: true, // Для загрузки данных
    submitting: false, // Для лоадера при отправке
    avatarUrl: '',
    name: '',
    email: '',
    userName: '',
    phoneNumber: '',
    website: '',
    city: ''
  };

  componentDidMount() {
    const { userId } = this.props.match.params;

    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        const user = response.data;

        this.setState({
          avatarUrl: `https://i.pravatar.cc/150?u=${user.id}`,
          name: user.name,
          email: user.email,
          userName: user.username,
          phoneNumber: user.phone,
          website: user.website,
          city: user.address.city,
          loading: false
        });

        if (this.formRef.current) {
          this.formRef.current.setFieldsValue({
            name: user.name,
            email: user.email,
            userName: user.username,
            phoneNumber: user.phone,
            website: user.website,
            city: user.address.city
          });
        }
      })
      .catch(error => {
        console.error("Error loading user data:", error);
        this.setState({ loading: false });
      });
  }

  onFinish = () => {
    this.setState({ submitting: true });
    setTimeout(() => {
      this.setState({ submitting: false });
      this.props.history.push('/app/clients/userList');
    }, 1000); 
  };

  render() {
    const { loading, submitting, avatarUrl } = this.state;

    if (loading) return <div>Loading...</div>;

    return (
      <>
        <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
          <Avatar size={90} src={avatarUrl} icon={<UserOutlined />} />
        </Flex>
        <div className="mt-4">
          <Spin spinning={submitting}> {/* Лоадер при отправке */}
            <Form
              ref={this.formRef}
              name="basicInformation"
              layout="vertical"
              onFinish={this.onFinish}
            >
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Username" name="userName" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Phone Number" name="phoneNumber">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Website" name="website">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="City" name="city">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">Save Changes</Button>
            </Form>
          </Spin>
        </div>
      </>
    );
  }
}

export default EditProfile;