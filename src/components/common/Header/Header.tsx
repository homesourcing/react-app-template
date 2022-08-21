import React from 'react';

import styled from 'styled-components';

import {Header as MantineHeader, Image} from '@mantine/core';

const StyledMantineHeader = styled(MantineHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header: React.FC = () => {
  return (
    <StyledMantineHeader data-testid="header" height={60} p="xs">
      <Image
        data-testid="HomeSourcing-logo"
        src={'images/homesourcing-logo.png'}
        alt="HomeSourcing Logo"
        radius="md"
        width={200}
        height="100%"
      />
    </StyledMantineHeader>
  );
};
