import React, { useEffect } from 'react';
import './appform.scss';
import { Form, Input, Cascader, DatePicker } from 'antd';

function AppForm() {
  useEffect(() => {
    // console.log(refShowChild.current);
  }, []);
  return (
    <div className="appform">
      <p>Оставить заявку</p>
      <Form>
        <Form.Item>
          <Input type="tel" placeholder="Введите телефон" />
        </Form.Item>
        <Form.Item>
          <Cascader
            options={[
              {
                value: 'консультация',
                label: 'Бесплатная консультация',
              },
              {
                value: 'услуги',
                label: 'Услуги',
                children: [{ value: 'бухучет', label: 'Бухгалтерский и налоговый учет' }],
              },
            ]}></Cascader>
        </Form.Item>
        <Form.Item>
          <DatePicker></DatePicker>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AppForm;
