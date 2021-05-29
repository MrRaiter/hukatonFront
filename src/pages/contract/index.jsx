import { useParams } from 'react-router';
import { contracts } from '../../constants/contracts';

const ContractPage = () => {
  const { id } = useParams();
  return (
    <div>
      <div>{id}</div>
      <div>{contracts.find((contract) => contract.id === id).name}</div>
    </div>
  );
};

export default ContractPage;
