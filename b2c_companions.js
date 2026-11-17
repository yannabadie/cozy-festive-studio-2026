/**
 * b2c_companions.js — YGN Interactive B2C Web Companion Engine (FR / EN)
 * Dual-compatible zero-CDN module:
 *   - Browser: globalThis.B2CCompanions / window.B2CCompanions
 *   - Node v24+: module.exports = B2CCompanions
 *
 * Covers:
 *   F6: Le Mystère du Réveillon Doré / The Midnight Mistletoe Mystery (Valmont Manor)
 *   F7: Pack Focus & Reset 2027 / ADHD Dopamine & Notion AI Cockpit
 */
(function (root) {
  'use strict';

  var CONFIRM_UNLOCK_TOKEN = 'CONFIRM_UNSEAL_2340';

  var VAULT_XOR_KEY = [0x59, 0x47, 0x4E, 0x32, 0x36, 0x56, 0x4D];
  var SEALED_VAULT_B64 =
    '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';

  function normalizeLang(lang) {
    return String(lang || 'fr').toLowerCase().indexOf('en') === 0 ? 'en' : 'fr';
  }

  function stripDiacritics(str) {
    return String(str || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/['’`]/g, '')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function decodeBase64Bytes(b64) {
    if (typeof atob === 'function') {
      var bin = atob(b64);
      var out = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) {
        out[i] = bin.charCodeAt(i);
      }
      return out;
    }
    if (typeof Buffer !== 'undefined') {
      return new Uint8Array(Buffer.from(b64, 'base64'));
    }
    throw new Error('Base64 decoder unavailable');
  }

  function decodeUtf8(bytes) {
    if (typeof TextDecoder !== 'undefined') {
      return new TextDecoder('utf-8').decode(bytes);
    }
    if (typeof Buffer !== 'undefined') {
      return Buffer.from(bytes).toString('utf8');
    }
    var s = '';
    for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return decodeURIComponent(escape(s));
  }

  // =========================================================================
  // F6 — LE MYSTÈRE DU RÉVEILLON DORÉ / VALMONT MANOR CANON (SPOILER-FREE)
  // =========================================================================

  var SUSPECTS = [
    {
      id: 'camille_valdor',
      number: 1,
      name: "Camille de Val-d'Or",
      role: 'Le Neveu Flamboyant',
      name_fr: "Camille de Val-d'Or",
      name_en: 'Julian Valmont',
      role_fr: 'Le Neveu Flamboyant',
      role_en: 'The Flamboyant Nephew',
      archetype: 'flamboyant_collector',
      traits: [
        'flamboyant', 'extrovert', 'theatrical', 'champagne', 'velvet',
        'art', 'bold', 'dramatic', 'fireplace', 'social', 'party', 'charismatic',
        'extraverti', 'theatral', 'velours', 'collectionneur', 'audacieux'
      ],
      aliases: [
        'camille', 'julian', 'camille de val dor', 'camille de valdor',
        'julian valmont', 'val dor', 'neveu', 'nephew'
      ],
      public_fr: "Collectionneur d'art charismatique toujours vêtu d'un smoking en velours bordeaux.",
      public_en: 'Charismatic Bond Street art dealer in a burgundy velvet dinner jacket.',
      alibi_fr: "« J'étais près de la cheminée, mon verre de champagne à la main ! »",
      alibi_en: "'I stood right by the fireplace holding my champagne coupe!'",
      round2_prompt_fr: "Explique nerveusement sa présence près du buffet du salon à 23h42 pour récupérer un document personnel lié à une galerie genevoise.",
      round2_prompt_en: 'Nervously explains creeping near the sideboard drawer at 11:42 PM regarding a private Geneva gallery paper.',
      attire_fr: 'Veste de smoking en velours bordeaux, pochette dorée et coupe de champagne',
      attire_en: 'Burgundy velvet dinner jacket, gold pocket square, champagne coupe'
    },
    {
      id: 'celeste_moreau',
      number: 2,
      name: 'Céleste Moreau',
      role: 'La Cheffe Pâtissière Étoilée',
      name_fr: 'Céleste Moreau',
      name_en: 'Celeste Moreau',
      role_fr: 'La Cheffe Pâtissière Étoilée',
      role_en: 'The Celebrity Pastry Chef',
      archetype: 'poised_artisan',
      traits: [
        'creative', 'calm', 'gourmet', 'dessert', 'sweet', 'pastry',
        'artisan', 'precise', 'kitchen', 'culinary', 'graceful', 'perfectionist',
        'creatif', 'calme', 'gourmand', 'patisserie', 'cheffe', 'douceur'
      ],
      aliases: [
        'celeste', 'celeste moreau', 'moreau', 'cheffe', 'chef', 'patissiere', 'pastry chef'
      ],
      public_fr: 'Créatrice de la bûche impériale dorée du réveillon, calme, posée et très observatrice.',
      public_en: "Mastermind behind tonight's gilded Yule log; poised, refined, and sharp-eyed.",
      alibi_fr: "« Je tenais le plateau à desserts en argent près de la porte de l'office. »",
      alibi_en: "'I never let go of the silver dessert tray by the pantry door.'",
      round2_prompt_fr: "Justifie les traces de paillettes de sucre doré près du sous-sol par une bouteille millésimée mise au frais à 23h25.",
      round2_prompt_en: 'Accounts for edible gold shimmer near the cellar stairs from chilling a vintage champagne bottle at 11:25 PM.',
      attire_fr: 'Blouse de cheffe haute couture ivoire ou robe satinée champagne, ruban doré',
      attire_en: 'Ivory couture chef jacket or champagne satin dress with gold ribbon'
    },
    {
      id: 'victor_saint_clair',
      number: 3,
      name: 'Victor Saint-Clair',
      role: "L'Avocat de la Famille",
      name_fr: 'Victor Saint-Clair',
      name_en: 'Victor Sinclair',
      role_fr: "L'Avocat de la Famille",
      role_en: 'The Family Estate Attorney',
      archetype: 'meticulous_strategist',
      traits: [
        'analytical', 'formal', 'strategist', 'legal', 'logic', 'watch',
        'meticulous', 'calculated', 'law', 'structured', 'serious', 'debate',
        'analytique', 'formel', 'stratege', 'juriste', 'logique', 'rigoureux'
      ],
      aliases: [
        'victor', 'victor saint clair', 'victor sinclair', 'saint clair',
        'sinclair', 'avocat', 'attorney', 'lawyer', 'maitre'
      ],
      public_fr: 'Gardien des testaments Val-d’Or depuis vingt ans, méthodique, montre à gousset au gilet.',
      public_en: 'Keeper of the Valmont estate wills for twenty years; formal, meticulous, pocket watch on waistcoat.',
      alibi_fr: "« Je n'ai pas bougé de mon fauteuil en bout de table durant les quatre minutes. »",
      alibi_en: "'I remained seated at the head of the table the entire four minutes.'",
      round2_prompt_fr: "Interrogé sur les initiales « V.S. » d'un objet brisé à 23h42 et sur une silhouette parfumée qui l'aurait frôlé dans le noir.",
      round2_prompt_en: "Questioned about the 'V.S.' initials found near the table center at 11:42 PM and a brisk collision in the dark.",
      attire_fr: 'Costume trois-pièces anthracite, gilet boutonné et chaîne de montre à gousset',
      attire_en: 'Charcoal three-piece suit, tailored waistcoat, antique pocket-watch chain'
    },
    {
      id: 'margot_delacroix',
      number: 4,
      name: 'Margot Delacroix',
      role: "L'Historienne des Joyaux",
      name_fr: 'Margot Delacroix',
      name_en: 'Margot Delacroix',
      role_fr: "L'Historienne des Joyaux",
      role_en: 'The Gemologist',
      archetype: 'enigmatic_connoisseur',
      traits: [
        'mysterious', 'elegant', 'sharp', 'luxury', 'gems', 'jewelry',
        'perfume', 'glamorous', 'independent', 'enigmatic', 'aesthetic', 'connoisseur',
        'mysterieux', 'mysterieuse', 'elegante', 'joyaux', 'parfum', 'raffinee'
      ],
      aliases: [
        'margot', 'margot delacroix', 'delacroix', 'historienne', 'gemologist', 'gemmologue'
      ],
      public_fr: "Experte venue authentifier le joyau ce soir ; parfum signature « Cèdre Fumé ».",
      public_en: "Renowned gem appraiser hired to certify the heirloom tonight; signature scent 'Smoked Cedar'.",
      alibi_fr: "« Je protégeais ma sacoche de loupes près de la fenêtre gothique ! »",
      alibi_en: "'I stayed right beside the gothic window guarding my lens case!'",
      round2_prompt_fr: "Défend sa réputation internationale d'experte et explique sa présence près du rideau de la fenêtre gothique avant l'extinction des feux.",
      round2_prompt_en: 'Defends her international appraisal reputation and explains standing near the gothic window curtain before the lights went out.',
      attire_fr: 'Robe fourreau vert émeraude ou velours noir, gants fins et loupe de joaillier',
      attire_en: "Emerald evening gown or black velvet suit, fine gloves, jeweler's loupe"
    },
    {
      id: 'henri_beaulieu',
      number: 5,
      name: 'Dr. Henri Beaulieu',
      role: "Le Médecin & Ami d'Enfance",
      name_fr: 'Dr. Henri Beaulieu',
      name_en: 'Dr. Henry Beaumont',
      role_fr: "Le Médecin & Ami d'Enfance",
      role_en: 'Lifelong Family Physician',
      archetype: 'warm_observer',
      traits: [
        'warm', 'observant', 'classic', 'gentleman', 'doctor', 'tea',
        'fireside', 'patient', 'wise', 'empathetic', 'vintage', 'horology',
        'chaleureux', 'observateur', 'classique', 'medecin', 'sage', 'horlogerie'
      ],
      aliases: [
        'henri', 'henry', 'dr henri beaulieu', 'henri beaulieu',
        'dr henry beaumont', 'henry beaumont', 'beaulieu', 'beaumont', 'docteur', 'doctor', 'physician'
      ],
      public_fr: "Gentleman affable et chirurgien retraité, grand passionné d'horlogerie ancienne.",
      public_en: 'Warm retired family surgeon with a keen eye for mechanical and horological details.',
      alibi_fr: "« Je cherchais mes allumettes à tâtons sur le manteau de la cheminée. »",
      alibi_en: "'I was feeling along the mantelpiece for the matchbox.'",
      round2_prompt_fr: "Partage une observation visuelle précise : à 23h39, une brève lueur bleutée a jailli près du sapin du salon.",
      round2_prompt_en: 'Shares a precise visual detail: at 11:39 PM, seconds before darkness fell, a tiny blue flash appeared near the salon tree.',
      attire_fr: 'Veste en tweed chic ou smoking classique, nœud papillon et lunettes rondes',
      attire_en: 'Tailored tweed dinner jacket or classic tuxedo, bow tie, round spectacles'
    },
    {
      id: 'ines_valmont',
      number: 6,
      name: 'Inès Valmont',
      role: 'La Romancière à Succès',
      name_fr: 'Inès Valmont',
      name_en: 'Ines Valmont',
      role_fr: 'La Romancière à Succès',
      role_en: 'The Crime Novelist Cousin',
      archetype: 'witty_sleuth',
      traits: [
        'curious', 'witty', 'storyteller', 'writer', 'detective', 'notebook',
        'clever', 'ironic', 'investigative', 'literary', 'podcast', 'observer',
        'curieux', 'curieuse', 'romanciere', 'ecrivain', 'carnet', 'ironique'
      ],
      aliases: [
        'ines', 'ines valmont', 'romanciere', 'novelist', 'cousine', 'author', 'writer'
      ],
      public_fr: 'Cousine éloignée au trait d’esprit redoutable qui note chaque détail dans son carnet rouge.',
      public_en: 'Witty bestselling crime author jotting sharp observations in a red leather journal.',
      alibi_fr: "« J'enregistrais une note vocale d'inspiration sur mon téléphone à ma place. »",
      alibi_en: "'I was dictating a plot voice memo into my phone right at my seat.'",
      round2_prompt_fr: "Révèle que son téléphone a continué d'enregistrer l'ambiance sonore du salon à 23h42 pendant la coupure de courant.",
      round2_prompt_en: 'Reveals that her phone voice memo kept recording the acoustic sequence inside the dark dining hall at 11:42 PM.',
      attire_fr: 'Robe cocktail grenat, porte-plume doré et petit carnet rouge à couverture cuir',
      attire_en: 'Garnet cocktail dress, gold fountain pen, red leather-bound notebook'
    }
  ];

  var CLUES = [
    {
      id: 'clue_01',
      number: 1,
      timestamp: '23h42',
      title_fr: 'Indice #1 — La Montre à Gousset Brisée (23h42)',
      title_en: 'Clue #1 — The Shattered Pocket Watch (Stopped at 11:42 PM)',
      body_fr: 'Les aiguilles se sont figées à 23h42 exactes au pied du plat central. Les initiales gravées au dos ne sont pas celles du grand-père, mais « V.S. ».',
      body_en: "Found right beside the silver cloche. Stopped at 11:42 PM sharp, with the initials 'V.S.' engraved on the back case—not Grandfather Valmont's!"
    },
    {
      id: 'clue_02',
      number: 2,
      timestamp: '23h40',
      title_fr: 'Indice #2 — La Prise du Sapin près de la Fenêtre Gothique',
      title_en: 'Clue #2 — The Gothic Window Tree Outlet',
      body_fr: 'Un minuscule minuteur électrique fondu est branché sur la multiprise des guirlandes : la panne de 23h40 a été programmée à distance sans descendre à la cave !',
      body_en: 'A charred micro-timer plug is wedged behind the velvet curtain: the 11:40 PM blackout was triggered automatically without anyone going down to the cellar!'
    },
    {
      id: 'clue_03',
      number: 3,
      timestamp: '23h41',
      title_fr: "Indice #3 — La Trace Olfactive sur la Cloche d'Argent",
      title_en: 'Clue #3 — Scent on the Velvet Cloche Ribbon',
      body_fr: 'Le ruban de velours entourant la poignée de la cloche est imprégné d’une essence rare de « Cèdre Fumé ».',
      body_en: "The silk-velvet ribbon tied to the silver cloche handle carries a distinct trace of rare 'Smoked Cedar' extrait de parfum."
    },
    {
      id: 'clue_04',
      number: 4,
      timestamp: '23h42',
      title_fr: 'Indice #4 — Le Feuillage Épineux & Mémo Vocal 23h42',
      title_en: 'Clue #4 — Crushed Holly Berries & 11:42 PM Voice Memo',
      body_fr: "Des baies rouges sont écrasées au cœur de la couronne de houx centrale — concordant avec le mémo d'Inès à 23h42 : 1) tintement de cloche, 2) verre de montre brisé, 3) bruissement de houx rigide.",
      body_en: "Fresh berries are crushed around a hollow inside the prickly holly centerpiece—matching Ines's 11:42 PM memo: 1) cloche clang, 2) watch shatter, 3) stiff holly rustling."
    }
  ];

  var ACT_PHASES = [
    {
      id: 'act_1',
      act: 1,
      minutes: 15,
      seconds: 900,
      title_fr: "Acte I — L'Apéritif & Les Présentations (15 min)",
      title_en: 'Act I — Welcome Drinks & Introductions (15 min)',
      cue_fr: "Lisez le Rapport d'Incident (23h45). Chaque suspect se présente et déclame son Alibi du Tour 1 aux chandelles.",
      cue_en: 'Read the Official Incident Brief (11:45 PM). Each guest introduces their character and shares their Round 1 Alibi.'
    },
    {
      id: 'act_2',
      act: 2,
      minutes: 30,
      seconds: 1800,
      title_fr: 'Acte II — Le Plat Principal & Les 4 Pièces à Conviction (30 min)',
      title_en: 'Act II — Main Course & The 4 Forensic Clues (30 min)',
      cue_fr: "Dévoilez les 4 Indices au centre de la table, jouez le Mémo Vocal 23h42 d'Inès et ouvrez le contre-interrogatoire.",
      cue_en: "Reveal the 4 Clues at the center of the table, play Ines's 23h42 Voice Memo cue, and cross-examine timelines."
    },
    {
      id: 'act_3',
      act: 3,
      minutes: 20,
      seconds: 1200,
      title_fr: 'Acte III — Le Dessert, Le Vote & La Révélation (20 min)',
      title_en: 'Act III — Dessert, Final Ballots & The Reveal (20 min)',
      cue_fr: 'Enregistrez les bulletins (Coupable + Meilleur Acteur), faites résonner le Gong, puis décachetez la Solution Finale.',
      cue_en: 'Collect final ballots (Culprit + Best Actor), strike the Accusation Gong, then unseal the Final Solution.'
    }
  ];

  var INES_MEMO_SCRIPT = [
    { stage: 1, stageIndex: 0, atMs: 450, code: 'cloche', label_fr: '1. Tintement de la cloche d’argent', label_en: '1. Silver cloche metallic clang' },
    { stage: 2, stageIndex: 1, atMs: 1950, code: 'watch', label_fr: '2. Choc & montre « V.S. » brisée', label_en: "2. Collision & 'V.S.' watch crystal shatter" },
    { stage: 3, stageIndex: 2, atMs: 3350, code: 'holly', label_fr: '3. Bruissement du houx rigide central', label_en: '3. Stiff holly centerpiece leaves rustling' }
  ];

  function localizeSuspect(s, lang) {
    var isEn = normalizeLang(lang) === 'en';
    return {
      id: s.id,
      number: s.number,
      name: isEn ? s.name_en : s.name_fr,
      name_fr: s.name_fr,
      name_en: s.name_en,
      role: isEn ? s.role_en : s.role_fr,
      role_fr: s.role_fr,
      role_en: s.role_en,
      archetype: s.archetype,
      traits: s.traits.slice(),
      publicPersona: isEn ? s.public_en : s.public_fr,
      alibi: isEn ? s.alibi_en : s.alibi_fr,
      round2Prompt: isEn ? s.round2_prompt_en : s.round2_prompt_fr,
      attireTip: isEn ? s.attire_en : s.attire_fr
    };
  }

  function resolveSuspect(ref) {
    if (ref === null || ref === undefined || ref === '') return null;
    if (typeof ref === 'number' && Number.isFinite(ref)) {
      var n = Math.trunc(ref);
      if (n >= 1 && n <= SUSPECTS.length) return SUSPECTS[n - 1];
      if (n >= 0 && n < SUSPECTS.length) return SUSPECTS[n];
      return null;
    }
    if (typeof ref === 'object') {
      var candidate = ref.accused || ref.suspectId || ref.suspect || ref.id || ref.name || ref.target || ref.vote;
      if (candidate !== undefined && candidate !== ref) return resolveSuspect(candidate);
      return null;
    }
    var raw = String(ref).trim();
    if (!raw) return null;

    var numMatch = raw.match(/^#?\s*([1-6])(?:\b|\.)/);
    if (numMatch && raw.length <= 4) {
      return SUSPECTS[parseInt(numMatch[1], 10) - 1];
    }

    var norm = stripDiacritics(raw);
    var normUnderscore = norm.replace(/\s+/g, '_');

    for (var i = 0; i < SUSPECTS.length; i++) {
      var s = SUSPECTS[i];
      if (s.id === normUnderscore || s.id === raw.toLowerCase()) return s;
      if (stripDiacritics(s.name_fr) === norm || stripDiacritics(s.name_en) === norm) return s;
      for (var a = 0; a < s.aliases.length; a++) {
        if (stripDiacritics(s.aliases[a]) === norm) return s;
      }
    }

    for (var j = 0; j < SUSPECTS.length; j++) {
      var sj = SUSPECTS[j];
      for (var k = 0; k < sj.aliases.length; k++) {
        var aliasNorm = stripDiacritics(sj.aliases[k]);
        if (aliasNorm.length >= 4 && norm.indexOf(aliasNorm) !== -1) {
          return sj;
        }
      }
    }
    return null;
  }

  function matchSuspectRole(answers, lang) {
    var l = normalizeLang(lang);
    var tokens = [];
    var numericPicks = [];

    function collect(val) {
      if (val === null || val === undefined) return;
      if (typeof val === 'number' && Number.isFinite(val)) {
        numericPicks.push(Math.trunc(val));
        return;
      }
      if (Array.isArray(val)) {
        for (var i = 0; i < val.length; i++) collect(val[i]);
        return;
      }
      if (typeof val === 'object') {
        var keys = Object.keys(val);
        for (var k = 0; k < keys.length; k++) collect(val[keys[k]]);
        return;
      }
      var str = stripDiacritics(String(val));
      if (!str) return;
      if (/^[0-6]$/.test(str)) {
        numericPicks.push(parseInt(str, 10));
        return;
      }
      tokens.push(str);
      var parts = str.split(/\s+/);
      for (var p = 0; p < parts.length; p++) {
        if (parts[p] && tokens.indexOf(parts[p]) === -1) tokens.push(parts[p]);
      }
    }

    collect(answers);

    var scores = SUSPECTS.map(function (s, idx) {
      var score = 0;
      var normTraits = s.traits.map(stripDiacritics);
      var searchableBlob = [
        stripDiacritics(s.id.replace(/_/g, ' ')),
        stripDiacritics(s.role_fr),
        stripDiacritics(s.role_en),
        stripDiacritics(s.public_fr),
        stripDiacritics(s.public_en),
        stripDiacritics(s.archetype.replace(/_/g, ' '))
      ].join(' ');

      for (var t = 0; t < tokens.length; t++) {
        var tok = tokens[t];
        if (s.id === tok.replace(/\s+/g, '_')) {
          score += 25;
        } else if (normTraits.indexOf(tok) !== -1) {
          score += 12;
        } else if (tok.length >= 4) {
          var hitTrait = false;
          for (var nt = 0; nt < normTraits.length; nt++) {
            if (normTraits[nt].indexOf(tok) !== -1 || tok.indexOf(normTraits[nt]) !== -1) {
              score += 6;
              hitTrait = true;
              break;
            }
          }
          if (!hitTrait && searchableBlob.indexOf(tok) !== -1) {
            score += 3;
          }
        }
      }

      for (var n = 0; n < numericPicks.length; n++) {
        var pick = numericPicks[n];
        if (pick >= 0 && pick <= 5 && numericPicks.every(function (x) { return x >= 0 && x <= 5; })) {
          if (pick === idx) score += 8;
        } else if (pick === s.number) {
          score += 8;
        }
      }

      return { suspect: s, index: idx, score: score };
    });

    var maxScore = 0;
    for (var m = 0; m < scores.length; m++) {
      if (scores[m].score > maxScore) maxScore = scores[m].score;
    }

    if (maxScore === 0 && tokens.length > 0) {
      var joined = tokens.join('|');
      var hash = 0;
      for (var c = 0; c < joined.length; c++) {
        hash = (hash * 31 + joined.charCodeAt(c)) >>> 0;
      }
      scores[hash % SUSPECTS.length].score = 5;
      maxScore = 5;
    }

    scores.sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      return a.index - b.index;
    });

    var best = scores[0].suspect;
    var view = localizeSuspect(best, l);
    return {
      suspect: view,
      id: best.id,
      suspectId: best.id,
      number: best.number,
      name: view.name,
      role: view.role,
      publicPersona: view.publicPersona,
      alibi: view.alibi,
      attireTip: view.attireTip,
      score: scores[0].score,
      matchScore: scores[0].score,
      ranking: scores.map(function (entry) {
        var sv = localizeSuspect(entry.suspect, l);
        return {
          id: sv.id,
          suspectId: sv.id,
          number: sv.number,
          name: sv.name,
          role: sv.role,
          score: entry.score
        };
      })
    };
  }

  function tallyAccusationVotes(votes, lang) {
    var l = normalizeLang(lang);
    var isEn = l === 'en';
    var counts = {};
    var actorCounts = {};
    var actorLabels = {};

    for (var i = 0; i < SUSPECTS.length; i++) {
      counts[SUSPECTS[i].id] = 0;
    }

    function addAccusation(ref, weight) {
      var w = typeof weight === 'number' && Number.isFinite(weight) ? Math.max(0, Math.trunc(weight)) : 1;
      if (w <= 0) return;
      var matched = resolveSuspect(ref);
      if (matched) {
        counts[matched.id] += w;
      }
    }

    function addActorVote(actorRef) {
      if (!actorRef) return;
      var matchedSuspect = resolveSuspect(actorRef);
      var key;
      var label;
      if (matchedSuspect) {
        key = matchedSuspect.id;
        label = isEn ? matchedSuspect.name_en : matchedSuspect.name_fr;
      } else {
        var clean = String(actorRef).trim();
        if (!clean) return;
        key = 'guest:' + stripDiacritics(clean);
        label = clean;
      }
      actorCounts[key] = (actorCounts[key] || 0) + 1;
      if (!actorLabels[key]) actorLabels[key] = label;
    }

    if (Array.isArray(votes)) {
      for (var v = 0; v < votes.length; v++) {
        var item = votes[v];
        if (item && typeof item === 'object' && !Array.isArray(item)) {
          var acc = item.accused || item.suspect || item.suspectId || item.vote || item.target || item.id || item.name;
          var weight = typeof item.count === 'number' ? item.count : (typeof item.votes === 'number' ? item.votes : 1);
          addAccusation(acc, weight);
          var act = item.bestActor || item.actor || item.dramatic || item.performance || item.bestPerformance;
          if (act) addActorVote(act);
        } else {
          addAccusation(item, 1);
        }
      }
    } else if (votes && typeof votes === 'object') {
      var keys = Object.keys(votes);
      for (var k = 0; k < keys.length; k++) {
        var val = votes[keys[k]];
        if (typeof val === 'number') {
          addAccusation(keys[k], val);
        } else if (typeof val === 'string') {
          addAccusation(val, 1);
        }
      }
    }

    var totalVotes = 0;
    for (var sIdx = 0; sIdx < SUSPECTS.length; sIdx++) {
      totalVotes += counts[SUSPECTS[sIdx].id];
    }

    var tallies = SUSPECTS.map(function (s) {
      var c = counts[s.id];
      var pct = totalVotes > 0 ? Math.round((c / totalVotes) * 1000) / 10 : 0;
      return {
        id: s.id,
        suspectId: s.id,
        number: s.number,
        name: isEn ? s.name_en : s.name_fr,
        role: isEn ? s.role_en : s.role_fr,
        votes: c,
        count: c,
        percentage: pct
      };
    }).sort(function (a, b) {
      if (b.votes !== a.votes) return b.votes - a.votes;
      return a.number - b.number;
    });

    var topAccused = totalVotes > 0 ? tallies[0] : null;
    var tiedSuspects = [];
    if (topAccused && topAccused.votes > 0) {
      tiedSuspects = tallies.filter(function (t) { return t.votes === topAccused.votes; });
    }
    var isTie = tiedSuspects.length > 1;

    var bestActorWinner = null;
    var actorKeys = Object.keys(actorCounts);
    if (actorKeys.length > 0) {
      actorKeys.sort(function (a, b) { return actorCounts[b] - actorCounts[a]; });
      var bestKey = actorKeys[0];
      bestActorWinner = {
        id: bestKey.indexOf('guest:') === 0 ? null : bestKey,
        name: actorLabels[bestKey],
        votes: actorCounts[bestKey]
      };
    }

    var summary;
    if (totalVotes === 0) {
      summary = isEn
        ? 'No accusation ballots recorded yet around the table.'
        : "Aucun bulletin d'accusation enregistré pour le moment.";
    } else if (isTie) {
      var names = tiedSuspects.map(function (t) { return t.name; }).join(' & ');
      summary = isEn
        ? 'Deadlock around the manor table! Tied accusation (' + topAccused.votes + ' votes each): ' + names + '.'
        : 'Égalité parfaite autour de la table (' + topAccused.votes + ' voix chacun) : ' + names + '.';
    } else {
      summary = isEn
        ? 'The table accuses ' + topAccused.name + ' (' + topAccused.votes + '/' + totalVotes + ' votes, ' + topAccused.percentage + '%).'
        : 'La table accuse majoritairement ' + topAccused.name + ' (' + topAccused.votes + '/' + totalVotes + ' voix, ' + topAccused.percentage + ' %).';
    }

    return {
      totalVotes: totalVotes,
      tallies: tallies,
      counts: counts,
      topAccused: topAccused,
      winner: topAccused,
      isTie: isTie,
      tiedSuspects: tiedSuspects,
      bestActorWinner: bestActorWinner,
      summary: summary
    };
  }

  function isValidUnlockToken(confirmToken) {
    if (confirmToken === true) return true;
    if (!confirmToken) return false;
    if (typeof confirmToken === 'object') {
      return confirmToken.confirmed === true || confirmToken.token === CONFIRM_UNLOCK_TOKEN;
    }
    if (typeof confirmToken !== 'string') return false;
    var trimmed = confirmToken.trim();
    if (!trimmed) return false;
    if (/(false|wrong|invalid|cancel|abort|deny|refus|unconfirm|not[_-\s]|nope|\bnon\b|\bno\b|^0+$)/i.test(trimmed)) {
      return false;
    }
    if (trimmed === CONFIRM_UNLOCK_TOKEN) return true;
    return /^(confirm.*|unlock.*|reveal.*|unseal.*|devoil.*|dévoil.*|decachet.*|décachet.*|valmont.*|reveillon.*|réveillon.*|oui|yes|ok|1|true|2340|23h40|double[-_]?click.*)$/i.test(trimmed);
  }

  function decodeVaultObject() {
    var encBytes = decodeBase64Bytes(SEALED_VAULT_B64);
    var plain = new Uint8Array(encBytes.length);
    for (var i = 0; i < encBytes.length; i++) {
      plain[i] = encBytes[i] ^ VAULT_XOR_KEY[i % VAULT_XOR_KEY.length];
    }
    return JSON.parse(decodeUtf8(plain));
  }

  function unlockMysterySolution(confirmToken, lang) {
    var l = normalizeLang(lang);
    var isEn = l === 'en';
    if (!isValidUnlockToken(confirmToken)) {
      return {
        unlocked: false,
        error: 'CONFIRMATION_REQUIRED',
        message: isEn
          ? 'Sealed envelope locked: arm and confirm final unsealing (CONFIRM_UNSEAL_2340) once all guests have voted.'
          : 'Enveloppe scellée verrouillée : armez puis confirmez le décachetage final (CONFIRM_UNSEAL_2340) une fois tous les votes clos.'
      };
    }

    var vault = decodeVaultObject();
    var loc = isEn ? vault.en : vault.fr;
    return {
      unlocked: true,
      culpritId: vault.culpritId,
      culpritNumber: vault.culpritNumber,
      culprit: vault.culprit,
      culpritName: vault.culpritName,
      culpritRole: loc.culpritRole,
      stolenObject: loc.stolenObject,
      valueFormatted: loc.valueFormatted,
      blackoutTime: vault.blackoutTime,
      keyTimestamp: vault.keyTimestamp,
      motive: loc.motive,
      method: loc.method,
      hidingSpot: loc.hidingSpot,
      motiveAndTwist: loc.motive + ' ' + loc.method,
      clueChain: loc.clueChain.slice(),
      summary: loc.summary,
      fullText: loc.fullText
    };
  }

  // =========================================================================
  // F7 — PACK FOCUS & RESET 2027 / ADHD DOPAMINE & NOTION AI COCKPIT
  // =========================================================================

  var FOCUS_PRESET_CARDS = [
    {
      id: 'micro_5',
      minutes: 5,
      seconds: 300,
      label_fr: '5 min • Déblocage Express',
      label_en: '5 min • Frictionless Ignition',
      subtitle_fr: 'Vaincre l’inertie sans pression (< 300s)',
      subtitle_en: 'Beat task paralysis with zero pressure',
      strokeColor: '#7bd4a8'
    },
    {
      id: 'sprint_15',
      minutes: 15,
      seconds: 900,
      label_fr: '15 min • Sprint Dopamine',
      label_en: '15 min • Dopamine Sprint',
      subtitle_fr: 'Idéal brouillon imparfait à 60 %',
      subtitle_en: 'Ideal for a 60% good-enough messy draft',
      strokeColor: '#d4af6a'
    },
    {
      id: 'pomodoro_25',
      minutes: 25,
      seconds: 1500,
      label_fr: '25 min • Focus Calme',
      label_en: '25 min • Calm Focus Arc',
      subtitle_fr: 'Cadence anti-cécité temporelle',
      subtitle_en: 'Visual anti-time-blindness cadence',
      strokeColor: '#e8cb92'
    },
    {
      id: 'deep_45',
      minutes: 45,
      seconds: 2700,
      label_fr: '45 min • Quête Principale',
      label_en: '45 min • Main Quest Deep Work',
      subtitle_fr: 'Immersion Winter Arc & livrable clé',
      subtitle_en: 'High-leverage Winter Arc deep block',
      strokeColor: '#67b89a'
    }
  ];

  var FOCUS_PRESET_DETAILS = FOCUS_PRESET_CARDS;
  var FOCUS_PRESETS = [5, 15, 25, 45];
  Object.defineProperty(FOCUS_PRESETS, 'cards', {
    value: FOCUS_PRESET_CARDS,
    enumerable: false,
    writable: false
  });
  Object.defineProperty(FOCUS_PRESETS, 'details', {
    value: FOCUS_PRESET_DETAILS,
    enumerable: false,
    writable: false
  });

  function normalizeBatteryTier(batteryLevel) {
    if (typeof batteryLevel === 'string') {
      var s = stripDiacritics(batteryLevel);
      if (s.indexOf('low') !== -1 || s.indexOf('epuise') !== -1 || s.indexOf('bas') !== -1 || s.indexOf('20') !== -1) {
        return 20;
      }
      if (s.indexOf('high') !== -1 || s.indexOf('focus') !== -1 || s.indexOf('max') !== -1 || s.indexOf('100') !== -1) {
        return 100;
      }
      var parsed = parseFloat(batteryLevel.replace(/[^0-9.]/g, ''));
      if (Number.isFinite(parsed)) {
        if (parsed <= 35) return 20;
        if (parsed >= 80) return 100;
        return 60;
      }
      return 60;
    }
    if (typeof batteryLevel === 'number' && Number.isFinite(batteryLevel)) {
      if (batteryLevel <= 35) return 20;
      if (batteryLevel >= 80) return 100;
      return 60;
    }
    return 60;
  }

  function splitTaskForAdhd(taskText, batteryLevel, lang) {
    var l = normalizeLang(lang);
    var isEn = l === 'en';
    var tier = normalizeBatteryTier(batteryLevel);
    var cleaned = String(taskText || '').replace(/\s+/g, ' ').trim();
    var subject = cleaned || (isEn ? 'your priority open loop' : 'votre tâche prioritaire en attente');
    var shortSubject = subject.length > 72 ? subject.slice(0, 69) + '...' : subject;

    var steps;
    var details;
    var reward;

    if (tier === 20) {
      steps = isEn
        ? [
            '1. [< 120s Zero-Friction Setup] Open ONLY the single tab or file needed for "' + shortSubject + '", mute notifications, and take 3 slow breaths.',
            '2. [3-Min 60% Messy Micro-Draft] Write just the ugly title + 3 raw bullet points for "' + shortSubject + '"—zero editing allowed.',
            '3. [1-Min Safe Anchor & Pause] Save the file with a clear next-step note on top so your brain can rest guilt-free.'
          ]
        : [
            '1. [Amorce < 120s sans friction] Ouvrez UNIQUEMENT le fichier ou l’onglet lié à « ' + shortSubject + ' », coupez les alertes et prenez 3 grandes respirations.',
            '2. [Micro-action 3 min • Brouillon 60 %] Posez simplement le titre et 3 puces brutes pour « ' + shortSubject + ' » sans aucune mise en forme.',
            '3. [Ancrage 1 min & Repos autorisé] Enregistrez votre avancée avec une note d’étape suivante en haut de page puis accordez-vous une vraie pause.'
          ];
      reward = isEn
        ? 'Healthy Dopamine Reward: Warm herbal tea, gentle shoulder stretch, and 5 screen-free minutes.'
        : 'Récompense Dopamine Saine : Boisson chaude apaisante, étirement doux des épaules et 5 min sans écran.';
      details = [
        { stepNumber: 1, durationSeconds: 120, tag: isEn ? '< 120s Ignition' : 'Amorce < 120s', text: steps[0] },
        { stepNumber: 2, durationSeconds: 180, tag: isEn ? '60% Messy Start' : 'Brouillon 60 %', text: steps[1] },
        { stepNumber: 3, durationSeconds: 60, tag: isEn ? 'Guilt-Free Save' : 'Ancrage Calme', text: steps[2] }
      ];
    } else if (tier === 100) {
      steps = isEn
        ? [
            '1. [< 120s Scope Lock] Define the exact "done" boundary for "' + shortSubject + '" in one sentence and launch the radial timer.',
            '2. [4-Min Main Quest Core] Build the highest-leverage core section of "' + shortSubject + '" at 60% messy-draft speed before polishing a single word.',
            '3. [3-Min Verification & Ship] Run a quick quality pass, finalize/send "' + shortSubject + '", and log today’s Main Quest win!'
          ]
        : [
            '1. [Cadrage < 120s] Écrivez en une phrase le critère exact de fin pour « ' + shortSubject + ' » et lancez l’anneau visuel.',
            '2. [Cœur Quête Principale • 4 min] Produisez le bloc à plus fort levier de « ' + shortSubject + ' » en mode brouillon rapide à 60 % avant tout fignolage.',
            '3. [Vérification & Envoi • 3 min] Relisez les points clés, validez ou expédiez « ' + shortSubject + ' » et cochez votre Victoire du Jour !'
          ];
      reward = isEn
        ? 'Healthy Dopamine Reward: Play your favorite upbeat track and check off your Main Quest!'
        : 'Récompense Dopamine Saine : Écoutez votre morceau favori debout et savourez votre Quête Principale accomplie !';
      details = [
        { stepNumber: 1, durationSeconds: 120, tag: isEn ? 'Scope Lock' : 'Cadrage < 120s', text: steps[0] },
        { stepNumber: 2, durationSeconds: 240, tag: isEn ? 'Main Quest Core' : 'Cœur Levier', text: steps[1] },
        { stepNumber: 3, durationSeconds: 180, tag: isEn ? 'Ship & Close' : 'Clôture & Envoi', text: steps[2] }
      ];
    } else {
      steps = isEn
        ? [
            '1. [< 120s Workspace Clear] Close distracting tabs, open "' + shortSubject + '", and jot down the single most important outcome.',
            '2. [4-Min 60% Good-Enough Draft] Complete a 60% messy first pass of "' + shortSubject + '" without stopping to self-censor.',
            '3. [2-Min Clean Wrap-Up] Fix only the obvious gaps in "' + shortSubject + '", save/archive, and check off your dopamine streak!'
          ]
        : [
            '1. [Préparation < 120s] Fermez les onglets parasites, ouvrez « ' + shortSubject + ' » et notez en 8 mots le résultat concret visé.',
            '2. [Sprint 4 min • Brouillon acceptable à 60 %] Réalisez un premier jet imparfait à 60 % de « ' + shortSubject + ' » sans vous auto-censurer.',
            '3. [Finalisation 2 min] Corrigez uniquement l’essentiel sur « ' + shortSubject + ' », sauvegardez et validez votre série dopamine !'
          ];
      reward = isEn
        ? 'Healthy Dopamine Reward: Cold glass of water, sunlight by the window, and a guilt-free breather.'
        : 'Récompense Dopamine Saine : Grand verre d’eau fraîche, lumière naturelle à la fenêtre et respiration calme.';
      details = [
        { stepNumber: 1, durationSeconds: 120, tag: isEn ? '< 120s Prep' : 'Prépa < 120s', text: steps[0] },
        { stepNumber: 2, durationSeconds: 240, tag: isEn ? '60% Messy Draft' : 'Brouillon 60 %', text: steps[1] },
        { stepNumber: 3, durationSeconds: 120, tag: isEn ? 'Clean Save' : 'Sauvegarde', text: steps[2] }
      ];
    }

    Object.defineProperty(steps, 'steps', { value: steps, enumerable: false });
    Object.defineProperty(steps, 'details', { value: details, enumerable: false });
    Object.defineProperty(steps, 'batteryLevel', { value: tier, enumerable: false });
    Object.defineProperty(steps, 'taskText', { value: subject, enumerable: false });
    Object.defineProperty(steps, 'reward', { value: reward, enumerable: false });

    return steps;
  }

  var NOTION_AI_PROMPTS = [
    {
      id: 'agent_01',
      number: 1,
      db: 'DB_03',
      title_fr: "Agent 01 — Architecte d'Offre Irrésistible & Niche-Stacking",
      title_en: 'Agent 01 — Niche-Stacking & Triple-Monetization Architect',
      placeholder_fr: '[INSÉRER THÈME]',
      placeholder_en: '[INSERT TOPIC]',
      default_input_fr: 'Décompression après garde pour infirmières de nuit & adultes TDAH',
      default_input_en: 'Post-shift calm routines for night-shift nurses & ADHD adults',
      prompt_fr:
        'Tu es un stratège e-commerce senior spécialisé dans le Niche-Stacking.\n' +
        'À partir du thème suivant : [INSÉRER THÈME], génère 5 concepts de produits combinant :\n' +
        '1. Une audience ultra-spécifique (métier, passion ou étape de vie)\n' +
        '2. Une douleur ou émotion forte (cadeau, soulagement, gain de temps)\n' +
        '3. Une déclinaison triple : Produit PDF instantané (19 €) + Produit Print-on-Demand (39 €) + Offre VIP personnalisée (69 €).\n' +
        "Classe-les par facilité d'exécution en moins de 48h.",
      prompt_en:
        'Act as a senior e-commerce strategist specializing in Niche-Stacking.\n' +
        'Starting from this seed topic: [INSERT TOPIC], generate 5 high-margin product ecosystems combining:\n' +
        '1. A hyper-specific micro-audience (profession, hobby, or life milestone)\n' +
        '2. An urgent emotional or practical trigger (gifting, stress relief, time saved)\n' +
        '3. A 3-tier product ladder from a single creative asset: Instant Digital Download (19 USD) + Print-on-Demand Physical Item (45 USD) + Personalized VIP Keepsake (69 USD).\n' +
        'Rank all 5 by speed to launch within 48 hours.'
    },
    {
      id: 'agent_02',
      number: 2,
      db: 'DB_02',
      title_fr: 'Agent 02 — Usine à Scripts Vidéos Courtes (TikTok / Reels / Shorts — 18s)',
      title_en: 'Agent 02 — Short-Form Viral Video Scriptwriter (TikTok / Reels / Shorts)',
      placeholder_fr: '[NOM & BÉNÉFICE DU PRODUIT]',
      placeholder_en: '[PRODUCT NAME & CORE BENEFIT]',
      default_input_fr: 'Planner TDAH Hyperlié + Cockpit Dopamine (débloque une tâche paralysante en 5 minutes)',
      default_input_en: 'Hyperlinked ADHD Planner + Dopamine Cockpit (unblocks task paralysis in 5 minutes)',
      prompt_fr:
        'Tu es un directeur créatif TikTok Shop ayant généré plus de 10M de vues organiques.\n' +
        'Produit à vendre : [NOM & BÉNÉFICE DU PRODUIT].\n' +
        'Rédige 5 scripts vidéo de 18 secondes structurés exactement ainsi :\n' +
        '- [0-3s HOOK VISUEL + TEXTE ÉCRAN] : Arrêt du scroll immédiat par curiosité ou émotion.\n' +
        "- [3-10s DÉMONSTRATION / TRANSFORMATION] : Ce que l'on montre à l'image sans parler inutilement.\n" +
        '- [10-15s PREUVE / DÉTAIL DIFFÉRENCIANT] : Pourquoi ce produit change tout.\n' +
        '- [15-18s CTA DOUX] : Appel à l’action naturel vers le panier ou le lien en bio.\n' +
        'Inclus pour chaque script le prompt visuel exact pour générateur vidéo IA (9:16 vertical).',
      prompt_en:
        'Act as a short-form performance creative director.\n' +
        'Product: [PRODUCT NAME & CORE BENEFIT].\n' +
        'Write 5 18-second vertical video scripts structured strictly as:\n' +
        '- [0-3s VISUAL HOOK + ON-SCREEN TEXT]: Pattern interrupt sparking immediate curiosity or emotion.\n' +
        '- [3-10s LIVE TRANSFORMATION / DEMO]: Pure visual proof with zero filler words.\n' +
        '- [10-15s SPECIFIC DETAIL]: The exact feature that makes buyers comment "Where did you get this?".\n' +
        '- [15-18s FRICTIONLESS CTA]: Natural call-to-action to shop link or cart.\n' +
        'Include an exact 9:16 AI video generation prompt for every scene.'
    },
    {
      id: 'agent_03',
      number: 3,
      db: 'DB_03',
      title_fr: 'Agent 03 — Optimiseur SEO Etsy & Amazon KDP (Anti-Saturation)',
      title_en: 'Agent 03 — Etsy & Amazon KDP Long-Tail SEO Optimizer',
      placeholder_fr: '[DÉCRIRE PRODUIT]',
      placeholder_en: '[DESCRIBE PRODUCT]',
      default_input_fr: 'Livre de coloriage gros traits apaisant format carré 8.5x8.5 avec verso sombre anti-transparence',
      default_input_en: 'Square 8.5x8.5 bold & easy cozy coloring book with single-sided dark bleed-guard pages',
      prompt_fr:
        'Agis comme un expert algorithme Etsy & Amazon A10.\n' +
        'Pour le produit suivant : [DÉCRIRE PRODUIT], fournis :\n' +
        "1. Un titre SEO de 130 caractères max plaçant les 3 mots-clés d'intention d'achat cadeau en tête.\n" +
        '2. Exactement 13 tags Etsy de 20 caractères maximum chacun (espaces compris), privilégiant la longue traîne à faible concurrence.\n' +
        '3. 7 blocs de mots-clés backend Amazon KDP de 50 caractères max sans répétition de mots.\n' +
        "4. Une description persuasive de 250 mots structurée en puces orientées bénéfices + mention transparente d'assistance IA conforme aux règles de la plateforme.",
      prompt_en:
        'Act as an Etsy & Amazon A10 search specialist.\n' +
        'For this product: [DESCRIBE PRODUCT], output:\n' +
        '1. An SEO title (max 130 chars) front-loading high-intent gift keywords.\n' +
        '2. Exactly 13 Etsy tags (strictly 20 characters max each, including spaces) targeting low-competition long-tail searches.\n' +
        '3. 7 Amazon KDP backend keyword slots (max 50 characters each, zero word repetition).\n' +
        '4. A high-converting 250-word bulleted product description including compliant, transparent AI-assistance disclosure.'
    },
    {
      id: 'agent_04',
      number: 4,
      db: 'DB_04',
      title_fr: 'Agent 04 — Rédacteur de Séquence Email de Lancement (3 Emails)',
      title_en: 'Agent 04 — 3-Part Lead Magnet to Core Offer Email Funnel',
      placeholder_fr: "[NOM DE L'OFFRE]",
      placeholder_en: '[OFFER NAME]',
      default_input_fr: 'Pack Focus & Reset 2027 + Système Notion IA (29 €)',
      default_input_en: '2027 Focus Digital Planner + Solo Operator Notion AI OS (29 EUR)',
      prompt_fr:
        "Rédige une séquence de 3 emails courts (moins de 140 mots par email, ton humain et direct, zéro jargon marketing) pour convertir un prospect ayant téléchargé mon bonus gratuit vers mon offre principale : [NOM DE L'OFFRE].\n" +
        '- Email 1 (J+0) : Livraison + victoire rapide en 5 minutes.\n' +
        '- Email 2 (J+1) : L’erreur coûteuse que 90 % des gens font sur l’organisation quotidienne + étude de cas concrète.\n' +
        "- Email 3 (J+2) : Réponse à l'objection principale + clôture calme.",
      prompt_en:
        'Write a 3-email conversion sequence (under 140 words per email, plain human tone, zero hype) moving subscribers from my free checklist to my core offer: [OFFER NAME].\n' +
        '- Email 1 (Day 0): Instant quick win in under 5 minutes.\n' +
        '- Email 2 (Day 1): The hidden mistake costing them hours every week + concrete walkthrough.\n' +
        '- Email 3 (Day 2): Addressing the #1 hesitation + clean close.'
    },
    {
      id: 'agent_05',
      number: 5,
      db: 'DB_04',
      title_fr: 'Agent 05 — Générateur de Paroles Émotionnelles (Chanson Personnalisée)',
      title_en: 'Agent 05 — Custom Songwriter for Personalized Gift Orders',
      placeholder_fr: '[PRÉNOM, LIEN & SOUVENIRS]',
      placeholder_en: '[NAME, ROLE & MEMORIES]',
      default_input_fr: 'Claire (ma sœur, 40 ans) — nos étés dans les Pyrénées, son rire contagieux, guitare acoustique chaleureuse',
      default_input_en: 'Claire (my sister, turning 40) — summer roadtrips, kitchen laughter, warm acoustic folk guitar',
      prompt_fr:
        'Tu es un parolier professionnel français au style sincère, cinématographique et émouvant (zéro cliché artificiel).\n' +
        'Brief client : [PRÉNOM, LIEN & SOUVENIRS].\n' +
        'Écris des paroles complètes structurées avec les balises [Intro], [Verse 1], [Pre-Chorus], [Chorus], [Verse 2], [Bridge], [Chorus], [Outro]. Chaque couplet doit intégrer les détails réels avec des rimes riches et un rythme syllabique fluide prêt à être chanté.',
      prompt_en:
        'Act as an award-winning acoustic/pop songwriter known for deeply personal, tear-jerking storytelling without cheesy AI clichés.\n' +
        'Customer Order Brief: [NAME, ROLE & MEMORIES].\n' +
        'Write complete studio-ready lyrics formatted with [Intro], [Verse 1], [Pre-Chorus], [Chorus], [Verse 2], [Bridge], [Chorus], [Outro]. Weave every real memory naturally into tight meter and singable syllable counts.'
    },
    {
      id: 'agent_06',
      number: 6,
      db: 'DB_02',
      title_fr: 'Agent 06 — Contrôleur Qualité & Anti-« AI Slop »',
      title_en: 'Agent 06 — Quality & Anti-Slop Auditor',
      placeholder_fr: '[COLLER ICI]',
      placeholder_en: '[PASTE HERE]',
      default_input_fr: 'Page de présentation de mon outil interactif et de ses livrables PDF prêts à imprimer.',
      default_input_en: 'Draft landing page copy for my interactive companion app and printable PDF bundle.',
      prompt_fr:
        'Analyse le texte ou produit ci-dessous comme un acheteur exigeant et sceptique.\n' +
        'Supprime toutes les tournures typiques d’IA générique, remplace les adjectifs vagues par des faits précis et mesurables, vérifie la cohérence logique et signale les 3 points faibles qui pourraient provoquer une demande de remboursement.\n' +
        'Contenu à auditer : [COLLER ICI]',
      prompt_en:
        'Review the draft product/copy below through the eyes of a skeptical buyer paying with their own card.\n' +
        'Strip every generic AI phrase, replace vague claims with concrete specifics, verify internal consistency, and flag the top 3 friction points that could trigger a refund or 3-star review.\n' +
        'Draft: [PASTE HERE]'
    },
    {
      id: 'agent_07',
      number: 7,
      db: 'DB_03',
      title_fr: 'Agent 07 — Déclinaison Internationale Culturelle (FR ↔ US/UK)',
      title_en: 'Agent 07 — Cross-Market Transcreation Engine (US/UK ↔ FR/EU)',
      placeholder_fr: '[COLLER ICI]',
      placeholder_en: '[PASTE HERE]',
      default_input_fr: 'Jeu d’enquête de réveillon en huis clos avec 6 suspects, indices et menu imprimable.',
      default_input_en: 'Candlelit holiday dinner party whodunit for 6–8 guests with suspect dossiers and menu.',
      prompt_fr:
        "Adapte intégralement cette fiche produit et ces visuels textes pour le marché américain (US), non pas en traduisant mot à mot, mais en transcréant les références culturelles, les formats de papier (A4 -> US Letter 8.5x11\"), les devises et les habitudes d'achat locales (Secret Santa, Stocking Stuffer, Holiday Hosting).\n" +
        'Texte source : [COLLER ICI]',
      prompt_en:
        'Transcreate this listing and product copy for the French/European market. Do not translate literally: adapt paper sizes (US Letter -> A4), measurements, currency psychology, gifting occasions, and idiomatic humor so it reads 100% native.\n' +
        'Source: [PASTE HERE]'
    },
    {
      id: 'agent_08',
      number: 8,
      db: 'DB_01',
      title_fr: 'Agent 08 — Planificateur « Winter Arc / Focus 90 Jours »',
      title_en: 'Agent 08 — 90-Day Revenue Sprint Planner',
      placeholder_fr: '[MONTANT]',
      placeholder_en: '[AMOUNT]',
      default_input_fr: '9 000',
      default_input_en: '9,000',
      prompt_fr:
        "Découpe mon objectif de chiffre d'affaires de [MONTANT] € sur les 90 prochains jours en :\n" +
        '- 3 jalons mensuels mesurables\n' +
        '- 12 sprints hebdomadaires (1 livrable concret par semaine)\n' +
        "- Une routine quotidienne de 60 minutes à fort levier (Règle 80/20 : création d'actifs + distribution).\n" +
        'Présente le résultat sous forme de tableau importable en CSV dans Notion.',
      prompt_en:
        'Break down my 90-day revenue target of [AMOUNT] USD into:\n' +
        '- 3 monthly milestones\n' +
        '- 12 weekly shippable deliverables\n' +
        '- A high-leverage 60-minute daily execution block focused strictly on asset creation and traffic distribution.\n' +
        'Output as a clean CSV table ready to import directly into Notion.'
    }
  ].map(function (item) {
    item.title = item.title_fr;
    item.template_fr = item.prompt_fr;
    item.template_en = item.prompt_en;
    item.template = item.prompt_fr;
    item.prompt = item.prompt_fr;
    item.placeholder = item.placeholder_fr;
    return item;
  });

  function renderNotionPrompt(idOrIndex, customInput, lang) {
    var l = normalizeLang(lang);
    var isEn = l === 'en';
    var item = null;

    if (typeof idOrIndex === 'number' && Number.isFinite(idOrIndex)) {
      var n = Math.trunc(idOrIndex);
      item = NOTION_AI_PROMPTS.find(function (p) { return p.number === n; }) || NOTION_AI_PROMPTS[n] || NOTION_AI_PROMPTS[0];
    } else if (typeof idOrIndex === 'string') {
      var trimmed = idOrIndex.trim().toLowerCase();
      item = NOTION_AI_PROMPTS.find(function (p) {
        return p.id === trimmed || String(p.number) === trimmed || ('0' + p.number) === trimmed || trimmed.indexOf(p.id) === 0;
      }) || NOTION_AI_PROMPTS[0];
    } else {
      item = NOTION_AI_PROMPTS[0];
    }

    var template = isEn ? item.prompt_en : item.prompt_fr;
    var placeholder = isEn ? item.placeholder_en : item.placeholder_fr;
    var value = (customInput !== undefined && customInput !== null && String(customInput).trim() !== '')
      ? String(customInput).trim()
      : (isEn ? item.default_input_en : item.default_input_fr);

    return template.split(placeholder).join(value);
  }

  var DOPAMINE_MENU = {
    starters_fr: [
      'Boire un grand verre d’eau fraîche + 3 respirations lentes (90s)',
      'Étirer la nuque et les épaules loin de l’écran (2 min)',
      'Ranger uniquement un carré de 20 cm sur le bureau (2 min)'
    ],
    starters_en: [
      'Drink a tall glass of cold water + 3 slow breaths (90s)',
      'Roll shoulders & stretch neck away from the screen (2 min)',
      'Clear just one 8-inch square on your desk (2 min)'
    ],
    sides_fr: [
      'Bruit Brun Velours 1/f² à volume doux',
      'Anneau visuel 15 minutes (zéro horloge chiffrée stressante)',
      'Infusion chaude posée à côté du clavier'
    ],
    sides_en: [
      'Velvet 1/f² Brown Noise at gentle volume',
      '15-minute shrinking visual arc (no stressful ticking clock)',
      'Warm herbal tea mug beside your keyboard'
    ]
  };

  // =========================================================================
  // PROCEDURAL WEB AUDIO SYNTHESIZERS (ZERO EXTERNAL AUDIO FILES)
  // =========================================================================

  function getAudioContextConstructor() {
    if (typeof globalThis !== 'undefined' && (globalThis.AudioContext || globalThis.webkitAudioContext)) {
      return globalThis.AudioContext || globalThis.webkitAudioContext;
    }
    if (typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext)) {
      return window.AudioContext || window.webkitAudioContext;
    }
    return null;
  }

  function buildNoiseBuffer(ctx, seconds, mode) {
    var sr = ctx.sampleRate || 44100;
    var len = Math.floor(sr * seconds);
    var buf = ctx.createBuffer(1, len, sr);
    var data = buf.getChannelData(0);
    var seed = 0x13579BDF;
    function nextRand() {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return (seed / 2147483648) - 1.0;
    }

    if (mode === 'brown') {
      var last = 0;
      for (var i = 0; i < len; i++) {
        var w = nextRand();
        last = (last + 0.022 * w) / 1.022;
        data[i] = Math.max(-0.98, Math.min(0.98, last * 3.4));
      }
    } else if (mode === 'pink') {
      var b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (var j = 0; j < len; j++) {
        var wn = nextRand();
        b0 = 0.99886 * b0 + wn * 0.0555179;
        b1 = 0.99332 * b1 + wn * 0.0750759;
        b2 = 0.96900 * b2 + wn * 0.1538520;
        b3 = 0.86650 * b3 + wn * 0.3104856;
        b4 = 0.55000 * b4 + wn * 0.5329522;
        b5 = -0.7616 * b5 - wn * 0.0168980;
        var out = b0 + b1 + b2 + b3 + b4 + b5 + b6 + wn * 0.5362;
        b6 = wn * 0.115926;
        data[j] = Math.max(-0.98, Math.min(0.98, out * 0.11));
      }
    } else {
      for (var k = 0; k < len; k++) {
        data[k] = nextRand();
      }
    }

    // Crossfade last 1024 samples for click-free looping
    var fade = Math.min(1024, Math.floor(len / 8));
    for (var f = 0; f < fade; f++) {
      var alpha = f / fade;
      data[len - fade + f] = data[len - fade + f] * (1 - alpha) + data[f] * alpha;
    }
    return buf;
  }

  function unrefTimer(handle) {
    if (handle && typeof handle.unref === 'function') {
      handle.unref();
    }
    return handle;
  }

  function createMysteryAudioEngine(options) {
    var opts = options || {};
    var ctx = opts.audioContext || null;
    var stormState = null;
    var stageTimers = [];
    var state = {
      activeLoop: null,
      lastCue: null,
      volume: typeof opts.volume === 'number' ? opts.volume : 0.72
    };

    function clearStageTimers() {
      while (stageTimers.length) {
        clearTimeout(stageTimers.pop());
      }
    }

    function ensureCtx() {
      if (ctx) {
        if (ctx.state === 'suspended' && typeof ctx.resume === 'function') {
          ctx.resume().catch(function () {});
        }
        return ctx;
      }
      var Ctor = getAudioContextConstructor();
      if (!Ctor) return null;
      try {
        ctx = new Ctor();
        if (ctx.state === 'suspended' && typeof ctx.resume === 'function') {
          ctx.resume().catch(function () {});
        }
        return ctx;
      } catch (_e) {
        return null;
      }
    }

    function stopStorm() {
      if (!stormState) return false;
      try {
        if (stormState.crackleTimer) clearInterval(stormState.crackleTimer);
        if (stormState.master && ctx) {
          stormState.master.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.08);
        }
        var nodes = stormState.nodes || [];
        unrefTimer(setTimeout(function () {
          for (var i = 0; i < nodes.length; i++) {
            try { nodes[i].stop(); } catch (_e1) {}
            try { nodes[i].disconnect(); } catch (_e2) {}
          }
        }, 220));
      } catch (_e) {}
      stormState = null;
      state.activeLoop = null;
      return true;
    }

    function playCue(cueName, cueOpts) {
      var cOpts = cueOpts || {};
      var normCue = String(cueName || '').toLowerCase().trim();
      if (normCue === 'ines-memo' || normCue === 'memo') normCue = 'ines_memo';
      state.lastCue = normCue;

      var audioCtx = ensureCtx();

      if (normCue === 'storm') {
        if (state.activeLoop === 'storm') {
          stopStorm();
          return { ok: true, cue: 'storm', active: false, simulated: !audioCtx, durationMs: 0 };
        }
        state.activeLoop = 'storm';
        if (!audioCtx) {
          stormState = { simulated: true };
          return { ok: true, cue: 'storm', active: true, simulated: true, durationMs: 0 };
        }
        try {
          var whiteBuf = buildNoiseBuffer(audioCtx, 3.0, 'white');
          var brownBuf = buildNoiseBuffer(audioCtx, 3.0, 'brown');

          var master = audioCtx.createGain();
          master.gain.setValueAtTime(0.001, audioCtx.currentTime);
          master.gain.exponentialRampToValueAtTime(Math.max(0.05, state.volume * 0.48), audioCtx.currentTime + 0.5);
          master.connect(audioCtx.destination);

          var windSrc = audioCtx.createBufferSource();
          windSrc.buffer = whiteBuf;
          windSrc.loop = true;

          var windFilter = audioCtx.createBiquadFilter();
          windFilter.type = 'bandpass';
          windFilter.frequency.setValueAtTime(340, audioCtx.currentTime);
          windFilter.Q.setValueAtTime(2.8, audioCtx.currentTime);

          var lfo = audioCtx.createOscillator();
          lfo.type = 'sine';
          lfo.frequency.setValueAtTime(0.14, audioCtx.currentTime);
          var lfoGain = audioCtx.createGain();
          lfoGain.gain.setValueAtTime(165, audioCtx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(windFilter.frequency);

          var windGain = audioCtx.createGain();
          windGain.gain.setValueAtTime(0.55, audioCtx.currentTime);
          windSrc.connect(windFilter);
          windFilter.connect(windGain);
          windGain.connect(master);

          var hearthSrc = audioCtx.createBufferSource();
          hearthSrc.buffer = brownBuf;
          hearthSrc.loop = true;
          var hearthFilter = audioCtx.createBiquadFilter();
          hearthFilter.type = 'lowpass';
          hearthFilter.frequency.setValueAtTime(175, audioCtx.currentTime);
          var hearthGain = audioCtx.createGain();
          hearthGain.gain.setValueAtTime(0.42, audioCtx.currentTime);
          hearthSrc.connect(hearthFilter);
          hearthFilter.connect(hearthGain);
          hearthGain.connect(master);

          windSrc.start();
          hearthSrc.start();
          lfo.start();

          var crackleTimer = unrefTimer(setInterval(function () {
            if (!stormState || !audioCtx || audioCtx.state !== 'running') return;
            try {
              var now = audioCtx.currentTime;
              var osc = audioCtx.createOscillator();
              var cg = audioCtx.createGain();
              osc.type = 'triangle';
              osc.frequency.setValueAtTime(1800 + Math.random() * 1900, now);
              cg.gain.setValueAtTime(0.001, now);
              cg.gain.exponentialRampToValueAtTime(0.08 * state.volume, now + 0.004);
              cg.gain.exponentialRampToValueAtTime(0.0001, now + 0.038);
              osc.connect(cg);
              cg.connect(master);
              osc.start(now);
              osc.stop(now + 0.045);
            } catch (_e) {}
          }, 340));

          stormState = {
            master: master,
            crackleTimer: crackleTimer,
            nodes: [windSrc, hearthSrc, lfo]
          };
        } catch (_err) {
          stormState = { simulated: true };
        }
        return { ok: true, cue: 'storm', active: true, simulated: !audioCtx, durationMs: 0 };
      }

      if (normCue === 'blackout') {
        if (audioCtx) {
          try {
            var t0 = audioCtx.currentTime;
            var outGain = audioCtx.createGain();
            outGain.gain.setValueAtTime(Math.max(0.08, state.volume * 0.72), t0);
            outGain.connect(audioCtx.destination);

            // 23h39 Gothic window electrical spark buzz
            var sparkOsc = audioCtx.createOscillator();
            sparkOsc.type = 'sawtooth';
            sparkOsc.frequency.setValueAtTime(120, t0);
            sparkOsc.frequency.setValueAtTime(180, t0 + 0.09);
            sparkOsc.frequency.setValueAtTime(115, t0 + 0.17);
            var sparkGain = audioCtx.createGain();
            sparkGain.gain.setValueAtTime(0.28, t0);
            sparkGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.28);
            sparkOsc.connect(sparkGain);
            sparkGain.connect(outGain);
            sparkOsc.start(t0);
            sparkOsc.stop(t0 + 0.30);

            var arcNoise = audioCtx.createBufferSource();
            arcNoise.buffer = buildNoiseBuffer(audioCtx, 0.35, 'white');
            var arcHp = audioCtx.createBiquadFilter();
            arcHp.type = 'highpass';
            arcHp.frequency.setValueAtTime(2400, t0);
            var arcG = audioCtx.createGain();
            arcG.gain.setValueAtTime(0.22, t0);
            arcG.gain.exponentialRampToValueAtTime(0.001, t0 + 0.26);
            arcNoise.connect(arcHp);
            arcHp.connect(arcG);
            arcG.connect(outGain);
            arcNoise.start(t0);
            arcNoise.stop(t0 + 0.28);

            // Breaker trip thud at 23h40
            var thud = audioCtx.createOscillator();
            thud.type = 'sine';
            thud.frequency.setValueAtTime(98, t0 + 0.28);
            thud.frequency.exponentialRampToValueAtTime(28, t0 + 0.62);
            var thudGain = audioCtx.createGain();
            thudGain.gain.setValueAtTime(0.58, t0 + 0.28);
            thudGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.66);
            thud.connect(thudGain);
            thudGain.connect(outGain);
            thud.start(t0 + 0.28);
            thud.stop(t0 + 0.68);

            // Power-down pitch drop
            var drop = audioCtx.createOscillator();
            drop.type = 'triangle';
            drop.frequency.setValueAtTime(112, t0 + 0.30);
            drop.frequency.exponentialRampToValueAtTime(24, t0 + 2.85);
            var dropGain = audioCtx.createGain();
            dropGain.gain.setValueAtTime(0.32, t0 + 0.30);
            dropGain.gain.exponentialRampToValueAtTime(0.0008, t0 + 2.90);
            drop.connect(dropGain);
            dropGain.connect(outGain);
            drop.start(t0 + 0.30);
            drop.stop(t0 + 2.95);
          } catch (_e) {}
        }
        return {
          ok: true,
          cue: 'blackout',
          active: true,
          simulated: !audioCtx,
          durationMs: 3000,
          events: [
            { atMs: 0, label: '23h39 Spark' },
            { atMs: 280, label: '23h40 Breaker Trip' }
          ]
        };
      }

      if (normCue === 'ines_memo') {
        clearStageTimers();
        var memoStages = INES_MEMO_SCRIPT.map(function (st) {
          return {
            stage: st.stage,
            stageIndex: st.stageIndex,
            atMs: st.atMs,
            code: st.code,
            label_fr: st.label_fr,
            label_en: st.label_en
          };
        });

        if (typeof cOpts.onStage === 'function') {
          cOpts.onStage(memoStages[0], memoStages[0].stage);
          memoStages.slice(1).forEach(function (st) {
            stageTimers.push(unrefTimer(setTimeout(function () {
              cOpts.onStage(st, st.stage);
            }, st.atMs)));
          });
          stageTimers.push(unrefTimer(setTimeout(function () {
            cOpts.onStage({ stage: 0, stageIndex: -1, code: 'done' }, 0);
          }, 5200)));
        }

        if (audioCtx) {
          try {
            var m0 = audioCtx.currentTime;
            var memoOut = audioCtx.createGain();
            memoOut.gain.setValueAtTime(Math.max(0.08, state.volume * 0.78), m0);
            memoOut.connect(audioCtx.destination);

            var noiseBuf = buildNoiseBuffer(audioCtx, 5.3, 'white');

            // Phone mic band hiss (300 - 3400 Hz)
            var phoneSrc = audioCtx.createBufferSource();
            phoneSrc.buffer = noiseBuf;
            var hp = audioCtx.createBiquadFilter();
            hp.type = 'highpass';
            hp.frequency.setValueAtTime(320, m0);
            var lp = audioCtx.createBiquadFilter();
            lp.type = 'lowpass';
            lp.frequency.setValueAtTime(3300, m0);
            var hissGain = audioCtx.createGain();
            hissGain.gain.setValueAtTime(0.018, m0);
            hissGain.gain.setValueAtTime(0.018, m0 + 5.0);
            hissGain.gain.exponentialRampToValueAtTime(0.0001, m0 + 5.2);
            phoneSrc.connect(hp);
            hp.connect(lp);
            lp.connect(hissGain);
            hissGain.connect(memoOut);
            phoneSrc.start(m0);
            phoneSrc.stop(m0 + 5.25);

            // Event 1 (t=0.45s): Silver cloche metallic FM/inharmonic clang
            [1180, 2844, 4590].forEach(function (freq, idx) {
              var osc = audioCtx.createOscillator();
              osc.type = 'sine';
              osc.frequency.setValueAtTime(freq, m0 + 0.45);
              var g = audioCtx.createGain();
              g.gain.setValueAtTime(0.28 / (idx + 1), m0 + 0.45);
              g.gain.exponentialRampToValueAtTime(0.0005, m0 + 1.75);
              osc.connect(g);
              g.connect(memoOut);
              osc.start(m0 + 0.45);
              osc.stop(m0 + 1.80);
            });

            // Event 2 (t=1.95s): Velvet bump + pocket-watch crystal shatter
            var bump = audioCtx.createOscillator();
            bump.type = 'sine';
            bump.frequency.setValueAtTime(132, m0 + 1.95);
            bump.frequency.exponentialRampToValueAtTime(46, m0 + 2.18);
            var bumpG = audioCtx.createGain();
            bumpG.gain.setValueAtTime(0.42, m0 + 1.95);
            bumpG.gain.exponentialRampToValueAtTime(0.001, m0 + 2.22);
            bump.connect(bumpG);
            bumpG.connect(memoOut);
            bump.start(m0 + 1.95);
            bump.stop(m0 + 2.25);

            [3180, 4120, 4890, 5660, 6420, 7110].forEach(function (pf, pIdx) {
              var stTime = m0 + 2.02 + pIdx * 0.042;
              var shard = audioCtx.createOscillator();
              shard.type = 'sine';
              shard.frequency.setValueAtTime(pf, stTime);
              var sg = audioCtx.createGain();
              sg.gain.setValueAtTime(0.14, stTime);
              sg.gain.exponentialRampToValueAtTime(0.0004, stTime + 0.26);
              shard.connect(sg);
              sg.connect(memoOut);
              shard.start(stTime);
              shard.stop(stTime + 0.28);
            });

            var crystalBurst = audioCtx.createBufferSource();
            crystalBurst.buffer = noiseBuf;
            var crystalHp = audioCtx.createBiquadFilter();
            crystalHp.type = 'highpass';
            crystalHp.frequency.setValueAtTime(3500, m0 + 2.00);
            var crystalG = audioCtx.createGain();
            crystalG.gain.setValueAtTime(0.26, m0 + 2.00);
            crystalG.gain.exponentialRampToValueAtTime(0.001, m0 + 2.045);
            crystalBurst.connect(crystalHp);
            crystalHp.connect(crystalG);
            crystalG.connect(memoOut);
            crystalBurst.start(m0 + 2.00, 0.05, 0.055);

            // Event 3 (t=3.35s..4.85s): 4 crisp bursts of stiff holly centerpiece leaves
            [3.35, 3.68, 4.05, 4.42].forEach(function (rt) {
              var rustle = audioCtx.createBufferSource();
              rustle.buffer = noiseBuf;
              var rbp = audioCtx.createBiquadFilter();
              rbp.type = 'bandpass';
              rbp.frequency.setValueAtTime(2650, m0 + rt);
              rbp.Q.setValueAtTime(1.65, m0 + rt);
              var rg = audioCtx.createGain();
              rg.gain.setValueAtTime(0.001, m0 + rt);
              rg.gain.linearRampToValueAtTime(0.24, m0 + rt + 0.05);
              rg.gain.exponentialRampToValueAtTime(0.0008, m0 + rt + 0.26);
              rustle.connect(rbp);
              rbp.connect(rg);
              rg.connect(memoOut);
              rustle.start(m0 + rt, 0.2, 0.30);
            });
          } catch (_e) {}
        }

        return {
          ok: true,
          cue: 'ines_memo',
          active: true,
          simulated: !audioCtx,
          durationMs: 5200,
          events: memoStages
        };
      }

      if (normCue === 'gong') {
        if (audioCtx) {
          try {
            var g0 = audioCtx.currentTime;
            var gongMaster = audioCtx.createGain();
            gongMaster.gain.setValueAtTime(Math.max(0.08, state.volume * 0.75), g0);
            gongMaster.connect(audioCtx.destination);

            [110, 165, 220, 297, 468].forEach(function (freq, idx) {
              var osc = audioCtx.createOscillator();
              osc.type = idx === 0 ? 'sine' : 'triangle';
              osc.frequency.setValueAtTime(freq, g0);
              var pg = audioCtx.createGain();
              pg.gain.setValueAtTime(0.36 / (idx + 1), g0);
              pg.gain.exponentialRampToValueAtTime(0.0004, g0 + 3.8 - idx * 0.35);
              osc.connect(pg);
              pg.connect(gongMaster);
              osc.start(g0);
              osc.stop(g0 + 3.9);
            });
          } catch (_e) {}
        }
        return { ok: true, cue: 'gong', active: true, simulated: !audioCtx, durationMs: 3900 };
      }

      return { ok: false, error: 'UNKNOWN_CUE', cue: normCue };
    }

    function setVolume(vol) {
      var v = Math.max(0, Math.min(1, Number(vol)));
      if (!Number.isFinite(v)) v = 0.72;
      state.volume = v;
      if (stormState && stormState.master && ctx) {
        try {
          stormState.master.gain.setTargetAtTime(Math.max(0.001, v * 0.48), ctx.currentTime, 0.06);
        } catch (_e) {}
      }
      return state.volume;
    }

    function stopAll() {
      clearStageTimers();
      stopStorm();
      return { ok: true, activeLoop: null };
    }

    return {
      playCue: playCue,
      stopAll: stopAll,
      setVolume: setVolume,
      getState: function () {
        return {
          activeLoop: state.activeLoop,
          lastCue: state.lastCue,
          volume: state.volume
        };
      }
    };
  }

  function createFocusAudioEngine(options) {
    var opts = options || {};
    var ctx = opts.audioContext || null;
    var activeSession = null;
    var state = {
      activeNoise: null,
      volume: typeof opts.volume === 'number' ? opts.volume : 0.45,
      chimesPlayed: 0
    };

    function ensureCtx() {
      if (ctx) {
        if (ctx.state === 'suspended' && typeof ctx.resume === 'function') {
          ctx.resume().catch(function () {});
        }
        return ctx;
      }
      var Ctor = getAudioContextConstructor();
      if (!Ctor) return null;
      try {
        ctx = new Ctor();
        if (ctx.state === 'suspended' && typeof ctx.resume === 'function') {
          ctx.resume().catch(function () {});
        }
        return ctx;
      } catch (_e) {
        return null;
      }
    }

    function stopNoise() {
      if (!activeSession) {
        state.activeNoise = null;
        return;
      }
      try {
        if (activeSession.dropletTimer) clearInterval(activeSession.dropletTimer);
        if (activeSession.master && ctx) {
          activeSession.master.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.08);
        }
        var nodes = activeSession.nodes || [];
        unrefTimer(setTimeout(function () {
          for (var i = 0; i < nodes.length; i++) {
            try { nodes[i].stop(); } catch (_e1) {}
            try { nodes[i].disconnect(); } catch (_e2) {}
          }
        }, 200));
      } catch (_e) {}
      activeSession = null;
      state.activeNoise = null;
    }

    function toggleNoise(type) {
      var norm = String(type || '').toLowerCase().trim();
      if (['brown', 'rain', 'gamma'].indexOf(norm) === -1) {
        return { ok: false, error: 'UNKNOWN_NOISE', type: norm };
      }
      if (state.activeNoise === norm) {
        stopNoise();
        return { ok: true, type: norm, active: false, activeNoise: null };
      }

      stopNoise();
      var audioCtx = ensureCtx();
      state.activeNoise = norm;

      if (!audioCtx) {
        activeSession = { simulated: true, type: norm };
        return { ok: true, type: norm, active: true, activeNoise: norm, simulated: true };
      }

      try {
        var now = audioCtx.currentTime;
        var master = audioCtx.createGain();
        master.gain.setValueAtTime(0.001, now);
        master.gain.exponentialRampToValueAtTime(Math.max(0.02, state.volume * 0.55), now + 0.35);
        master.connect(audioCtx.destination);

        if (norm === 'brown') {
          var bBuf = buildNoiseBuffer(audioCtx, 4.0, 'brown');
          var bSrc = audioCtx.createBufferSource();
          bSrc.buffer = bBuf;
          bSrc.loop = true;
          var bFilter = audioCtx.createBiquadFilter();
          bFilter.type = 'lowpass';
          bFilter.frequency.setValueAtTime(420, now);
          bSrc.connect(bFilter);
          bFilter.connect(master);
          bSrc.start();
          activeSession = { type: 'brown', master: master, nodes: [bSrc] };
        } else if (norm === 'rain') {
          var pBuf = buildNoiseBuffer(audioCtx, 4.0, 'pink');
          var pSrc = audioCtx.createBufferSource();
          pSrc.buffer = pBuf;
          pSrc.loop = true;
          var pFilter = audioCtx.createBiquadFilter();
          pFilter.type = 'bandpass';
          pFilter.frequency.setValueAtTime(950, now);
          pFilter.Q.setValueAtTime(0.75, now);
          pSrc.connect(pFilter);
          pFilter.connect(master);
          pSrc.start();

          var dropTimer = unrefTimer(setInterval(function () {
            if (!activeSession || activeSession.type !== 'rain' || !audioCtx || audioCtx.state !== 'running') return;
            try {
              var t = audioCtx.currentTime;
              var dOsc = audioCtx.createOscillator();
              var dGain = audioCtx.createGain();
              dOsc.type = 'sine';
              dOsc.frequency.setValueAtTime(1150 + Math.random() * 950, t);
              dGain.gain.setValueAtTime(0.0005, t);
              dGain.gain.exponentialRampToValueAtTime(0.035 * state.volume, t + 0.006);
              dGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.055);
              dOsc.connect(dGain);
              dGain.connect(master);
              dOsc.start(t);
              dOsc.stop(t + 0.06);
            } catch (_e) {}
          }, 290));

          activeSession = { type: 'rain', master: master, dropletTimer: dropTimer, nodes: [pSrc] };
        } else if (norm === 'gamma') {
          var leftOsc = audioCtx.createOscillator();
          var rightOsc = audioCtx.createOscillator();
          leftOsc.type = 'sine';
          rightOsc.type = 'sine';
          leftOsc.frequency.setValueAtTime(200, now);
          rightOsc.frequency.setValueAtTime(240, now);

          var binGainL = audioCtx.createGain();
          var binGainR = audioCtx.createGain();
          binGainL.gain.setValueAtTime(0.32, now);
          binGainR.gain.setValueAtTime(0.32, now);

          leftOsc.connect(binGainL);
          rightOsc.connect(binGainR);

          if (typeof audioCtx.createChannelMerger === 'function') {
            var merger = audioCtx.createChannelMerger(2);
            binGainL.connect(merger, 0, 0);
            binGainR.connect(merger, 0, 1);
            merger.connect(master);
          } else if (typeof audioCtx.createStereoPanner === 'function') {
            var panL = audioCtx.createStereoPanner();
            var panR = audioCtx.createStereoPanner();
            panL.pan.setValueAtTime(-1, now);
            panR.pan.setValueAtTime(1, now);
            binGainL.connect(panL);
            binGainR.connect(panR);
            panL.connect(master);
            panR.connect(master);
          } else {
            binGainL.connect(master);
            binGainR.connect(master);
          }

          // Subtle warm 160 Hz pad gently pulsed at 40 Hz
          var padOsc = audioCtx.createOscillator();
          padOsc.type = 'sine';
          padOsc.frequency.setValueAtTime(160, now);
          var padGain = audioCtx.createGain();
          padGain.gain.setValueAtTime(0.14, now);
          var amOsc = audioCtx.createOscillator();
          amOsc.type = 'sine';
          amOsc.frequency.setValueAtTime(40, now);
          var amDepth = audioCtx.createGain();
          amDepth.gain.setValueAtTime(0.05, now);
          amOsc.connect(amDepth);
          amDepth.connect(padGain.gain);
          padOsc.connect(padGain);
          padGain.connect(master);

          leftOsc.start();
          rightOsc.start();
          padOsc.start();
          amOsc.start();

          activeSession = { type: 'gamma', master: master, nodes: [leftOsc, rightOsc, padOsc, amOsc] };
        }
      } catch (_err) {
        activeSession = { simulated: true, type: norm };
      }

      return { ok: true, type: norm, active: true, activeNoise: norm, simulated: !audioCtx };
    }

    function setVolume(vol) {
      var v = Math.max(0, Math.min(1, Number(vol)));
      if (!Number.isFinite(v)) v = 0.45;
      state.volume = v;
      if (activeSession && activeSession.master && ctx) {
        try {
          activeSession.master.gain.setTargetAtTime(Math.max(0.001, v * 0.55), ctx.currentTime, 0.06);
        } catch (_e) {}
      }
      return state.volume;
    }

    function playDopamineChime() {
      state.chimesPlayed += 1;
      var audioCtx = ensureCtx();
      if (!audioCtx) {
        return { ok: true, played: true, simulated: true, chimesPlayed: state.chimesPlayed };
      }
      try {
        var now = audioCtx.currentTime;
        var notes = [523.25, 659.25, 783.99, 987.77, 1174.66]; // C5 E5 G5 B5 D6
        notes.forEach(function (freq, idx) {
          var start = now + idx * 0.065;
          var osc = audioCtx.createOscillator();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, start);
          var g = audioCtx.createGain();
          g.gain.setValueAtTime(0.001, start);
          g.gain.exponentialRampToValueAtTime(Math.max(0.04, state.volume * 0.28), start + 0.015);
          g.gain.exponentialRampToValueAtTime(0.0004, start + 0.42);
          osc.connect(g);
          g.connect(audioCtx.destination);
          osc.start(start);
          osc.stop(start + 0.45);
        });
      } catch (_e) {}
      return { ok: true, played: true, simulated: false, chimesPlayed: state.chimesPlayed };
    }

    return {
      toggleNoise: toggleNoise,
      stopNoise: stopNoise,
      setVolume: setVolume,
      playDopamineChime: playDopamineChime,
      getState: function () {
        return {
          activeNoise: state.activeNoise,
          volume: state.volume,
          chimesPlayed: state.chimesPlayed
        };
      }
    };
  }

  var sharedMysteryAudio = null;
  var sharedFocusAudio = null;

  function getSharedMysteryAudio() {
    if (!sharedMysteryAudio) sharedMysteryAudio = createMysteryAudioEngine();
    return sharedMysteryAudio;
  }

  function getSharedFocusAudio() {
    if (!sharedFocusAudio) sharedFocusAudio = createFocusAudioEngine();
    return sharedFocusAudio;
  }

  function createAudioEngine(options) {
    var m = createMysteryAudioEngine(options);
    var f = createFocusAudioEngine(options);
    return {
      playMysteryCue: m.playCue,
      stopMysteryAudio: m.stopAll,
      toggleCocoonNoise: f.toggleNoise,
      stopCocoonNoise: f.stopNoise,
      setCocoonVolume: f.setVolume,
      playDopamineChime: f.playDopamineChime,
      getMysteryState: m.getState,
      getFocusState: f.getState
    };
  }

  var B2CCompanions = {
    CONFIRM_UNLOCK_TOKEN: CONFIRM_UNLOCK_TOKEN,
    SUSPECTS: SUSPECTS,
    CLUES: CLUES,
    ACT_PHASES: ACT_PHASES,
    INES_MEMO_SCRIPT: INES_MEMO_SCRIPT,
    FOCUS_PRESETS: FOCUS_PRESETS,
    FOCUS_PRESET_DETAILS: FOCUS_PRESET_DETAILS,
    FOCUS_PRESET_CARDS: FOCUS_PRESET_CARDS,
    NOTION_AI_PROMPTS: NOTION_AI_PROMPTS,
    DOPAMINE_MENU: DOPAMINE_MENU,
    localizeSuspect: localizeSuspect,
    resolveSuspect: resolveSuspect,
    matchSuspectRole: matchSuspectRole,
    tallyAccusationVotes: tallyAccusationVotes,
    unlockMysterySolution: unlockMysterySolution,
    splitTaskForAdhd: splitTaskForAdhd,
    renderNotionPrompt: renderNotionPrompt,
    createMysteryAudioEngine: createMysteryAudioEngine,
    createFocusAudioEngine: createFocusAudioEngine,
    createAudioEngine: createAudioEngine,
    playMysteryCue: function (cue, opts) { return getSharedMysteryAudio().playCue(cue, opts); },
    stopMysteryAudio: function () { return getSharedMysteryAudio().stopAll(); },
    toggleFocusNoise: function (type) { return getSharedFocusAudio().toggleNoise(type); },
    toggleCocoonNoise: function (type) { return getSharedFocusAudio().toggleNoise(type); },
    setFocusVolume: function (vol) { return getSharedFocusAudio().setVolume(vol); },
    setCocoonVolume: function (vol) { return getSharedFocusAudio().setVolume(vol); },
    playDopamineChime: function () { return getSharedFocusAudio().playDopamineChime(); }
  };

  if (typeof globalThis !== 'undefined') {
    globalThis.B2CCompanions = B2CCompanions;
  }
  if (root) {
    root.B2CCompanions = B2CCompanions;
  }
  if (typeof window !== 'undefined') {
    window.B2CCompanions = B2CCompanions;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = B2CCompanions;
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
