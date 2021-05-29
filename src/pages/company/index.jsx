/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import ContractList from '../../components/contract-list';
import './company.scss';

const test = [
  {
    name: 'test1',
    type: 'test1',
    image: 'https://onminecraft.ru/files/2012/03/iron-ingot.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining esse',
  },
  {
    name: 'test1',
    type: 'test1',
    image: 'https://onminecraft.ru/files/2012/03/iron-ingot.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining esse',
  },
  {
    name: 'test1',
    type: 'test1',
    image: 'https://onminecraft.ru/files/2012/03/iron-ingot.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining esse',
  },
  {
    name: 'test1',
    type: 'test1',
    image: 'https://onminecraft.ru/files/2012/03/iron-ingot.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining esse',
  },
  {
    name: 'test1',
    type: 'test1',
    image: 'https://onminecraft.ru/files/2012/03/iron-ingot.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining esse',
  },
];

const CompanyPage = () => {
  const [list, setList] = useState('orders');
  return (
    <div className="container">
      <div className="header">
        <div className="left-block">
          <div className="company-name-header">
            <div className="company-name">
              <div className="logo">
                <img
                  src="http://www.gidrolast.ru/wp-content/uploads/2015/09/4-150x150.jpg"
                  alt="Logo"
                />
              </div>
              <div className="name">TMK</div>
            </div>
          </div>
          <div className="info">
            <div className="info-field">
              <div className="label">Phone:</div>
              <div className="value">545659956565</div>
            </div>
            <div className="info-field">
              <div className="label">Email:</div>
              <div className="value">545659956565</div>
            </div>
            <div className="info-field">
              <div className="label">INN:</div>
              <div className="value">545659956565</div>
            </div>
          </div>
        </div>
        <div className="right-block">
          <div className="add-btn">
            <button className="btn">Add Contract</button>
          </div>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
      <div className="buttons-block">
        <button
          className={`btn ${list === 'orders' ? 'active' : ''}`}
          onClick={() => setList('orders')}
        >
          Orders
        </button>
        <button
          className={`btn ${list === 'contracts' ? 'active' : ''}`}
          onClick={() => setList('contracts')}
        >
          Contracts
        </button>
      </div>
      <div className="contracts">
        <ContractList list={test} />
      </div>
    </div>
  );
};

export default CompanyPage;
