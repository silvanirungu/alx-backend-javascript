export default function guardrail(mathFunction) {
  let value;
  const queue = [];

  try {
    value = mathFunction();
    queue.push(value);
  } catch (error) {
    value = error.toString();
    queue.push(value);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
