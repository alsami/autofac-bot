import fetch, { Response } from 'node-fetch';
import { Context } from 'probot';

export class IssueInfoLoaderService {
  public async loadRepositoryInfo(context: Context): Promise<Response> {
    const repositoryUrl = context.payload.issue.repository_url;

    return await fetch(repositoryUrl);
  }

  public async loadPullRequestInfo(context: Context): Promise<Response | null> {
    const issue = context.payload.issue;
    if (!issue.pull_request) return null;

    const pullRequestInfoUrl = issue.pull_request.url;

    return await fetch(pullRequestInfoUrl);
  }
}
