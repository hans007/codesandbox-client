// @flow
import _debug from 'common/lib/utils/debug';
import type { CurrentUser } from 'common/lib/types';

const debug = _debug('cs:analytics');

const sentryAvailable = () => typeof window.Raven === 'object';

function identifySentry(user: CurrentUser) {
  if (!sentryAvailable()) return;

  window.Raven.setUserContext({
    id: user.id,
    username: user.username,
  });
}

export function identify(user: CurrentUser) {
  debug(`Identified ${user.username}`);
  identifySentry(user);
}
