import { ActionIcon } from '@lobehub/ui';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const BottomActions = memo(() => {
  const { t } = useTranslation('common');

  return (
      <Link aria-label={t('document')} href="https://guilin.app" target={'_blank'}>
        <ActionIcon icon={Github} placement={'right'} title={t('document')} />
      </Link>
  );
});

export default BottomActions;
