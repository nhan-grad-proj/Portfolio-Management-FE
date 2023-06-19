import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { Card, Heading, Text } from '@chakra-ui/react';

type OverviewCardProps = PropsWithChildren<{
  title: ReactNode;
  mainContent: ReactNode;
  description: ReactNode;
}>;

export function OverviewCard({
  title,
  mainContent,
  description
}: OverviewCardProps): ReactElement {
  return (
    <Card paddingY="6" paddingX="8">
      <Text fontSize="lg">{title}</Text>
      <Heading fontSize="xl">{mainContent}</Heading>
      <Text fontSize="md">{description}</Text>
    </Card>
  );
}
