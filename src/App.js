import * as React from 'react';
import { Layout, Title, Input, Total, ActionButtons } from 'components';

const isNumber = (value) => !Number.isNaN(Number(value));

function App() {
  const [totalAmount, setTotalAmount] = React.useState(5000);
  const [deadline, setdeadline] = React.useState(3);
  const [amount, setAmount] = React.useState(() => (totalAmount / deadline).toFixed(2));

  function handleTotalAmount(event) {
    const { value } = event.target;

    if (isNumber(value)) {
      setTotalAmount(event.target.value);
    }
  }

  function handleDeadline(event) {
    const { value } = event.target;

    if (isNumber(value)) {
      setdeadline(Number(value));
    }
  }

  React.useEffect(() => {
    const secureDeadline = deadline === 0 ? 1 : deadline;
    setAmount((totalAmount / secureDeadline).toFixed(2));
  }, [deadline, totalAmount]);

  return (
    <Layout>
      <Title />
      <Input label="MONTO TOTAL" htmlFor="totalAmount" value={totalAmount} onChange={handleTotalAmount} />
      <Input label="PLAZO" htmlFor="deadline" value={deadline} onChange={handleDeadline} />
      <Total amount={amount} />
      <ActionButtons />
    </Layout>
  );
}

export default App;
