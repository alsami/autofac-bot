import { AUTOFAC_BOT_ALIAS } from '@autofac-bot/constants';
import { Context } from 'probot';

export function autobotRequest(context: Context): boolean {
  const loweredComment = context.payload?.comment?.body?.toLowerCase();
  return loweredComment && loweredComment.startsWith(AUTOFAC_BOT_ALIAS);
}
