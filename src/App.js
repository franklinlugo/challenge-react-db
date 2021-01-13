import * as React from 'react';
import { Layout, Title, Input, Total, ActionButtons } from 'components';

const isNumber = (value) => !Number.isNaN(Number(value));

const INITIAL_TOTAL_AMOUNT = 5000;
const MIN_TOTAL_AMOUNT = 5000;
const MAX_TOTAL_AMOUNT = 50000;

const INITIAL_DEADLINE = 3;
const MIN_INITIAL_DEADLINE = 3;
const MAX_INITIAL_DEADLINE = 24;

const initialAmount = () => (INITIAL_TOTAL_AMOUNT / INITIAL_DEADLINE).toFixed(2);

function App() {
  const [totalAmount, setTotalAmount] = React.useState(INITIAL_TOTAL_AMOUNT);
  const [deadline, setdeadline] = React.useState(INITIAL_DEADLINE);
  const [amount, setAmount] = React.useState(initialAmount);

  function handleTotalAmount(value) {
    if (isNumber(value)) {
      setTotalAmount(Number(value));
    }
  }

  function handleDeadline(value) {
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
      <Input
        label="MONTO TOTAL"
        htmlFor="totalAmount"
        value={totalAmount}
        onChange={handleTotalAmount}
        min={MIN_TOTAL_AMOUNT}
        max={MAX_TOTAL_AMOUNT}
      />
      <Input
        label="PLAZO"
        htmlFor="deadline"
        value={deadline}
        onChange={handleDeadline}
        min={MIN_INITIAL_DEADLINE}
        max={MAX_INITIAL_DEADLINE}
      />
      <Total amount={amount} />
      <ActionButtons />
    </Layout>
  );
}

export default App;
