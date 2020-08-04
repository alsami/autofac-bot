import {
  BENCHMARK_COMMAD,
  HELP_COMMAND,
  UNKNWON_COMMAND,
} from '@autofac-bot/constants';

const commandKey = [HELP_COMMAND, BENCHMARK_COMMAD, UNKNWON_COMMAND];

export type Command = typeof commandKey[number];

export function validCommand(command: string): Command {
  const key = commandKey.find(
    (commandKey) => commandKey === command?.toLowerCase()
  );

  if (key) {
    return key;
  }

  return UNKNWON_COMMAND;
}
