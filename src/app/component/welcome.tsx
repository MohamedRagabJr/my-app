type WelcomeProps = {
  name: string;
};
export default function Welcome({ name }: WelcomeProps) {
  return <h1> Welcome {name} </h1>;
}