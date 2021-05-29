/* eslint-disable react/prop-types */
import './contract-list.scss';

const ContractList = ({ list }) => (
  <>
    {list.map((item) => (
      <div key={item.id} className="list-item">
        <div className="logo">
          <img src={item.image} alt="Logo" />
        </div>
        <div className="contract-name">
          <div className="name">{item.name}</div>
          <div className="type">{item.type}</div>
        </div>
      </div>
    ))}
  </>
);

export default ContractList;
