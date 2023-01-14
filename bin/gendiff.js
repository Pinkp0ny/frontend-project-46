#!/usr/bin/env node
import { program } from 'commander';

program
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'Output format')
  .argument('<filepath1> <filepath2>');
program.parse();
