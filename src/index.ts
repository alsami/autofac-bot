import {
  BENCHMARK_COMMAD,
  HELP_COMMAND,
  UNKNWON_COMMAND,
} from '@autofac-bot/constants';
import { postBenchmarkRequest, postHelpComment } from '@autofac-bot/functions';
import { autobotRequest } from '@autofac-bot/guards/guard.functions';
import { validCommand } from '@autofac-bot/helper/command.extractor';
import { Application } from 'probot';

export = (app: Application) => {
  app.on('issue_comment', async (context) => {
    if (context.isBot) return;

    if (context.payload.action === 'deleted') return;

    const association = context.payload.issue.author_association;

    if (!(association === 'MEMBER' || association === 'OWNER')) {
      console.log('HERE', context.payload.issue.author_association);
      return;
    }

    if (!autobotRequest(context)) return;

    const words = context.payload.comment.body
      .trimLeft()
      .trimRight()
      .split(' ');

    if (words?.length < 2) return;

    const command = validCommand(words[1]);

    if (command === UNKNWON_COMMAND) {
      return;
    }

    if (command === HELP_COMMAND) {
      await postHelpComment(context);
      return;
    }

    if (command !== BENCHMARK_COMMAD) {
      return;
    }

    await postBenchmarkRequest(context, words);
  });
};
