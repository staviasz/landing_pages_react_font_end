import { Text } from './styles';

interface TextContentProps {
  children: string | React.ReactNode;
}
export const TextContent = ({ children }: TextContentProps) => {
  return <Text>{children}</Text>;
};
