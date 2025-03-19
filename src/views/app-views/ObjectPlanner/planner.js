import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { SaveOutlined, UploadOutlined, DeleteOutlined } from '@ant-design/icons';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PlacedObject from './PlacedObject.js'; 
import './object-planner.css'; 

class ObjectPlanner extends Component {
  state = {
    objects: [
      { id: 1, name: 'Стол на двоих', image: '/img/others/table2.png' },
      { id: 2, name: 'Стол на троих', image: '/img/others/table3.png' },
      { id: 3, name: 'Стол на четверых', image: '/img/others/table4.png' },
      { id: 4, name: 'Стол на десятерых', image: '/img/others/table10.png' },
    ],
    placedObjects: [],
    selectedObject: null,
    selectedPlacedObject: null,
    x: 0,
    y: 0,
    angle: 0,
    height: 1,
    width: 1,
    layer: 1,
  };

  handleSelectObject = (object) => {
    this.setState({ selectedObject: object });
  };

  handlePlaceObject = (e) => {
    const { selectedObject, placedObjects } = this.state;
    if (selectedObject) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newObject = {
        ...selectedObject,
        x,
        y,
        angle: 0,
        height: 1,
        width: 1,
        layer: 1,
        id: Date.now(), 
      };
      this.setState({ placedObjects: [...placedObjects, newObject] });
    }
  };

  handleMoveObject = (id, x, y) => {
    const { placedObjects } = this.state;
    const updatedObjects = placedObjects.map((obj) =>
      obj.id === id ? { ...obj, x, y } : obj
    );
    this.setState({ placedObjects: updatedObjects });
  };

  handleSelectPlacedObject = (obj) => {
    this.setState({
      selectedPlacedObject: obj,
      x: obj.x,
      y: obj.y,
      angle: obj.angle,
      height: obj.height,
      width: obj.width,
      layer: obj.layer,
    });
  };

  handleUpdateObject = () => {
    const { selectedPlacedObject, placedObjects, x, y, angle, height, width, layer } = this.state;
    const updatedObjects = placedObjects.map((obj) =>
      obj.id === selectedPlacedObject.id ? { ...obj, x, y, angle, height, width, layer } : obj
    );
    this.setState({ placedObjects: updatedObjects });
  };

  handleDeleteObject = () => {
    const { selectedPlacedObject, placedObjects } = this.state;
    const updatedObjects = placedObjects.filter((obj) => obj.id !== selectedPlacedObject.id);
    this.setState({ placedObjects: updatedObjects, selectedPlacedObject: null });
  };

  handleDeleteAllObjects = () => {
    this.setState({ placedObjects: [], selectedPlacedObject: null });
  };

  handleSaveLayout = () => {
    const { placedObjects } = this.state;
    const layout = placedObjects.map(({ id, x, y, angle, height, width, layer, image }) => ({
      id,
      x,
      y,
      angle,
      height,
      width,
      layer,
      image, 
    }));
    const blob = new Blob([JSON.stringify(layout)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'layout.json';
    link.click();
  };
  
  handleLoadLayout = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const layout = JSON.parse(event.target.result);
        const { objects } = this.state;
  
        
        const restoredObjects = layout.map((item) => {
          const originalObject = objects.find((obj) => obj.id === item.id);
          return {
            ...item,
            image: originalObject ? originalObject.image : '', 
          };
        });
  
        this.setState({ placedObjects: restoredObjects });
      };
      reader.readAsText(file);
    }
  };
  render() {
    const { objects, placedObjects, selectedObject } = this.state;

    return (
      <DndProvider backend={HTML5Backend}>
        <div className="object-planner">
          <div className="left-panel">
            <Card title="Выбор объектов" className="object-list">
              <div className="object-list-container">
                {objects.map((obj) => (
                  <div
                    key={obj.id}
                    className={`object-item ${selectedObject?.id === obj.id ? 'selected' : ''}`}
                    onClick={() => this.handleSelectObject(obj)}
                  >
                    <img src={obj.image} alt={obj.name} className="object-image" />
                    <span>{obj.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="controls">
              <Button icon={<SaveOutlined />} onClick={this.handleSaveLayout}>
                Сохранить расстановку
              </Button>
              <Button icon={<UploadOutlined />}>
                <input type="file" accept=".json" onChange={this.handleLoadLayout} />
              </Button>
              <Button danger onClick={this.handleDeleteAllObjects} icon={<DeleteOutlined />}>
                Удалить все
              </Button>
            </div>
          </div>

          <div className="right-panel">
            <Card title="Доска" className="board" onClick={this.handlePlaceObject}>
              {placedObjects.map((obj) => (
                <PlacedObject
                  key={obj.id}
                  obj={obj}
                  onMove={this.handleMoveObject}
                  onClick={() => this.handleSelectPlacedObject(obj)}
                />
              ))}
            </Card>
          </div>
        </div>
      </DndProvider>
    );
  }
}

export default ObjectPlanner;