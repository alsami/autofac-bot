import { HelpGeneratorService } from '@autofac-bot/services/help-generator.service';
import { Context } from 'probot';

export async function postHelpComment(context: Context): Promise<any> {
  const helpGenerator = new HelpGeneratorService();
  const issueComment = context.issue({
    body: helpGenerator.generate(context.payload.sender.login),
  });
  await context.github.issues.createComment(issueComment);
  return;
}
