const contracts = [
  {
    id: '1',
    company_id: '1',
    name: 'Техническое обслуживание Крымского моста',
    type: 'Тяжелая Промышленность',
    image: 'https://cdnimg.rg.ru/img/content/166/15/92/pn3L_bNwql0_d_850.jpg',
    description:
      'Техническое обслуживание Крымского моста, осуществление регламентного ремонта, укрепление конструкции',
  },
];

const ContractsPage = () => <div>{contracts[0].name}</div>;

export default ContractsPage;
