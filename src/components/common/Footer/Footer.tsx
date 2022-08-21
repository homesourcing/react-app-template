import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

import {Anchor, Footer as MantineFooter, Group, Text} from '@mantine/core';

const StyledMantineFooter = styled(MantineFooter)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer: React.FC = () => {
  const {t} = useTranslation('Common');

  return (
    <StyledMantineFooter data-testid="footer" height={60}>
      <Group data-testid="credit-group" spacing={5}>
        <Text>{t('footer.aboutText')}</Text>
        <Anchor href="https://github.com/Zheruel" target="_blank">
          Zheruel
        </Anchor>
      </Group>
    </StyledMantineFooter>
  );
};
