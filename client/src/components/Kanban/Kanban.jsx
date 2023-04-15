import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import './Kanban.css'
import { kanbanData, kanbanGrid } from './dummy';

const Kanban = () => (
  <div className="container">
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Title', grabberField: 'Color', tagsField: 'Tags', footerCssField: 'className' }}
      swimlaneSettings={{keyField:'Project'}}
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default Kanban;