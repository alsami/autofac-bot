import { Repository } from '@autofac-bot/models';

export interface BenchmarkRequest {
  targetRepository: Repository;
  sourceRepository: Repository;
  benchmark: string;
}
