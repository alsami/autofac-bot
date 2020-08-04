import { BenchmarkRequest } from '@autofac-bot/models';

export interface RunningRequest {
  startedAt: Date;
  requester: string;
  request: BenchmarkRequest;
}
