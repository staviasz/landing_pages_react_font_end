import { Text } from './styles';

interface TextContentProps {
  children: string;
}
export const TextContent = ({ children }: TextContentProps) => {
  return <Text>{children}</Text>;
};
