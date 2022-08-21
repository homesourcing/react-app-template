import React from 'react';
import {useTranslation} from 'react-i18next';

import {AppShell, Image, Table} from '@mantine/core';

import {Footer, Header} from '../../components/common';

import {useGetUsers} from '../../api/tanstack-hooks/useGetUsers';

export const Dashboard: React.FC = () => {
  const {t} = useTranslation('Dashboard');

  const {data, isLoading} = useGetUsers({results: 50});

  if (isLoading) {
    return (
      <AppShell data-testid="loader">
        {t('actions.loading', {ns: 'Common'})}
      </AppShell>
    );
  }

  const rows = data?.results.map((element, idx) => (
    <tr data-testid="user-info-row" key={idx}>
      <td>{element.gender}</td>
      <td>{`${element.name.first} ${element.name.last}`}</td>
      <td>{element.location.country}</td>
      <td>{element.email}</td>
      <td>{element.phone}</td>
      <td>
        <Image src={element.picture.thumbnail} alt={`thumbnail-${idx}`} />
      </td>
    </tr>
  ));

  return (
    <AppShell
      data-testid="dashboard"
      padding="md"
      header={<Header />}
      footer={<Footer />}
    >
      <Table data-testid="user-table" highlightOnHover>
        <thead>
          <tr>
            <th>{t('userTable.gender')}</th>
            <th>{t('userTable.name')}</th>
            <th>{t('userTable.country')}</th>
            <th>{t('userTable.email')}</th>
            <th>{t('userTable.phone')}</th>
            <th>{t('userTable.picture')}</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </AppShell>
  );
};
