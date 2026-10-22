import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { HIRAGANA_DATA, KATAKANA_DATA, DAKUON_DATA, YOON_DATA } from '../src/data/kanaData';
import { N5_KANJI } from '../src/data/n5/kanji';
import { N5_GRAMMAR } from '../src/data/n5/grammar';
import { N5_VOCAB_SRS } from '../src/data/n5/vocab';
import { N4_KANJI } from '../src/data/n4/kanji';
import { N4_GRAMMAR } from '../src/data/n4/grammar';
import { N4_VOCAB_SRS } from '../src/data/n4/vocab';
import { N3_KANJI } from '../src/data/n3/kanji';
import { N3_GRAMMAR } from '../src/data/n3/grammar';
import { N3_VOCAB_SRS } from '../src/data/n3/vocab';
import { DOKKAI_READINGS } from '../src/data/n3/readings';
import { N2_KANJI } from '../src/data/n2/kanji';
import { N2_GRAMMAR } from '../src/data/n2/grammar';
import { N2_VOCAB_SRS } from '../src/data/n2/vocab';
import { N2_READINGS } from '../src/data/n2/readings';
import { N1_KANJI } from '../src/data/n1/kanji';
import { N1_GRAMMAR } from '../src/data/n1/grammar';
import { N1_VOCAB_SRS } from '../src/data/n1/vocab';
import { N1_READINGS } from '../src/data/n1/readings';
import { PHONETIC_RULES } from '../src/data/phoneticRules';
import { NUANCE_PAIRS } from '../src/data/nuancePairs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, '../public/data');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const allKana = [...HIRAGANA_DATA, ...KATAKANA_DATA, ...DAKUON_DATA, ...YOON_DATA];

const chunks: Record<string, unknown> = {
  'kana.json': allKana,
  'n5_kanji.json': N5_KANJI,
  'n5_grammar.json': N5_GRAMMAR,
  'n5_vocab.json': N5_VOCAB_SRS,
  'n4_kanji.json': N4_KANJI,
  'n4_grammar.json': N4_GRAMMAR,
  'n4_vocab.json': N4_VOCAB_SRS,
  'n3_kanji.json': N3_KANJI,
  'n3_grammar.json': N3_GRAMMAR,
  'n3_vocab.json': N3_VOCAB_SRS,
  'n3_readings.json': DOKKAI_READINGS,
  'n2_kanji.json': N2_KANJI,
  'n2_grammar.json': N2_GRAMMAR,
  'n2_vocab.json': N2_VOCAB_SRS,
  'n2_readings.json': N2_READINGS,
  'n1_kanji.json': N1_KANJI,
  'n1_grammar.json': N1_GRAMMAR,
  'n1_vocab.json': N1_VOCAB_SRS,
  'n1_readings.json': N1_READINGS,
  'phonetic_rules.json': PHONETIC_RULES,
  'nuance_pairs.json': NUANCE_PAIRS,
};

const manifest: Record<string, { count: number; size: number }> = {};

for (const [filename, data] of Object.entries(chunks)) {
  const filePath = path.join(outDir, filename);
  const jsonStr = JSON.stringify(data);
  fs.writeFileSync(filePath, jsonStr, 'utf-8');
  manifest[filename] = {
    count: Array.isArray(data) ? data.length : 1,
    size: Buffer.byteLength(jsonStr, 'utf8'),
  };
  console.log(`Exported ${filename}: ${manifest[filename].count} items (${(manifest[filename].size / 1024).toFixed(1)} KB)`);
}

const manifestPayload = {
  version: '2.0.0',
  generatedAt: new Date().toISOString(),
  chunks: manifest,
};

fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifestPayload, null, 2), 'utf-8');
console.log('Successfully generated public/data manifest.json');

