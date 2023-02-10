import Button from "./Button";

export default {
    title: 'Button',
    component: Button,
  };

export const Primary = () => (
    <Button variant='primary' />
)
export const Secondary = () => (
    <Button variant='secondary' />
)
export const Danger = () => (
    <Button variant='danger' />
)