/* =========================================================
   wellspring-app.js — Gather by the Wellspring pH Water Reference
   Built from the standalone app so it lives directly inside a page.
   The data (uses, claims, protocols, studies) is all below.
   It only starts if the page has <div id="wsApp">.
   ========================================================= */

// v3 — Uses + Claims + Protocols + unified search
// ── USES DATA ─────────────────────────────────────────────────────────────────
// 114 Uses — Gather by the Wellspring Reference Guide
// Structured data for the Uses tab
// Each row: { id, num, ph, phLabel, phGroup, category, use, replaces, savingsLow, savingsHigh, claimId }
// claimId maps to claim in CLAIMS data (h=health, ho=home, t=tyent, s=science)

const USES = [
  // ─── pH 7.0 NEUTRAL ──────────────────────────────────────────────────────
  { id:"u1",   num:1,   ph:"7.0", phLabel:"Neutral (pH 7.0)",            phGroup:"neutral",       category:"Medication / Neutral Uses",      use:"Taking oral medications — neutral pH avoids drug-absorption interference",                                                       replaces:"Bottled still water (Evian, Fiji, Smartwater), filtered pitcher water, purchased spring water",                                  savingsLow:100,  savingsHigh:250,  claimId:"h17"  },
  { id:"u2",   num:2,   ph:"7.0", phLabel:"Neutral (pH 7.0)",            phGroup:"neutral",       category:"Medication / Neutral Uses",      use:"Mixing baby formula — neutral pH preserves formula nutrient chemistry",                                                         replaces:"Purchased distilled water (Gerber Pure, nursery water), filtered bottled water",                                                 savingsLow:60,   savingsHigh:180,  claimId:"h17"  },
  { id:"u3",   num:3,   ph:"7.0", phLabel:"Neutral (pH 7.0)",            phGroup:"neutral",       category:"Medication / Neutral Uses",      use:"Drinking with meals — neutral pH avoids diluting digestive acids",                                                              replaces:"Bottled still water, filtered tap water",                                                                                        savingsLow:200,  savingsHigh:200,  claimId:"h8"  },
  { id:"u4",   num:4,   ph:"7.0", phLabel:"Neutral (pH 7.0)",            phGroup:"neutral",       category:"Medication / Neutral Uses",      use:"General cooking where recipe pH neutrality matters (baking, delicate sauces)",                                                  replaces:"Purchased distilled water, filtered bottled water for cooking",                                                                  savingsLow:50,   savingsHigh:150,  claimId:"h4"  },
  { id:"u5",   num:5,   ph:"7.0", phLabel:"Neutral (pH 7.0)",            phGroup:"neutral",       category:"Medication / Neutral Uses",      use:"Humidifier & CPAP water — prevents mineral buildup, white dust & microbial growth",                                             replaces:"Purchased distilled water jugs, CPAP distilled water, humidifier descaling products (CLR, Affresh)",                             savingsLow:50,   savingsHigh:200,  claimId:"h4"  },

  // ─── pH 8.0 SLIGHTLY ALKALINE ────────────────────────────────────────────
  { id:"u6",   num:6,   ph:"8.0", phLabel:"Slightly Alkaline (pH 8.0)",  phGroup:"slightAlkaline",category:"Pet Health",                     use:"Drinking water for dogs — supports hydration, digestion & energy",                                                             replaces:"Filtered pet water fountains (Drinkwell, PetSafe), expensive pet water brands",                                                 savingsLow:50,   savingsHigh:150,  claimId:"h26"  },
  { id:"u7",   num:7,   ph:"8.0", phLabel:"Slightly Alkaline (pH 8.0)",  phGroup:"slightAlkaline",category:"Pet Health",                     use:"Drinking water for cats — supports kidney health & encourages hydration",                                                       replaces:"Filtered cat water fountains, distilled cat water, veterinary kidney support supplements",                                       savingsLow:50,   savingsHigh:200,  claimId:"h26"  },

  // ─── pH 9.5 ALKALINE — Internal / Drinking ───────────────────────────────
  { id:"u8",   num:8,   ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Energy & Stamina",               use:"Mental & physical energy",                                                                                                     replaces:"Energy drinks (Red Bull, Monster), caffeine pills, B-vitamin complexes, pre-workout, adaptogens",                               savingsLow:400,  savingsHigh:800,  claimId:"s1"  },
  { id:"u9",   num:9,   ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Energy & Stamina",               use:"Mental & physical stamina",                                                                                                    replaces:"Pre-workout (C4, Celsius), creatine, beta-alanine, nootropics (Alpha Brain)",                                                   savingsLow:300,  savingsHigh:600,  claimId:"s1"  },
  { id:"u10",  num:10,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Weight & Metabolism",            use:"Weight loss support",                                                                                                          replaces:"Ozempic/Wegovy, Hydroxycut, Alli, meal replacement shakes, appetite suppressants",                                               savingsLow:1200, savingsHigh:15600,claimId:"h9"  },
  { id:"u11",  num:11,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Diabetes & Blood Sugar",         use:"Reduced insulin dependence (diabetic)",                                                                                        replaces:"Insulin, Metformin, Ozempic, Jardiance, Trulicity, CGMs",                                                                       savingsLow:512,  savingsHigh:4800, claimId:"h9"  },
  { id:"u12",  num:12,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Recovery & Exercise",            use:"Reduced post-exertion recovery time",                                                                                          replaces:"Protein shakes, BCAAs, foam rollers, cold plunge tubs, compression gear, Theragun",                                             savingsLow:300,  savingsHigh:700,  claimId:"h1"  },
  { id:"u13",  num:13,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Sleep & Stress",                 use:"Improved ability to fall and stay asleep",                                                                                     replaces:"Melatonin, ZzzQuil, Unisom, Ambien (Rx), magnesium glycinate",                                                                  savingsLow:100,  savingsHigh:600,  claimId:"h10" },
  { id:"u14",  num:14,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Allergy & Asthma",               use:"Asthma flare-up reduction",                                                                                                    replaces:"Albuterol inhalers, Singulair, Advair, air purifiers (Dyson, IQAir), antihistamines",                                           savingsLow:300,  savingsHigh:1500, claimId:"h11" },
  { id:"u15",  num:15,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Sleep & Stress",                 use:"Improved quality of sleep",                                                                                                    replaces:"Oura Ring, WHOOP, melatonin, magnesium, weighted blankets, white noise machines",                                               savingsLow:150,  savingsHigh:400,  claimId:"h10" },
  { id:"u16",  num:16,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Immune Support",                 use:"Resistance to colds, flu & viruses — replaces daily vitamin C sources",                                                        replaces:"Orange juice, Vitamin C supplements, Zinc, Elderberry, Airborne, Emergen-C, Echinacea",                                         savingsLow:80,   savingsHigh:300,  claimId:"h11" },
  { id:"u17",  num:17,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Immune Support",                 use:"Milder symptoms & shorter recovery from colds/flu",                                                                            replaces:"Theraflu, DayQuil/NyQuil, Oscillococcinum, Zinc lozenges, Tamiflu",                                                             savingsLow:50,   savingsHigh:200,  claimId:"h11" },
  { id:"u18",  num:18,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Digestion & Gut Health",         use:"Improved digestion",                                                                                                           replaces:"Probiotics (Culturelle, Garden of Life), digestive enzymes, kombucha, fiber supplements",                                       savingsLow:200,  savingsHigh:500,  claimId:"h8"  },
  { id:"u19",  num:19,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Digestion & Gut Health",         use:"Reduced or eliminated acid reflux symptoms",                                                                                   replaces:"Tums, Prilosec, Nexium, Pepcid, Zantac 360, prescription PPIs",                                                                 savingsLow:100,  savingsHigh:600,  claimId:"h8"  },
  { id:"u20",  num:20,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Pain & Inflammation",            use:"Reduced or eliminated bone & joint pain",                                                                                      replaces:"Glucosamine/chondroitin, turmeric/curcumin, Advil/Aleve, Voltaren gel, CBD topicals, cortisone injections",                    savingsLow:200,  savingsHigh:800,  claimId:"h2" },
  { id:"u21",  num:21,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Cholesterol",                    use:"Reduced cholesterol medication dependence",                                                                                    replaces:"Statins (Lipitor, Crestor), red yeast rice, Zetia, plant sterol spreads, bergamot supplements",                                 savingsLow:200,  savingsHigh:1200, claimId:"h18"  },
  { id:"u22",  num:22,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Diabetes & Blood Sugar",         use:"Reduced blood sugar medication dependence",                                                                                    replaces:"Metformin, Berberine, chromium picolinate, cinnamon supplements, Ozempic",                                                      savingsLow:90,   savingsHigh:560,  claimId:"h9"  },
  { id:"u23",  num:23,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Skin (Internal)",                use:"Improved skin tone & texture (internal)",                                                                                      replaces:"Collagen supplements (Vital Proteins), hyaluronic acid supplements, retinol creams, vitamin C serums",                          savingsLow:150,  savingsHigh:400,  claimId:"h6"  },
  { id:"u24",  num:24,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Digestion & Gut Health",         use:"Relief from constipation",                                                                                                     replaces:"MiraLax, Colace, Metamucil, magnesium citrate, SennaLax, prune juice, fiber gummies",                                           savingsLow:60,   savingsHigh:180,  claimId:"h8"  },
  { id:"u25",  num:25,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Pain & Inflammation",            use:"Reduced migraine frequency, duration & severity",                                                                              replaces:"Excedrin Migraine, Imitrex/Sumatriptan, Aimovig (Rx), Cefaly device, magnesium",                                                savingsLow:200,  savingsHigh:2400, claimId:"s2" },
  { id:"u26",  num:26,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Pain & Inflammation",            use:"Reduced non-migraine headache frequency & severity",                                                                           replaces:"Tylenol, Advil, Aleve, Excedrin Tension Headache, peppermint oil rollers",                                                      savingsLow:30,   savingsHigh:100,  claimId:"h2" },
  { id:"u27",  num:27,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Weight & Metabolism",            use:"Elimination of food cravings",                                                                                                 replaces:"Ozempic/Wegovy, chromium picolinate, 5-HTP, Garcinia Cambogia, high-protein programs",                                          savingsLow:100,  savingsHigh:600,  claimId:"h9"  },
  { id:"u28",  num:28,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Men's Health",                   use:"Improved urinary flow (men)",                                                                                                  replaces:"Saw Palmetto, Flomax (Rx), Beta-sitosterol, Proscar, prostate support supplements",                                             savingsLow:80,   savingsHigh:400,  claimId:"h19"  },
  { id:"u29",  num:29,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Supplements & Nutrition",        use:"Enhanced effectiveness of nutritional supplements",                                                                            replaces:"Bioperine, liposomal delivery supplements, digestive enzyme complexes, premium supplement brands",                              savingsLow:0,    savingsHigh:300,  claimId:"h16"  },
  { id:"u30",  num:30,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Pain & Inflammation",            use:"Aspirin & pain relief products work faster & more effectively",                                                                replaces:"Excedrin, effervescent aspirin (Alka-Seltzer), specialty coated aspirin",                                                       savingsLow:0,    savingsHigh:60,   claimId:"h16" },
  { id:"u31",  num:31,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Mood & Mental Health",           use:"Reduced emotional mood swings",                                                                                                replaces:"SSRIs/SNRIs (Lexapro, Zoloft — Rx), 5-HTP, St. John's Wort, magnesium, omega-3s",                                              savingsLow:200,  savingsHigh:1800, claimId:"h10" },
  { id:"u32",  num:32,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Neurological",                   use:"Reduced MS symptoms",                                                                                                          replaces:"Copaxone, Tecfidera, Ocrevus (Rx DMTs), physical therapy, CBD, low-dose naltrexone",                                            savingsLow:3000, savingsHigh:30000,claimId:"h21"  },
  { id:"u33",  num:33,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Detox & Anti-Aging",             use:"Reduced acidity in the body",                                                                                                  replaces:"Alkaline water brands, baking soda supplements, greens powders (AG1), pH drops",                                               savingsLow:150,  savingsHigh:700,  claimId:"h5"  },
  { id:"u34",  num:34,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Detox & Anti-Aging",             use:"Reduction of toxins in the body",                                                                                              replaces:"Activated charcoal, milk thistle, NAC, juice cleanses, infrared saunas, chlorella/spirulina",                                   savingsLow:200,  savingsHigh:1200, claimId:"h5"  },
  { id:"u35",  num:35,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Circulation & Edema",            use:"Edema reduced or eliminated; improved stress handling",                                                                        replaces:"Compression socks, diuretics (HCTZ — Rx), dandelion root, magnesium, adaptogens",                                              savingsLow:100,  savingsHigh:400,  claimId:"h2"  },
  { id:"u36",  num:36,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Allergy & Asthma",               use:"Seasonal allergy relief (reduced or eliminated symptoms)",                                                                     replaces:"Claritin, Zyrtec, Allegra, Flonase, HEPA air purifiers, local honey, quercetin, allergy shots",                                savingsLow:143,  savingsHigh:390,  claimId:"h11" },
  { id:"u37",  num:37,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Hydration",                      use:"Supercharged hydration — faster cellular absorption",                                                                          replaces:"Electrolyte drinks (Liquid IV, Pedialyte, Gatorade), coconut water, hydration packets",                                         savingsLow:0,    savingsHigh:360,  claimId:"h4"  },
  { id:"u38",  num:38,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Detox & Anti-Aging",             use:"Antioxidant boost — fights free radicals & supports anti-aging",                                                               replaces:"Resveratrol, CoQ10, vitamin E, NAC, green tea extract, antioxidant serums",                                                     savingsLow:0,    savingsHigh:400,  claimId:"s8"  },
  { id:"u39",  num:39,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Weight & Metabolism",            use:"Reduces hunger before meals",                                                                                                  replaces:"Appetite suppressants, fiber pills, psyllium husk, Plexus Slim, pre-meal programs",                                             savingsLow:100,  savingsHigh:480,  claimId:"h9"  },
  { id:"u40",  num:40,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Hydration",                      use:"Lessens hangover symptoms — rehydration after alcohol",                                                                        replaces:"Liquid IV, Pedialyte, Blowfish for Hangovers, Cheers Restore, Gatorade",                                                        savingsLow:50,   savingsHigh:200,  claimId:"h4"  },
  { id:"u41",  num:41,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Detox & Anti-Aging",             use:"Supports bone strength — delivers calcium & magnesium",                                                                        replaces:"Calcium supplements (Citracal, Caltrate), magnesium, vitamin D3/K2 combos, bone broth",                                         savingsLow:0,    savingsHigh:200,  claimId:"h20" },
  { id:"u42",  num:42,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Supplements & Nutrition",        use:"Protein shake mixing — smoother blend, better absorption",                                                                     replaces:"Blender bottles, shaker accessories, pre-mixed RTD protein drinks",                                                             savingsLow:0,    savingsHigh:300,  claimId:"h4"  },
  { id:"u43",  num:43,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Hydration",                      use:"Replaces bottled water entirely",                                                                                              replaces:"Bottled water (Evian, Fiji, Smartwater, Dasani)",                                                                                savingsLow:1200, savingsHigh:1200, claimId:"h4"  },

  // ─── pH 9.5 ALKALINE — Kitchen & Food Prep ───────────────────────────────
  { id:"u44",  num:44,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Kitchen & Food Prep",            use:"Brew coffee & teas with richer flavor using less product",                                                                     replaces:"Premium whole-bean coffee, cold brew concentrate, Nespresso pods, pre-bottled teas",                                            savingsLow:0,    savingsHigh:400,  claimId:"hm3d" },
  { id:"u45",  num:45,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Kitchen & Food Prep",            use:"Blanch vegetables — preserves vibrant color & flavor",                                                                         replaces:"Lemon juice, color-preserving blanching solutions, specialty vegetable steamers",                                                savingsLow:0,    savingsHigh:50,   claimId:"hm3c" },
  { id:"u46",  num:46,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Kitchen & Food Prep",            use:"Soups, sauces & bone broth — enhanced flavor, reduced salt, superior mineral extraction",                                      replaces:"Bouillon cubes, flavor enhancers, low-sodium broth products, store-bought bone broth",                                          savingsLow:0,    savingsHigh:200,  claimId:"hm3d" },
  { id:"u47",  num:47,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Kitchen & Food Prep",            use:"Tenderize meat — neutralizes odors & improves consistency",                                                                    replaces:"Meat tenderizer (Adolph's), marinade kits, Jaccard tenderizer tools",                                                           savingsLow:0,    savingsHigh:80,   claimId:"hm3d" },
  { id:"u48",  num:48,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Kitchen & Food Prep",            use:"Faster sprouting of nuts, seeds, grains & legumes",                                                                            replaces:"Sprouting kits, sprouting trays, specialty sprouting solutions, pre-sprouted grain products",                                   savingsLow:0,    savingsHigh:60,   claimId:"hm3e" },
  { id:"u49",  num:49,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Kitchen & Food Prep",            use:"Cook pasta to perfect al dente consistency",                                                                                   replaces:"Pasta cooking additives, specialty salting guides",                                                                             savingsLow:0,    savingsHigh:100,  claimId:"hm3d" },
  { id:"u50",  num:50,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Kitchen & Food Prep",            use:"Soften beans faster during soaking",                                                                                           replaces:"Baking soda (common legume softening hack), canned beans, pressure cooker beans",                                               savingsLow:0,    savingsHigh:100,  claimId:"hm3b" },
  { id:"u51",  num:51,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Kitchen & Food Prep",            use:"Hard boil eggs — shells peel easier, yolks stay intact",                                                                       replaces:"Egg cookers (Dash), egg peeling gadgets, specialty egg cooking guides",                                                          savingsLow:0,    savingsHigh:40,   claimId:"hm3d" },
  { id:"u52",  num:52,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Kitchen & Food Prep",            use:"Spray on foods before freezing — preserves flavor after thawing",                                                              replaces:"Vacuum sealer bags (FoodSaver), freezer wrap products, food-grade freezer sprays",                                              savingsLow:0,    savingsHigh:80,   claimId:"hm3c" },
  { id:"u53",  num:53,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Kitchen & Food Prep",            use:"Prevent browning & preserve vibrant color in cut fruits & vegetables",                                                         replaces:"Lemon juice, FruitFresh, citric acid powder, color-preserving fruit washes",                                                    savingsLow:0,    savingsHigh:60,   claimId:"hm3c" },
  { id:"u54",  num:54,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Kitchen & Food Prep",            use:"Make ice cubes — reduces drink acidity & improves flavor",                                                                     replaces:"Filtered water ice cube trays, store-bought bagged ice, Brita pitcher",                                                         savingsLow:0,    savingsHigh:60,   claimId:"hm3d"  },
  { id:"u55",  num:55,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Kitchen & Food Prep",            use:"Mix cocktails & dilute beer, wine or spirits",                                                                                 replaces:"Tonic water, club soda, sparkling mineral water (Topo Chico, Perrier)",                                                         savingsLow:0,    savingsHigh:200,  claimId:"hm3d"  },
  { id:"u56",  num:56,  ph:"9.5", phLabel:"Alkaline (pH 9.5)",           phGroup:"alkaline",      category:"Kitchen & Food Prep",            use:"Extended shelf life of fresh herbs, leafy greens & cut vegetables",                                                            replaces:"Debbie Meyer Green Bags, FreshPaper sheets, ethylene gas absorbers (Bluapple), GreenSaver produce keeper",                      savingsLow:0,    savingsHigh:120,  claimId:"hm3c" },

  // ─── pH 11+ STRONG ALKALINE ───────────────────────────────────────────────
  { id:"u57",  num:57,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Food Safety & Produce",          use:"Remove oil-based pesticides & insecticides from produce — skip buying organic",                                               replaces:"Organic produce premium, Fit Organic spray, produce wash tablets, white vinegar rinse",                                         savingsLow:500,  savingsHigh:2000, claimId:"hm3" },
  { id:"u58",  num:58,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Food Safety & Produce",          use:"Rinse raw fish, meat & poultry — removes bacteria, fats & odors",                                                             replaces:"Veggie/meat wash sprays, white vinegar rinse, lemon juice, commercial food-safe sanitizers",                                    savingsLow:30,   savingsHigh:80,   claimId:"hm1" },
  { id:"u59",  num:59,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Cleaning & Household",           use:"Wash dishes with less soap — clean cutting boards & dishcloths",                                                               replaces:"Dish soap (Dawn, Palmolive)",                                                                                                    savingsLow:40,   savingsHigh:40,   claimId:"hm2" },
  { id:"u60",  num:60,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Laundry",                        use:"Laundry — use less detergent, add to wash cycle for deeper clean",                                                             replaces:"Laundry detergent (Tide, Persil, Gain)",                                                                                        savingsLow:100,  savingsHigh:100,  claimId:"hm4" },
  { id:"u61",  num:61,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Laundry",                        use:"Pretreat & remove tough stains (coffee, soy sauce, oil) from clothing",                                                        replaces:"Spray 'n Wash, Shout, OxiClean, Zout stain remover",                                                                            savingsLow:60,   savingsHigh:60,   claimId:"hm4" },
  { id:"u62",  num:62,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Cleaning & Household",           use:"Clean stovetops, ovens & kitchen vents — cuts oil & tough grime",                                                              replaces:"Easy-Off oven cleaner, Greased Lightning, Method kitchen degreaser, Zep degreasers",                                            savingsLow:40,   savingsHigh:80,   claimId:"hm2" },
  { id:"u63",  num:63,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Cleaning & Household",           use:"Clean bathrooms — removes toilet bowl & mineral stains on tubs & showers",                                                     replaces:"Lysol toilet bowl cleaner, Scrubbing Bubbles, CLR, Kaboom, Tilex",                                                              savingsLow:60,   savingsHigh:60,   claimId:"hm2" },
  { id:"u64",  num:64,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Cleaning & Household",           use:"Clean hardwood floors & crevices — removes dirt & grime",                                                                      replaces:"Bona hardwood cleaner, Swiffer WetJet refills, Bruce floor cleaner",                                                            savingsLow:60,   savingsHigh:60,   claimId:"hm2" },
  { id:"u65",  num:65,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Cleaning & Household",           use:"Soak pots & pans with burned-on food for easier cleaning",                                                                     replaces:"Barkeeper's Friend, SOS pads, Brillo pads, specialty pot soaking solutions",                                                    savingsLow:20,   savingsHigh:50,   claimId:"hm2" },
  { id:"u66",  num:66,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Therapeutic",                    use:"Foot soak — aids body detoxification",                                                                                         replaces:"Dr. Teal's foot bath salts, Epsom salt soaks, ionic foot bath machines, detox foot pads",                                       savingsLow:0,    savingsHigh:200,  claimId:"h25"  },
  { id:"u67",  num:67,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Therapeutic",                    use:"Body compress — soothes sore muscles, bruises, minor burns & skin rashes",                                                     replaces:"Bengay, Icy Hot, Biofreeze, hydrocortisone cream, cold/hot compress packs",                                                     savingsLow:0,    savingsHigh:120,  claimId:"h2" },
  { id:"u68",  num:68,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Skin",                           use:"Add to bathwater — softens skin & helps remove bathtub ring",                                                                  replaces:"Bath oils, bath salts, bath bombs (Lush), skin-softening bath additives",                                                       savingsLow:0,    savingsHigh:150,  claimId:"h6"  },
  { id:"u69",  num:69,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Cleaning & Household",           use:"Carpet cleaning",                                                                                                              replaces:"Resolve carpet cleaner, Bissell carpet spray, professional carpet cleaning services",                                            savingsLow:50,   savingsHigh:200,  claimId:"hm2" },
  { id:"u70",  num:70,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Cleaning & Household",           use:"All-purpose household cleaning",                                                                                               replaces:"409, Fantastik, Method All-Purpose, Mr. Clean",                                                                                 savingsLow:50,   savingsHigh:50,   claimId:"hm2" },
  { id:"u71",  num:71,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Cleaning & Household",           use:"Furniture polish & cleaning",                                                                                                  replaces:"Pledge, Old English, Murphy Oil Soap, furniture wipes",                                                                         savingsLow:40,   savingsHigh:40,   claimId:"hm2" },

  { id:"u116", num:116, ph:"2.5", phLabel:"Strong Acidic (pH 2.5)", phGroup:"strongAcid", category:"Cleaning & Household", use:"Garden pest & disease control — replaces chemical pesticides, fungicides & aphid sprays", replaces:"Neem oil, Sevin dust, Pyrethrin spray, insecticidal soap, copper fungicide, sulfur fungicide, chemical aphid sprays, powdery mildew treatments", savingsLow:40, savingsHigh:300, claimId:"hm7" },
  { id:"u115", num:115, ph:"11+", phLabel:"Strong Alkaline (pH 11+)", phGroup:"strongAlkaline", category:"Cleaning & Household", use:"Clear slow or clogged sink drains — dissolves grease, soap scum & organic buildup", replaces:"Drano, Liquid-Plumr, Bio-Clean drain treatment, baking soda + vinegar method, plumber call-outs", savingsLow:40, savingsHigh:200, claimId:"hm2" },
  { id:"u72",  num:72,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Skin",                           use:"Eczema flare-up relief (high alkaline soak/compress)",                                                                         replaces:"CeraVe Eczema Relief, Aveeno Eczema Therapy, hydrocortisone cream, prescription Eucrisa, Dupixent (Rx ~$36,000/yr)",            savingsLow:200,  savingsHigh:36000,claimId:"h13" },
  { id:"u73",  num:73,  ph:"11+", phLabel:"Strong Alkaline (pH 11+)",    phGroup:"strongAlkaline",category:"Skin",                           use:"Makeup removal — dissolves oil-based makeup without chemicals",                                                                replaces:"Neutrogena makeup remover wipes, micellar water (Bioderma, Garnier), cleansing balms, DHC cleansing oil, Clinique",              savingsLow:60,   savingsHigh:200,  claimId:"h6"  },

  // ─── pH 5.5 ACIDIC — Beauty Water ────────────────────────────────────────
  { id:"u74",  num:74,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Skin",                           use:"Eczema — maintains skin barrier & reduces flare-up frequency",                                                                 replaces:"pH-balancing toners, CeraVe Moisturizing Cream, Vanicream, Eucerin, prescription barrier creams",                              savingsLow:100,  savingsHigh:400,  claimId:"h13" },
  { id:"u75",  num:75,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Personal Care",                  use:"Deodorant alternative — inhibits odor-causing bacteria at skin's natural pH",                                                   replaces:"Dove, Secret, Degree, Native, Schmidt's, Lume, prescription aluminum-based deodorants, crystal deodorant sticks",               savingsLow:50,   savingsHigh:150,  claimId:"h22"  },
  { id:"u76",  num:76,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Skin",                           use:"Facial toner & skin astringent — tightens & tones skin after washing",                                                         replaces:"SK-II Facial Treatment Essence, Thayers witch hazel toner, Mario Badescu toner, Paula's Choice toner",                          savingsLow:96,   savingsHigh:96,   claimId:"h6"  },
  { id:"u77",  num:77,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Personal Care",                  use:"After-shave toner for men & women",                                                                                            replaces:"Aftershave (Old Spice, Nivea Men), witch hazel, alum block, specialty aftershave balms",                                        savingsLow:30,   savingsHigh:80,   claimId:"h6"  },
  { id:"u78",  num:78,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Skin",                           use:"Add to bathwater — maintains skin's natural pH, prevents bathtub ring",                                                         replaces:"Bath salts, bath oils, pH-balancing bath soaks, Aveeno colloidal oatmeal bath",                                                 savingsLow:0,    savingsHigh:150,  claimId:"h6"  },
  { id:"u79",  num:79,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Hair Care",                      use:"Hair rinse — reduces tangles, softens & adds shine",                                                                           replaces:"Leave-in conditioner, detangling sprays (It's a 10), hair shine serums, Moroccanoil, Olaplex smoothing treatments",             savingsLow:60,   savingsHigh:200,  claimId:"h6"  },
  { id:"u80",  num:80,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Laundry",                        use:"Final rinse cycle in laundry — naturally softens clothes",                                                                     replaces:"Fabric softener (Downy, Snuggle), dryer sheets (Bounce), wool dryer balls",                                                     savingsLow:84,   savingsHigh:84,   claimId:"hm4" },
  { id:"u81",  num:81,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Cleaning & Household",           use:"Window & glass cleaning",                                                                                                      replaces:"Windex, Method Glass Cleaner, newspaper + vinegar method",                                                                      savingsLow:50,   savingsHigh:50,   claimId:"hm2" },
  { id:"u82",  num:82,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Cleaning & Household",           use:"Jewelry cleaning",                                                                                                             replaces:"Connoisseurs jewelry cleaner, ultrasonic jewelry cleaners, jewelry cleaning cloths",                                            savingsLow:10,   savingsHigh:10,   claimId:"hm2" },
  { id:"u83",  num:83,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Skin",                           use:"Reduced or eliminated acne",                                                                                                   replaces:"Proactiv, Differin (adapalene), benzoyl peroxide cleansers, salicylic acid pads, prescription tretinoin",                       savingsLow:200,  savingsHigh:600,  claimId:"h6"  },
  { id:"u84",  num:84,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Skin",                           use:"Eczema — improved skin barrier & reduced flare occurrence (topical rinse)",                                                    replaces:"CeraVe Eczema Relief, Aveeno Eczema Therapy, hydrocortisone cream, Eucrisa",                                                    savingsLow:100,  savingsHigh:400,  claimId:"h13" },
  { id:"u85",  num:85,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Skin",                           use:"Improved skin tone & texture (topical)",                                                                                       replaces:"Retinol creams, glycolic acid toners, vitamin C serums, microdermabrasion kits, chemical peels",                                savingsLow:150,  savingsHigh:500,  claimId:"h6"  },
  { id:"u86",  num:86,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Skin",                           use:"Soothe & reduce hemorrhoid discomfort (topical sitz soak/rinse)",                                                               replaces:"Preparation H, Tucks medicated pads, witch hazel pads, hydrocortisone suppositories",                                           savingsLow:40,   savingsHigh:120,  claimId:"h6"  },
  { id:"u87",  num:87,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Skin",                           use:"Relief from & elimination of heat rash",                                                                                       replaces:"Gold Bond powder, calamine lotion, hydrocortisone cream, CeraVe itch relief",                                                   savingsLow:20,   savingsHigh:60,   claimId:"h6"  },
  { id:"u88",  num:88,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Skin",                           use:"Relief from & elimination of diaper rash",                                                                                     replaces:"Desitin, A+D Ointment, Boudreaux's Butt Paste, Aquaphor Baby",                                                                  savingsLow:60,   savingsHigh:150,  claimId:"h6"  },
  { id:"u89",  num:89,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Skin",                           use:"Better absorption of skin moisturizers",                                                                                       replaces:"Expensive serums, toners, essence products (SK-II, Tatcha), facial mists, pH-balancing toners",                                 savingsLow:0,    savingsHigh:400,  claimId:"h6"  },
  { id:"u90",  num:90,  ph:"5.5+2.5",phLabel:"Multi-pH (5.5 + 2.5)",    phGroup:"multiPh",       category:"Wound Care",                     use:"Bedsore & pressure wound care — prevention, healing & antimicrobial treatment",                                                replaces:"Mepilex foam dressings, hydrocolloid wound dressings, prescription wound care products, barrier creams",                        savingsLow:200,  savingsHigh:1500, claimId:"h7"  },
  { id:"u91",  num:91,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Skin",                           use:"Cold sore, fever blister & pimple relief — speeds healing & reduces recurrence",                                               replaces:"Abreva, Carmex, Zilactin, benzoyl peroxide spot treatments, prescription Valtrex",                                              savingsLow:30,   savingsHigh:150,  claimId:"h7"  },
  { id:"u92",  num:92,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"First Aid",                      use:"Clean scrapes, scratches & minor cuts — sting-free antiseptic",                                                                replaces:"Neosporin, Bacitracin, Betadine, hydrogen peroxide, sterile wound wash",                                                        savingsLow:20,   savingsHigh:60,   claimId:"h7"  },
  { id:"u93",  num:93,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Throat & Infection",             use:"Gargle for sore or scratchy throat — soothes & provides relief",                                                               replaces:"Chloraseptic spray, Listerine, Therabreath throat spray, Halls lozenges, salt water gargle",                                    savingsLow:20,   savingsHigh:60,   claimId:"h11" },
  { id:"u94",  num:94,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Nasal Care",                     use:"Nasal irrigation & congestion relief — rinses mucus, soothes passages, reduces congestion",                                    replaces:"NeilMed Sinus Rinse, saline nasal spray, Afrin, Flonase, Sudafed, Breathe Right strips",                                       savingsLow:50,   savingsHigh:200,  claimId:"h11" },
  { id:"u95",  num:95,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Eye Health",                     use:"Relief from eye irritation",                                                                                                   replaces:"Visine, Rohto, Systane eye drops, Bausch + Lomb eye wash, Zaditor allergy eye drops",                                           savingsLow:30,   savingsHigh:100,  claimId:"h24"  },
  { id:"u96",  num:96,  ph:"5.5", phLabel:"Acidic — Beauty Water (pH 5.5)",phGroup:"acidic",      category:"Feet & Fungal Care",             use:"Foot soak — eliminates fungal toenails, athlete's foot & jock itch",                                                           replaces:"Lotrimin, Lamisil (terbinafine), Tinactin antifungal spray, Zeasorb-AF, tea tree oil foot soaks",                               savingsLow:40,   savingsHigh:120,  claimId:"h23"  },

  // ─── pH 2.5 STRONG ACIDIC — Hypochlorous Acid ────────────────────────────
  { id:"u97",  num:97,  ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Oral Hygiene",                   use:"Mouthwash & morning gargle — kills oral bacteria & germs",                                                                     replaces:"Listerine, Colgate Total mouthwash, TheraBreath, prescription chlorhexidine rinse",                                             savingsLow:50,   savingsHigh:50,   claimId:"s10" },
  { id:"u98",  num:98,  ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Oral Hygiene",                   use:"Improved gum health — reduced bleeding, improved texture & reduced inflammation",                                               replaces:"Parodontax, TheraBreath gum rinse, prescription chlorhexidine, Water Pik, Colgate Total gum defense",                           savingsLow:50,   savingsHigh:200,  claimId:"s2" },
  { id:"u99",  num:99,  ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Oral Hygiene",                   use:"Mouth ulcer pain relief, faster healing & reduced incidents",                                                                  replaces:"Orajel, Kanka, Canker-X, prescription triamcinolone paste, Debacterol",                                                         savingsLow:20,   savingsHigh:80,   claimId:"h7" },
  { id:"u100", num:100, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Oral Hygiene",                   use:"Prevents bacteria buildup & odor on toothbrushes",                                                                             replaces:"UV toothbrush sanitizers (Violight, Pursonic), antibacterial toothbrush sprays, frequent replacement",                          savingsLow:20,   savingsHigh:60,   claimId:"s9" },
  { id:"u101", num:101, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Sanitizing",                     use:"Sanitize hands & surfaces at office or on the go",                                                                             replaces:"Purell, Germ-X, Clorox wipes, Lysol disinfecting spray, antibacterial wipes",                                                  savingsLow:40,   savingsHigh:100,  claimId:"hm1" },
  { id:"u102", num:102, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Child Safety",                   use:"Clean & sanitize children's toys, high chairs & surfaces",                                                                     replaces:"Babyganics multi-surface spray, Seventh Generation disinfecting spray, Lysol wipes",                                            savingsLow:60,   savingsHigh:150,  claimId:"s9" },
  { id:"u103", num:103, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Child Safety",                   use:"Sanitizes baby bottles, sippy cups, pacifiers & bottle parts",                                                                 replaces:"Baby bottle sterilizers (Dr. Brown's, Philips Avent), sterilizing tablets, microwave steam bags",                               savingsLow:50,   savingsHigh:200,  claimId:"s9" },
  { id:"u104", num:104, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Skin",                           use:"Add to bathwater — deep skin softening & sanitizing",                                                                          replaces:"Bath bombs, skin-softening bath additives, Aveeno bath soak, Dr. Teal's bath soak",                                             savingsLow:0,    savingsHigh:150,  claimId:"h6"  },
  { id:"u105", num:105, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Cleaning & Household",           use:"Countertop & smooth surface cleaning — chemical-free",                                                                         replaces:"Windex, Method All-Purpose, Mrs. Meyer's Clean Day, Clorox wipes, 409",                                                         savingsLow:40,   savingsHigh:80,   claimId:"hm1" },
  { id:"u106", num:106, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Eye Health",                     use:"Pink eye (conjunctivitis) — antimicrobial rinse reduces infection & irritation",                                                replaces:"Prescription antibiotic eye drops (erythromycin, tobramycin), Bausch + Lomb eye wash, Similasan, urgent care visits",            savingsLow:100,  savingsHigh:300,  claimId:"h7"  },
  { id:"u107", num:107, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Throat & Infection",             use:"Strep throat — antimicrobial gargle reduces bacterial load & discomfort",                                                       replaces:"Prescription antibiotics (amoxicillin, penicillin), Chloraseptic spray, doctor visit co-pays",                                  savingsLow:100,  savingsHigh:400,  claimId:"s9"  },
  { id:"u108", num:108, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Skin",                           use:"Eczema — antimicrobial topical treatment reduces Staph aureus colonization & flare severity",                                   replaces:"Prescription bleach baths (diluted Clorox protocol), Eucrisa, Dupixent (Rx), hydrocortisone cream",                             savingsLow:200,  savingsHigh:36000,claimId:"h13" },
  { id:"u109", num:109, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"First Aid",                      use:"Relieves burn pain, speeds healing & reduces infection risk for wounds, cuts & burns",                                          replaces:"Silvadene cream (Rx), Neosporin burn gel, Solarcaine, Betadine antiseptic, hydrogel burn dressings, aloe vera",                 savingsLow:30,   savingsHigh:100,  claimId:"h7"  },
  { id:"u110", num:110, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"First Aid",                      use:"Stops bleeding from small cuts & scrapes",                                                                                     replaces:"Styptic pencils, QuikClot, liquid bandage (New-Skin), hydrogen peroxide",                                                       savingsLow:15,   savingsHigh:40,   claimId:"h7"  },
  { id:"u111", num:111, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"First Aid",                      use:"Relief from insect bite & sting — reduces stinging, itching & swelling",                                                       replaces:"After Bite, Benadryl gel, hydrocortisone cream, calamine lotion, Sting-Kill",                                                   savingsLow:20,   savingsHigh:60,   claimId:"h7"  },
  { id:"u112", num:112, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Skin",                           use:"Sunburn relief — soothes pain, reduces inflammation & speeds healing",                                                         replaces:"Aloe vera gel (Banana Boat, Solarcaine), Benadryl spray, hydrocortisone cream, cool compress products",                         savingsLow:20,   savingsHigh:60,   claimId:"h7"  },
  { id:"u113", num:113, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Animal & Veterinary",            use:"Supports mastitis treatment & udder hygiene in milking animals",                                                               replaces:"Commercial teat dip solutions (Udderly Fresh, Fight Bac), iodine-based teat dips, chlorhexidine udder wash, prescription mastitis antibiotics",savingsLow:100,savingsHigh:600,claimId:"hm1"  },
  { id:"u114", num:114, ph:"2.5", phLabel:"Strong Acidic (pH 2.5) — HOCl",phGroup:"strongAcidic", category:"Skin / First Aid",               use:"Poison ivy, oak & sumac rash relief — reduces urushiol-triggered inflammation, soothes itch & speeds skin recovery",           replaces:"Tecnu Rash Relief, Ivarest, Benadryl Anti-Itch spray, Calamine lotion, Cortizone-10, Zanfel urushiol wash, prescription triamcinolone, oral prednisone",savingsLow:30,savingsHigh:120,claimId:"h7"  }
];

// pH group display config
const PH_GROUPS = [
  { id:"neutral",       label:"Neutral (pH 7.0)",                color:"#7B9E87", bgColor:"#E8F0EA", count:5   },
  { id:"slightAlkaline",label:"Slightly Alkaline (pH 8.0)",      color:"#6B9EAF", bgColor:"#E4EFF3", count:2   },
  { id:"alkaline",      label:"Alkaline (pH 9.5)",               color:"#5B8FA8", bgColor:"#DDE9EF", count:36  },
  { id:"strongAlkaline",label:"Strong Alkaline (pH 11+)",        color:"#7A6FAF", bgColor:"#EAE8F3", count:17  },
  { id:"acidic",        label:"Acidic — Beauty Water (pH 5.5)",  color:"#C4956A", bgColor:"#F3EBE0", count:23  },
  { id:"multiPh",       label:"Multi-pH (5.5 + 2.5)",            color:"#B07A5A", bgColor:"#F0E5DB", count:1   },
  { id:"strongAcidic",  label:"Strong Acidic (pH 2.5) — HOCl",  color:"#B85C5C", bgColor:"#F3E4E4", count:18  }
];


// ── CLAIMS DATA ───────────────────────────────────────────────────────────────
var CLAIMS = {
  health: [
  {
    id: "h1",
    title: "Energy & Stamina",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal"],
    summary: "Increases mental and physical energy and stamina.",
    simple: "Think of your cells like little battery packs. Hydrogen water gives those batteries a boost by helping the tiny powerhouses inside your cells (mitochondria) work better and make more fuel — called ATP. More ATP = more energy for your brain and body. Most people notice a difference within the first day or two.",
    scientific: "Molecular hydrogen (H2) at pH 9.5 enters mitochondria directly due to its size — the smallest molecule in existence. It participates in Complex I of the electron transport chain, donating electrons that reduce ubiquinone to ubiquinol, which boosts the proton gradient across the inner mitochondrial membrane. This drives ATP synthase more efficiently, with research showing H2 supplementation can increase mitochondrial ATP production by more than 50% while simultaneously reducing superoxide production. The negative ORP of ionized alkaline water (as strong as -1250 mV in Tyent units) also neutralizes free radicals that would otherwise impair cellular energy metabolism.",
    sources: [
      { label: "Hydrogen Biology Research Center — ATP & Mitochondrial Benefit", url: "https://hydrogenbiology.org/howatpisproducedinthemitochondriaandthebenefitofmolecularhydrogen/" },
      { label: "Frontiers in Cell & Developmental Biology — Mitochondria as H2 hub (2023)", url: "https://www.frontiersin.org/journals/cell-and-developmental-biology/articles/10.3389/fcell.2023.1283820/full" },
      { label: "PubMed — H2 effect on CoQ and mitochondrial function", url: "https://pubmed.ncbi.nlm.nih.gov/31536712/" }
    ]
  },
  {
    id: "h2",
    title: "Anti-Inflammatory",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal"],
    summary: "Reduces chronic and acute inflammation throughout the body.",
    simple: "Inflammation is your body's alarm system — helpful in small doses, but dangerous when it gets stuck on. Hydrogen water helps turn down that alarm by neutralizing the charged molecules (free radicals) that keep inflammation going. It breaks the feedback loop between damage and inflammation so your body can actually calm down and heal.",
    scientific: "Reactive oxygen species (ROS) and inflammatory cytokines exist in a crosstalk loop: inflammation generates ROS, which amplifies further inflammation, driving chronic disease. Electrolyzed hydrogen water (EHW) interrupts this loop selectively — H2 neutralizes only the most cytotoxic ROS (hydroxyl radical and peroxynitrite) without disturbing the signaling ROS the body needs. EHW reduces NF-kB activation and lowers pro-inflammatory cytokines including TNF-a, IL-6, and IL-1b. A 2023 systematic review of 23 RCTs found statistically significant reductions in C-reactive protein (CRP) and 8-OHdG across subjects consuming H2-enriched water at therapeutic concentrations.",
    sources: [
      { label: "MDPI Antioxidants — Health Benefits of EHW: Anti-Inflammatory Effects (2024)", url: "https://www.mdpi.com/2076-3921/13/3/313" },
      { label: "Sim et al. (2020) — H2-rich water reduces inflammatory responses, Scientific Reports", url: "https://www.nature.com/articles/s41598-020-68930-2" }
    ]
  },
  {
    id: "h3",
    title: "Neuroprotection",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal"],
    summary: "Protects brain cells from oxidative stress and cognitive decline.",
    simple: "Your brain has a security gate called the blood-brain barrier that keeps most things out. Hydrogen is so tiny it slips right through. Once inside, it acts like a bodyguard for your brain cells — neutralizing the most harmful molecules before they can cause damage. Studies show it reduces cognitive impairment and may help protect against conditions like Parkinson's disease.",
    scientific: "Molecular H2 crosses the blood-brain barrier freely due to its neutral charge and minimal size, unlike most antioxidants. Inside the CNS, it selectively scavenges hydroxyl radicals and peroxynitrite — the two ROS most associated with neuronal death — without disrupting beneficial ROS signaling. Yoritaka et al. (2013) found significant improvement in Parkinson's patients in a double-blind RCT. The mechanism includes Nrf2 pathway upregulation, which increases endogenous antioxidant production (SOD, catalase, glutathione).",
    sources: [
      { label: "MDPI Antioxidants — EHW: Antioxidant & Anti-Inflammatory Effects (2024)", url: "https://www.mdpi.com/2076-3921/13/3/313" },
      { label: "Yoritaka et al. — H2 therapy in Parkinson's disease, Movement Disorders (2013)", url: "https://pubmed.ncbi.nlm.nih.gov/23400965/" }
    ]
  },
  {
    id: "h4",
    title: "Better Hydration",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal"],
    summary: "Hydrates the body at a cellular level more effectively than regular water.",
    simple: "Regular water molecules tend to clump together in big clusters that are harder for your cells to absorb. Ionized water restructures these clusters into smaller, hexagonal shapes — think of it like switching from big puzzle pieces to small ones that fit through your cell doors much faster. Your body gets hydrated more quickly and deeply.",
    scientific: "The electrolysis process reduces the surface tension of water and restructures H2O molecule clusters into smaller, hexagonally-shaped micro-clusters (5-6 molecules vs. 10-13 in regular water). This structural change reduces surface tension and improves transmembrane water transport via aquaporin channels. Ostojic & Stojanovic (2014) confirmed hydrogen-rich water affected blood alkalinity in physically active men, supporting superior electrolyte and hydration balance.",
    sources: [
      { label: "Ostojic & Stojanovic — Hydrogen-rich water affected blood alkalinity in physically active men, Research in Sports Medicine (2014)", url: "https://pubmed.ncbi.nlm.nih.gov/24392771/" },
      { label: "Heil — Acid-base balance and hydration status following consumption of mineral-based alkaline bottled water, Journal of the International Society of Sports Nutrition (2010)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3161391/" },
      { label: "Holsworth et al. — Effect of hydration on whole blood viscosity and aquaporin-mediated water transport (2013)", url: "https://pubmed.ncbi.nlm.nih.gov/23981496/" }
    ]
  },
  {
    id: "h5",
    title: "Antioxidant Power (ORP)",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal"],
    summary: "Delivers powerful antioxidants that neutralize cell-damaging free radicals.",
    simple: "Free radicals are unstable molecules that steal electrons from your cells, causing damage — like rust on metal, but inside your body. Antioxidants donate electrons to neutralize them. Ionized water is loaded with negatively charged ions that act as antioxidants — and unlike most supplements, this water gets absorbed by cells almost instantly.",
    scientific: "ORP (Oxidation Reduction Potential) measures a substance's ability to donate electrons and reduce oxidation. Tyent ionizers produce water with ORP as strong as -1250 mV at pH 9.5, compared to +200 to +400 mV for typical tap or bottled water.\n\nA common point of confusion is how H2 can 'neutralize' some ROS while leaving others completely untouched — these are two different outcomes, not a matter of degree.\n\nFor hydroxyl radical (•OH) and peroxynitrite (ONOO−) — the two ROS with no beneficial function — the reaction with H2 is thermodynamically downhill (exergonic). It proceeds spontaneously the instant the molecules meet, no enzyme or trigger required. H2 donates electrons, •OH becomes water (H2O), and that molecule of H2 is consumed. This is the 'neutralizing' effect — a real chemical reaction with a real product.\n\nFor hydrogen peroxide (H2O2), superoxide (O2•−), and nitric oxide (NO•) — the ROS your immune system and cells use for signaling — the reaction with H2 is thermodynamically uphill (endergonic) under physiological conditions. It simply does not occur. H2 and these molecules can coexist in the same cell indefinitely without reacting. This isn't H2 'choosing' to leave them alone — the chemistry doesn't permit a reaction to happen at all.\n\nThe practical result: H2 passes through tissue and encounters all six major ROS, but only reacts with two of them — the two with no beneficial role. The other four continue their signaling functions exactly as before, with no interaction. This selectivity — rooted in basic reaction thermodynamics rather than any kind of molecular recognition — is the key advantage over broad-spectrum antioxidant supplements (vitamin C, vitamin E), which react across a much wider range of ROS, including some of the beneficial ones — a mechanism implicated in the unexpected harm seen in several high-dose antioxidant supplement trials.",
    sources: [
      { label: "Medical Gas Research (2021) — H2 crosses cell membranes without assistance", url: "https://www.medgasres.com/text.asp?2021/11/4/163/325201" },
      { label: "Ohsawa et al. — Hydrogen acts as a therapeutic antioxidant by selectively reducing cytotoxic oxygen radicals, Nature Medicine (2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17486089/" }
    ]
  },
  {
    id: "h6",
    title: "Skin Health & Acne (Topical)",
    badge: "pH 5.5 Beauty Water",
    tags: ["Topical"],
    summary: "Reduces acne, tones skin, improves texture, and restores the skin's natural pH barrier.",
    simple: "Your skin naturally likes to be slightly acidic (around pH 5.5). Most tap water disrupts that balance. Beauty water at pH 5.5 matches your skin's natural environment, tightening pores, reducing bacteria that cause acne, and helping your moisturizer absorb better.",
    scientific: "The skin's acid mantle maintains the integrity of the stratum corneum and inhibits colonization by pathogens including C. acnes and S. aureus. pH 5.5 water reinforces this barrier without stripping lipids. Fukuyama et al. (2017, 2018) showed topical HOCl prevented new eczema lesions and performed comparably to the JAK inhibitor tofacitinib in reducing lesion severity.",
    sources: [
      { label: "Chilicka et al. — Efficacy of Hydrogen Purification and Cosmetic Acids in the Treatment of Acne Vulgaris: A Preliminary Report, PMC (2022)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9653569/" },
      { label: "Fukuyama et al. — Comparison of topical tofacitinib and 0.1% hypochlorous acid in a murine atopic dermatitis model, BMC Pharmacology & Toxicology (2018)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6029395/" },
      { label: "Skin surface pH in acne vulgaris — observational study and literature review, PMC (2017)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5605222/" }
    ]
  },
  {
    id: "h7",
    title: "Wound Care & First Aid (Topical)",
    badge: "pH 2.5 HOCl",
    tags: ["Topical"],
    summary: "Kills bacteria on wounds 80-100x more effectively than bleach — with no sting, no toxicity.",
    simple: "At pH 2.5, the water produces hypochlorous acid (HOCl) — the same molecule your white blood cells make to kill bacteria. It kills bacteria 80-100 times more effectively than bleach, but it's so safe you can spray it directly in your eyes, on open wounds, or on a child's skin. No sting. No fumes. No toxicity.",
    scientific: "HOCl is electrically neutral at pH 2.5, allowing it to penetrate negatively charged pathogen cell walls freely — unlike bleach (OCl-) which is repelled by the same charge as the bacteria it targets. HOCl achieves 99.9% kill of bacteria within seconds. Gray et al. (2016) documented a 67% reduction in MRSA infection rates in a burn ICU after switching to HOCl. FDA-approved for wound care, food contact, and high-level disinfection of medical instruments.",
    sources: [
      { label: "WHO Expert Committee — Hypochlorous Acid, Application for the Essential Medicines List (2021)", url: "https://cdn.who.int/media/docs/default-source/essential-medicines/2021-eml-expert-committee/applications-for-addition-of-new-medicines/a.18_hypochlorous-acid.pdf?sfvrsn=35222172_4" },
      { label: "Gray et al. — HOCl reduces MRSA in burn ICU (2016)", url: "https://pubmed.ncbi.nlm.nih.gov/25773568/" },
      { label: "Robson et al. — HOCl in chronic infected wounds (2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17650106/" },
      { label: "Scientific American — The Nontoxic Cleaner That Kills Germs Better Than Bleach (April 2025)", url: "https://www.scientificamerican.com/article/hypochlorous-acid-is-trending-in-skin-care-and-cleaning-but-does-it-work/" }
    ]
  },
  {
    id: "h8",
    title: "Digestion, Acid Reflux & the Pepsin Mechanism",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal","Digestion"],
    summary: "Alkaline water at pH 9.5 buffers excess stomach acid and — critically — permanently deactivates pepsin, the enzyme responsible for the tissue damage that makes acid reflux destructive. This is not the same thing as suppressing acid production. It addresses the damage mechanism without disrupting the digestive system's intended function.",
    simple: "Most people understand acid reflux as a stomach acid problem. That's partially right — but the part that actually damages your esophagus and throat is an enzyme called pepsin, and alkaline water addresses it in a way that antacids and PPIs don't.\n\nHere's the full picture:\n\nYour stomach produces hydrochloric acid (HCl) to digest food — particularly proteins. The stomach lining is protected from this acid by a thick mucous barrier. Your esophagus has no such protection. When stomach contents escape upward through the lower esophageal sphincter, they bring acid and pepsin with them. The acid causes the burning sensation. But pepsin — the protein-digesting enzyme that needs low pH to activate — is what actually damages the tissue. It can reach the esophagus, the throat, and even the sinuses, and continue digesting protein there. This is the driver of chronic laryngopharyngeal reflux (silent reflux) — the kind that causes hoarseness, a lump-in-throat sensation, post-nasal drip, and a chronic cough, often without classic heartburn at all.\n\nThis is where alkaline water's mechanism is clinically specific.\n\nA 2012 peer-reviewed study by Dr. Jamie Koufman and Nikki Johnston — published in the Annals of Otology, Rhinology & Laryngology — tested alkaline water at pH 8.8 directly against pepsin. The finding: alkaline water at pH 8.8 completely and irreversibly denatured (permanently deactivated) pepsin. Standard bottled waters at pH 6.7–7.4 had no such effect. This is not a temporary buffering effect — once pepsin is denatured at pH 8.0 or above, it does not reactivate when the pH drops back down. The damage mechanism is shut off, not masked.\n\nThe buffering effect adds a second layer. Alkaline water's hydroxide ions (OH−) react directly with hydrogen ions (H+) from HCl — OH− + H+ → H2O — temporarily raising gastric pH. This reduces the acidity of any refluxed contents and gives the esophageal lining a less corrosive environment during an episode. This effect is temporary (the stomach re-acidifies), but for people with frequent reflux it meaningfully reduces cumulative exposure.\n\nA third mechanism involves the esophageal mucosa itself. The protective mucous layer lining the esophagus depends on adequate cellular hydration to maintain its integrity. Dehydration degrades this barrier, making the tissue more vulnerable to both acid and pepsin. Ionized water's improved cellular absorption — through aquaporin water channels — supports better mucosal hydration and barrier maintenance.\n\nNow contrast this with what PPIs actually do.\n\nProton pump inhibitors (Prilosec, Nexium, Protonix) block the hydrogen-potassium ATPase enzyme in stomach parietal cells — the proton pump that secretes HCl into the stomach. They dramatically reduce acid production. The problem: stomach acid is not a mistake. It activates pepsin, sterilizes food-borne pathogens, and is essential for absorbing calcium, magnesium, iron, zinc, and vitamin B12. Long-term PPI use is now associated with significantly increased risk of C. difficile infection, bone fractures (calcium malabsorption), B12 deficiency, chronic kidney disease, and dementia in older adults. You are suppressing a system your body needs, to manage a symptom caused by a structural problem (a weak sphincter) and a dietary one (trigger foods, industrial seed oils, excess refined carbohydrates).\n\nAlkaline water does not suppress acid production. It buffers excess acid, permanently deactivates escaped pepsin, and supports the mucosal barrier — addressing the damage mechanisms without interfering with normal digestive chemistry.",
    scientific: "MECHANISM 1 — PEPSIN DENATURATION:\nPepsin is an aspartic protease secreted as inactive pepsinogen by chief cells in the gastric mucosa. It is activated by low pH (optimal activity: pH 1.5–2.5; activity maintained down to pH ~4.0; irreversibly denatured above pH 8.0). In laryngopharyngeal reflux (LPR) and GERD, pepsin escapes the gastric environment and reaches the esophageal, pharyngeal, laryngeal, and even sinonasal mucosa. Pepsin binds to epithelial cell surface receptors and can be re-activated by subsequent acid exposure — creating a cyclical damage mechanism independent of ongoing acid reflux. Koufman & Johnston (2012, Annals of Otology, Rhinology & Laryngology) demonstrated that alkaline water at pH 8.8 irreversibly denatures human pepsin, permanently eliminating its proteolytic activity. No reactivation occurs upon subsequent pH reduction. This is mechanistically distinct from antacid action (temporary acid neutralization, no effect on pepsin) and PPI action (acid suppression at the source, no direct pepsin effect).\n\nMECHANISM 2 — ACID BUFFERING:\nAlkaline water at pH 9.5 contains a significant excess of OH− ions relative to H+. Direct neutralization: OH− + H+ → H2O. This raises gastric and esophageal pH transiently, reducing the corrosivity of refluxed contents. The buffering capacity of alkaline water is modest relative to dedicated antacid preparations (calcium carbonate, aluminum hydroxide), but sufficient to meaningfully reduce peak acid exposure during reflux episodes. The bicarbonate content of some mineral-rich alkaline waters provides additional buffering via the bicarbonate buffer system: HCO3− + H+ → H2CO3 → H2O + CO2.\n\nMECHANISM 3 — MUCOSAL BARRIER SUPPORT:\nThe esophageal mucosal barrier consists of tight junctions between epithelial cells, surface mucous layer, and submucosal bicarbonate secretion. Cellular dehydration impairs tight junction integrity and reduces mucous production, increasing permeability to acid and pepsin. Ionized alkaline water's improved transmembrane transport (via aquaporin channels, supported by reduced surface tension and micro-clustered structure) supports better hydration of esophageal epithelial cells and submucosal glands, maintaining the barrier function that protects against reflux damage.\n\nCLINICAL EVIDENCE:\nKoufman & Johnston (2012) — direct pepsin denaturation at pH 8.8; Tashiro et al. (2000) — alkaline ionized water significantly improved chronic diarrhea and abdominal complaints in 163 subjects in a controlled study (Digestion & Absorption); Shin et al. (2018, NIH-indexed) — alkaline-reduced water significantly reduced symptoms in irritable bowel syndrome with diarrhea versus placebo in a double-blind randomized controlled trial.\n\nPPI RISK CONTEXT:\nLong-term PPI use (>1 year) is associated with: C. difficile infection (OR 1.74, meta-analysis, Kwok et al., CMAJ 2012); hip fracture risk increase of 44% at 1 year use (Yang et al., JAMA 2006); hypomagnesemia; vitamin B12 deficiency; chronic kidney disease (HR 1.26, Lazarus et al., JAMA Internal Medicine 2016); and increased dementia risk in older adults (Gomm et al., JAMA Neurology 2016). These risks arise from the suppression of a physiologically essential process rather than correction of its underlying cause.",
    sources: [
      { label: "Koufman & Johnston — Potential benefits of pH 8.8 alkaline drinking water as an adjunct in the treatment of reflux disease, Annals of Otology, Rhinology & Laryngology (2012)", url: "https://pubmed.ncbi.nlm.nih.gov/22844861/" },
      { label: "Tashiro et al. — Alkaline ionized water for chronic diarrhea and abdominal complaints (163 subjects), Digestion & Absorption (2000)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6352572/" },
      { label: "Shin et al. — Alkaline-reduced water for irritable bowel syndrome with diarrhea (RCT), NIH-indexed (2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29849734/" },
      { label: "Kwok et al. — PPI use and risk of Clostridium difficile infection: meta-analysis, CMAJ (2012)", url: "https://pubmed.ncbi.nlm.nih.gov/22311087/" },
      { label: "Lazarus et al. — Proton pump inhibitor use and the risk of chronic kidney disease, JAMA Internal Medicine (2016)", url: "https://pubmed.ncbi.nlm.nih.gov/26752337/" },
      { label: "Yang et al. — Long-term PPI therapy and risk of hip fracture, JAMA (2006)", url: "https://pubmed.ncbi.nlm.nih.gov/16595759/" }
    ]
  },
  {
    id: "h9",
    title: "Weight & Metabolism",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal"],
    summary: "Supports weight loss by improving hydration of fat cells and reducing cravings.",
    simple: "When your body is dehydrated, fat cells can't be broken down efficiently. Ionized water hydrates fat cells more effectively, making it easier to burn fat. It also reduces food cravings by addressing one of their hidden causes: cellular dehydration that the body confuses with hunger.",
    scientific: "Alkaline ionized water reduces excess fluid retention due to superior cellular absorption. Deep cellular hydration reduces the perception of hunger that arises from mild cellular dehydration, as the hypothalamus can misinterpret hydration signals as hunger signals. Kajiyama et al. (2008) demonstrated hydrogen-rich water improved lipid and glucose metabolism in type 2 diabetes patients.",
    sources: [
      { label: "Kajiyama et al. — Supplementation of hydrogen-rich water improves lipid and glucose metabolism in patients with type 2 diabetes or impaired glucose tolerance, Nutrition Research (2008) — RCT", url: "https://pubmed.ncbi.nlm.nih.gov/19083400/" },
      { label: "Song et al. — H2-rich water decreases serum LDL-cholesterol and improves HDL function in metabolic syndrome patients, Journal of Lipid Research (2013)", url: "https://pubmed.ncbi.nlm.nih.gov/23610159/" },
      { label: "Systematic review and meta-analysis — Effects of hydrogen-rich water on blood lipid profiles in metabolic disorder RCTs (PMC, 2024)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11742746/" }
    ]
  },
  {
    id: "h10",
    title: "Sleep & Stress",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal"],
    summary: "Improves quality of sleep and helps the body handle stress more effectively.",
    simple: "When your cells are properly hydrated and your body's acid load is reduced, your nervous system can actually relax. People report falling asleep more easily, sleeping more deeply, and waking up more rested. The antioxidant effect also reduces the physical stress response.",
    scientific: "Chronic oxidative stress elevates cortisol and activates the HPA axis, disrupting sleep architecture. H2's suppression of ROS reduces this activation pathway. Magnesium and calcium from ionized water support GABA receptor activity — the primary inhibitory neurotransmitter responsible for sleep onset.",
    sources: [
      { label: "MDPI Antioxidants — EHW: Anti-Inflammatory Effects (2024)", url: "https://www.mdpi.com/2076-3921/13/3/313" }
    ]
  },
  {
    id: "h11",
    title: "Immune Support",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal"],
    summary: "Strengthens resistance to colds, flu, and viruses; shortens recovery time.",
    simple: "Your immune system needs two things: proper hydration and low oxidative stress. Ionized water gives you both simultaneously. People who drink it regularly report getting sick less often, and recovering faster when they do.",
    scientific: "Ionized alkaline water supports immunity through multiple pathways: superior hydration improves lymphatic circulation; antioxidants reduce chronic oxidative stress that impairs NK cell and T-cell function; H2 upregulates Nrf2, increasing glutathione production. Sim et al. (2020) confirmed H2-rich water reduced inflammatory responses and prevented apoptosis of peripheral blood cells in healthy adults.",
    sources: [
      { label: "Sim et al. — H2-rich water reduces inflammation, Scientific Reports (2020)", url: "https://www.nature.com/articles/s41598-020-68930-2" }
    ]
  },
  {
    id: "h12",
    title: "Joint & Bone Pain",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal"],
    summary: "Reduces bone and joint pain; supports bone density through mineral delivery.",
    simple: "Ionized alkaline water is rich in calcium and magnesium — the same minerals your bones and joints need most. Because the water is micro-clustered, your body absorbs these minerals more effectively than from tap water or supplements. The anti-inflammatory effects also reduce the joint inflammation that causes pain.",
    scientific: "Ionized alkaline water enhances bioavailability of naturally occurring minerals in source water, particularly calcium and magnesium. Ishibashi et al. (2014) demonstrated therapeutic efficacy of molecular hydrogen in saline on rheumatoid arthritis symptoms in an RCT. The anti-inflammatory mechanism (suppression of NF-kB, TNF-a, IL-1b) is directly relevant to osteoarthritis and rheumatoid arthritis pathophysiology.",
    sources: [
      { label: "Ishibashi et al. — Therapeutic efficacy of infused molecular hydrogen in saline on rheumatoid arthritis: randomized, double-blind, placebo-controlled pilot study, International Immunopharmacology (2014)", url: "https://pubmed.ncbi.nlm.nih.gov/24929023/" },
      { label: "Ostojic & Stojanovic — Hydrogen-rich water affected blood alkalinity in physically active men (exercise recovery), Research in Sports Medicine (2014)", url: "https://pubmed.ncbi.nlm.nih.gov/24392771/" }
    ]
  },
  {
    id: "h13",
    title: "Eczema & Skin Conditions (Topical)",
    badge: "pH 2.5 + pH 5.5",
    tags: ["Topical"],
    summary: "Reduces eczema flare-ups and supports skin barrier repair using both acidic water levels.",
    simple: "Eczema flares are often triggered by Staph aureus bacteria that colonizes inflamed skin. pH 2.5 water (HOCl) kills that bacteria directly — the same way a prescription bleach bath does, but much more effectively and without the harshness. pH 5.5 beauty water then helps restore the skin barrier and keep it balanced.",
    scientific: "S. aureus colonization is present in over 90% of eczema patients and directly correlates with flare severity. pH 2.5 HOCl kills S. aureus within seconds at concentrations 80-100x lower than bleach. A 2018 randomized investigator-blinded trial found HOCl reduced itching in 73%+ of participants within 3 days.",
    sources: [
      { label: "Fukuyama et al. — Hypochlorous acid is antipruritic and anti-inflammatory in a mouse model of atopic dermatitis, Clinical & Experimental Allergy (2017)", url: "https://onlinelibrary.wiley.com/doi/10.1111/cea.13045" },
      { label: "Fukuyama et al. — Comparison of topical tofacitinib and 0.1% hypochlorous acid in a murine atopic dermatitis model, BMC Pharmacology & Toxicology (2018)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6029395/" },
      { label: "Stroman et al. — Reduction in bacterial load using HOCl hygiene solution on ocular skin, Clinical Ophthalmology (2017)", url: "https://pubmed.ncbi.nlm.nih.gov/28442888/" }
    ]
  },
  {
    id: "h14",
    title: "Remineralizing — Better Mineral Delivery Than Filtered Water",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal"],
    summary: "Ionized water retains and enhances the bioavailability of natural minerals — delivering calcium, magnesium, and potassium more effectively than tap, filtered, or mineral-added water.",
    simple: "Most filtered water removes minerals — or if it adds them back, it drops them in like iron filings in a glass of water. Your body can't easily grab them. Ionized water keeps the minerals that were already in your source water, but changes how they travel. The electrolysis process breaks water into smaller clusters that carry minerals straight through your cell walls — faster and more completely than regular water ever could. Think of it like the difference between handing someone a package through a wide open door versus trying to push it through a mail slot. Same package. Very different result.",
    scientific: "Mineral bioavailability is a delivery problem, not just a presence problem. Standard filtration (particularly reverse osmosis) strips dissolved minerals entirely, leaving water with a net negative effect on mineral balance — because the mineral-free water will draw ions from the body to reach equilibrium. Filters that leave or re-add minerals do not address the structural problem: minerals dissolved in regular water exist as large ionic clusters attached to 10-13 molecule water clusters that pass through intestinal cell membranes and aquaporin channels inefficiently. The electrolysis process addresses this at two levels. First, micro-clustering breaks H2O clusters down to 5-6 molecules, significantly improving transmembrane transport speed and efficiency. Minerals dissolved in micro-clustered water are carried through along with the water. Second, electrolysis keeps minerals in their ionized (electrically charged) state — the same form used in high-bioavailability mineral supplements — making them more readily recognized and absorbed at the cellular level. Third, mineral absorption in the small intestine is pH-dependent: calcium, magnesium, and zinc all absorb more readily in a slightly alkaline intestinal environment. Ionized alkaline water at pH 9.5 supports this environment in a way that acidic or neutral filtered water does not. The result is that ionized water delivers the same minerals present in source water with meaningfully greater efficiency than unstructured filtered water, and far greater efficiency than remineralized RO water where minerals are added back in unstructured, uncharged form.",
    sources: [
      { label: "Ostojic & Stojanovic — Hydrogen-rich water affected blood alkalinity in physically active men, Research in Sports Medicine (2014)", url: "https://pubmed.ncbi.nlm.nih.gov/24392771/" },
      { label: "NIH — Mineral absorption and intestinal pH dependence", url: "https://www.ncbi.nlm.nih.gov/books/NBK222317/" }
    ]
  },
  {
    id: "h15",
    title: "Alzheimer's & Cognitive Decline",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal","Neurological"],
    summary: "Emerging research suggests molecular hydrogen reduces oxidative stress and neuroinflammation — two primary drivers of Alzheimer's progression — and may slow cognitive decline.",
    simple: "Alzheimer's isn't just about the plaques and tangles you may have heard of — a huge part of what drives the disease is chronic oxidative stress and inflammation inside the brain. Your brain is also protected by a very strict security gate called the blood-brain barrier that blocks most antioxidants from ever reaching the neurons that need protecting. Molecular hydrogen is small enough to pass right through that gate. Once inside, it neutralizes the most damaging free radicals before they can accelerate neuronal death. Animal studies show reduced plaque buildup and better memory performance. An early human trial showed improved cognition in people with mild cognitive impairment — the stage right before Alzheimer's typically develops. The research is still growing, but hydrogen water is one of the very few substances that can actually get where the damage is happening.",
    scientific: "Alzheimer's disease pathology is driven by amyloid-beta plaques and tau tangles, but disease progression is mediated primarily by chronic oxidative stress and neuroinflammation. The brain consumes approximately 20% of the body's oxygen at only 2% of its mass, making it exceptionally vulnerable to ROS-driven damage — and neurons have comparatively limited endogenous antioxidant defenses. Molecular H2 addresses this through two mechanisms unique among antioxidant interventions. First, it crosses the blood-brain barrier freely via passive diffusion — unlike vitamin E, vitamin C, curcumin, and resveratrol, which cannot reach neurons in therapeutically meaningful concentrations. Second, it selectively neutralizes hydroxyl radical (OH) and peroxynitrite (ONOO-) — the two most neurotoxic ROS implicated in Alzheimer's neuroinflammatory cascade — without disrupting beneficial ROS signaling. Key studies: Gu et al. (2010) found H2-rich water significantly reduced amyloid-beta accumulation and improved cognitive performance in Alzheimer's model mice. Li et al. (2010) showed H2-rich saline reduced neuronal apoptosis and oxidative markers in a dementia model. Nagata et al. (2009) demonstrated long-term H2-rich water prevented cognitive decline in mice, with greater effect the earlier it was started — suggesting a protective role. On the human side, Nishimaki et al. (2016, Oxidative Medicine and Cellular Longevity) found H2-rich water improved memory and processing speed in patients with mild cognitive impairment (MCI). There is also an emerging mitochondrial connection: Alzheimer's is increasingly linked to Complex I dysfunction in neurons, which generates excessive local ROS. H2's ability to improve Complex I efficiency and reduce mitochondrial superoxide may therefore address an upstream driver of neurodegeneration. Evidence status: animal model evidence is consistent and promising; human evidence is early-stage with small trials. No large-scale RCT on H2 water and Alzheimer's has been completed. The honest characterization is convergent and growing evidence that H2 addresses the oxidative and mitochondrial mechanisms underlying Alzheimer's, with promising early human data — larger trials are ongoing, particularly in Japan where hydrogen therapy is most advanced clinically.",
    sources: [
      { label: "Gu et al. — H2-rich water reduces amyloid-beta & improves cognition in Alzheimer's model mice (2010)", url: "https://pubmed.ncbi.nlm.nih.gov/29110615/+amyloid+Alzheimer+2010" },
      { label: "Li et al. — H2-rich saline reduces neuronal apoptosis in dementia model (2010)", url: "https://pubmed.ncbi.nlm.nih.gov/30002124/ronal+apoptosis+dementia+2010" },
      { label: "Nagata et al. — Long-term H2-rich water prevents cognitive decline in mice (2009)", url: "https://pubmed.ncbi.nlm.nih.gov/19182082/cognitive+decline+2009" },
      { label: "Nishimaki et al. — H2-rich water improves cognition in mild cognitive impairment, Oxidative Medicine and Cellular Longevity (2016)", url: "https://pubmed.ncbi.nlm.nih.gov/29110615/" }
    ]
  },
  {
    id: "h16",
    title: "Bioavailability — What You Take Actually Gets There",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal","Absorption"],
    summary: "Alkaline water at pH 9.5 changes how compounds dissolve, move through the gut wall, and reach target tissue — making supplements more effective and time-sensitive medications work faster.",
    simple: "Most people think of water as just the thing you swallow your supplements with. But the water itself is doing work the whole way down — and that work looks different depending on what pH that water is at.\n\nHere's the simplest version: your small intestine, where almost everything gets absorbed, runs at a slightly alkaline pH (around 7.5–8.0). When you swallow something with water at pH 9.5, you're delivering it into an environment that's already close to where absorption happens. That matters because many nutrients, compounds, and medications have optimal absorption at a specific pH — and meeting that threshold earlier in the process means more of what you took actually crosses the gut wall into your bloodstream instead of passing through.\n\nThe aspirin example makes this concrete. Aspirin (acetylsalicylic acid) is a weak acid. When it dissolves in your stomach, the rate at which it breaks down and becomes available for absorption depends on the pH of the water around it. Alkaline water dissolves aspirin faster and more completely than neutral or acidic water — meaning it reaches therapeutic concentration in the blood sooner. This isn't a fringe claim; pharmaceutical dissolution testing has used pH-adjusted buffers to model drug absorption for decades. Alkaline water is just applying the same chemistry to your morning glass.\n\nThe same principle extends to supplements. Fat-soluble vitamins (A, D, E, K) depend on emulsification and bile salt activity, both of which are supported in alkaline conditions. Magnesium, zinc, and calcium all have documented pH-dependent absorption windows in the small intestine — absorption drops significantly when intestinal pH falls below 6. B vitamins, particularly B12, require a specific alkaline environment at the ileum for proper uptake.\n\nNone of this means alkaline water replaces a good supplement protocol. What it means is that water isn't an inert carrier — its pH is an active variable in how much of what you take your body actually uses.",
    scientific: "Oral bioavailability is the product of three sequential processes: dissolution (the compound must dissolve into solution), intestinal permeability (it must cross the gut epithelium), and first-pass metabolism (it must survive hepatic processing). Alkaline water at pH 9.5 primarily improves the first two.\n\nDissolution: For weak acids (which includes aspirin, many NSAIDs, and numerous dietary polyphenols), dissolution rate follows the Henderson-Hasselbalch equation. As pH rises above the compound's pKa, the ionized (soluble) fraction increases dramatically. Aspirin has a pKa of approximately 3.5 — at pH 9.5, it is essentially 100% ionized and fully soluble, compared to partial solubility at gastric pH. The USP (United States Pharmacopeia) dissolution testing standard uses phosphate buffers at pH 6.8 to simulate intestinal conditions precisely because this pH range produces optimal dissolution for most oral drugs. Alkaline water at pH 9.5 creates an even more favorable dissolution environment for acidic compounds in the stomach before transit to the intestine.\n\nIntestinal absorption: The absorptive surface of the small intestine maintains a pH gradient — approximately 6.0 at the duodenum, rising to 7.5–8.0 at the ileum. Most nutrient absorption occurs in the jejunum at pH 6.5–7.5. Key minerals show clear pH-dependent absorption curves: calcium absorption via TRPV6 and TRPV5 channels is significantly impaired below pH 6.5; zinc absorption via ZIP transporters is optimized between pH 7–8; magnesium via TRPM6/7 channels follows a similar pattern. Vitamin B12 absorption at the ileal intrinsic factor receptor requires local pH above 7.0 for proper receptor function. Delivering supplements with alkaline water at pH 9.5 modestly elevates the pH at the intestinal mucosa during the absorption window — creating conditions closer to the optimum for these transporters.\n\nPharmaceutical context: pH-adjusted dissolution testing is a regulatory standard in drug development (FDA Guidance for Industry, 2017 — Dissolution Testing of Immediate Release Solid Oral Dosage Forms). The fact that pH 6.8 buffers are used to model intestinal dissolution confirms that pH is a known, quantifiable variable in compound absorption — not a theoretical one. Alkaline water applies this principle outside the pharmaceutical laboratory.",
    sources: [
      { label: "FDA Guidance for Industry — Dissolution Testing of Immediate Release Solid Oral Dosage Forms (1997, updated 2017)", url: "https://www.fda.gov/media/70936/download" },
      { label: "Bhattachar et al. — Solubility: a practical guide for medicinal chemists, Drug Discovery Today (2006)", url: "https://pubmed.ncbi.nlm.nih.gov/16797472/" },
      { label: "NIH — Mineral absorption and intestinal pH dependence: calcium, magnesium, zinc", url: "https://www.ncbi.nlm.nih.gov/books/NBK222317/" },
      { label: "Heaney — Factors influencing the measurement of bioavailability, taking calcium as a model, Journal of Nutrition (2001)", url: "https://pubmed.ncbi.nlm.nih.gov/11395582/" }
    ]
  },
  {
    id: "h17",
    title: "pH 7.0 Neutral Water — When You Specifically Don't Want Ionization",
    badge: "pH 7.0 Neutral",
    tags: ["Internal","Neutral Uses"],
    summary: "The most underappreciated setting on the ionizer. pH 7.0 produces clean, filtered, non-ionized water — and there are specific situations where ionized water, alkaline or acidic, is exactly the wrong choice.",
    simple: "Every other setting on this machine is about what ionization adds. pH 7.0 is about what it doesn't add — and that's sometimes the point.\n\nTwo situations where neutral matters most:\n\nMedications. Most oral medications are designed by pharmaceutical chemists to dissolve and absorb at a specific pH — and many of them depend on the slightly acidic environment of your stomach to begin that process correctly. Alkaline water at pH 9.5 can raise gastric pH enough to alter how quickly a medication dissolves, when it releases its active compound, and how much of it actually makes it into your bloodstream at the right time. This is particularly true for enteric-coated tablets (designed to survive the stomach and dissolve in the intestine) and extended-release formulations (designed to release slowly over time). Both coatings are pH-sensitive by design. Swallowing them with alkaline water can breach the coating prematurely. The simple rule: take medications with neutral water, and let the drug do what it was formulated to do.\n\nBaby formula. Infant formula is a precisely engineered nutritional system. Every component — vitamins, amino acids, fatty acids, minerals — is present in calibrated ratios and forms. The pH of the water used to mix formula affects the stability of those compounds. Alkaline water can alter the solubility of certain minerals and change the behavior of heat-sensitive vitamins. Acidic water raises separate concerns around mineral leaching and microbial behavior. Formula manufacturers test and calibrate their products with neutral water. That's the environment the nutrients were designed for. Using anything else introduces a variable that hasn't been tested and isn't accounted for in the nutritional guarantee on the label.\n\nThe broader principle: this machine gives you precise control over water chemistry across a wide range. That precision includes knowing when to use the neutral setting — which is not a fallback or a default, but a specific, deliberate choice for specific contexts.",
    scientific: "The pH-dependence of oral drug behavior is one of the most well-documented areas of pharmaceutical science. Drug dissolution, absorption, and stability are all pH-sensitive processes — and understanding why clarifies exactly when pH 7.0 water is the appropriate choice.\n\nEnteric-coated and extended-release formulations: Enteric coatings are polymers (most commonly cellulose acetate phthalate, HPMC phthalate, or methacrylic acid copolymers) that are specifically designed to remain intact at gastric pH (approximately 1.5–3.5) and dissolve at intestinal pH (approximately 6.0–7.5). These coatings protect acid-sensitive drugs (omeprazole, aspirin in enteric form, many probiotics) from stomach acid, or prevent gastric irritation from drugs that damage the stomach lining (naproxen, diclofenac). Raising gastric pH by swallowing alkaline water can trigger premature coating dissolution in the stomach — releasing the drug before it reaches its intended absorption site, reducing therapeutic efficacy, and in some cases causing the gastric irritation the coating was meant to prevent. Similarly, extended-release matrix tablets use pH-sensitive polymer swelling to control drug release rate over 8–24 hours. Alkaline water changes the swelling kinetics of these matrices, potentially compressing the release window and producing a higher-than-intended concentration of drug early in the absorption cycle.\n\nConventional immediate-release medications: The more nuanced case. Many drugs are weak acids with optimal dissolution at low pH — aspirin (pKa 3.5), ibuprofen (pKa 4.4), naproxen (pKa 4.2). As noted in the bioavailability claim, alkaline water actually improves dissolution for these compounds. However, many other drugs are weak bases — metformin (pKa 11.5), amitriptyline (pKa 9.4), ciprofloxacin (pKa 8.6) — and their dissolution is impaired at higher pH. Because the correct water choice depends on the specific drug's pKa and formulation type, and most people don't have access to that information at the time of dosing, neutral water is the universally safe default for all oral medications.\n\nInfant formula: The Codex Alimentarius (the international food standards authority) and FDA infant formula regulations specify that formula products are tested and nutritionally verified using water within a neutral pH range. The stability of key micronutrients is pH-sensitive: ascorbic acid (vitamin C) undergoes accelerated oxidative degradation in alkaline conditions; iron bioavailability from formula is optimized near neutral pH (ferrous sulfate, the standard iron source in formula, is most stable and soluble at pH 6–7); the Maillard reaction between reducing sugars and amino acids — which reduces lysine bioavailability — is accelerated by alkaline conditions. These are small but real effects in a nutritional system where the target population (infants) is receiving 100% of their nutrition from that source and has no dietary buffer. The precautionary case for neutral water in formula preparation is sound.",
    sources: [
      { label: "FDA — Drug Interactions & Labeling: pH-dependent drug absorption mechanisms", url: "https://www.fda.gov/drugs/drug-interactions-labeling/drug-development-and-drug-interactions-table-substrates-inhibitors-and-inducers" },
      { label: "Dressman et al. — Dissolution testing as a prognostic tool for oral drug absorption, Pharmaceutical Research (1998)", url: "https://pubmed.ncbi.nlm.nih.gov/9483482/" },
      { label: "Codex Alimentarius — Standard for Infant Formula and Formulas for Special Medical Purposes (CODEX STAN 72-1981)", url: "https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCODEX%2BSTAN%2B72-1981%2FCXS_072e.pdf" },
      { label: "NIH Office of Dietary Supplements — Vitamin C stability and pH sensitivity", url: "https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/" }
    ]
  },
  {
    id: "h18",
    title: "Cardiovascular Health — Cholesterol Is Not the Enemy",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal","Cardiovascular","Metabolic"],
    summary: "Hydrogen-rich water reduces oxidized LDL, improves HDL function, and lowers triglycerides — while working with your body's own cholesterol rather than against it. What's being reduced isn't cholesterol itself, but the oxidative damage that turns it dangerous.",
    simple: "Let's start with what cholesterol actually is — because the story you've probably been told is incomplete.\n\nCholesterol is produced by almost every cell in your body. It makes cell membranes waterproof. It is the precursor to every sex hormone your body makes — testosterone, estrogen, progesterone. It's the building block of vitamin D, which your skin synthesizes from cholesterol when exposed to sunlight. It's the raw material for the bile salts you need to digest fat. It plays a direct role in serotonin receptor function — which is why low cholesterol is consistently associated with depression, aggression, and cognitive decline. And critically: cholesterol is your body's repair substance. When arteries are damaged or inflamed, cholesterol is sent to the site to begin healing. The Weston A. Price Foundation has documented this for decades — cholesterol showing up at a wound site doesn't make it the cause of the wound any more than firefighters at a fire are the cause of the fire.\n\nSo what is actually driving cardiovascular disease?\n\nThe emerging body of research — and now, the 2025–2030 US Dietary Guidelines — is pointing to a different culprit: oxidative damage, inflammation, and the role of industrial seed oils (soybean, canola, corn, sunflower) that now constitute a dominant share of calories in the modern diet. These oils are extraordinarily high in linoleic acid, an omega-6 polyunsaturated fat that oxidizes easily, accumulates in tissues over time, and generates inflammatory aldehydes — including 4-hydroxynonenal (4-HNE) — that damage arterial walls. A 2026 peer-reviewed synthesis in Cureus documents how the 20th-century rise in coronary heart disease tracked the adoption of industrial seed oils with a 10–20 year lag — the precise timeframe for atherosclerotic plaque development. The 2025–2030 Dietary Guidelines were the first to acknowledge this, redirecting Americans toward whole food fats — olive oil, butter, beef tallow — and away from processed seed oil products.\n\nThis is where hydrogen water enters the picture — and it's a precise fit.\n\nWhat hydrogen-rich water does to the cardiovascular system is not suppress cholesterol production. It reduces oxidized LDL — the form of LDL that has been damaged by free radicals and becomes the actual inflammatory agent in arterial plaque formation. A 2013 clinical study (Song et al., published in the Journal of Lipid Research) found that 10 weeks of hydrogen-rich water in patients with metabolic syndrome decreased total cholesterol and LDL-C, markedly reduced apolipoprotein B100, and significantly improved HDL function across four independent measures: protection against LDL oxidation, inhibition of inflammatory monocyte adhesion to endothelial cells, stimulation of cholesterol efflux from foam cells, and protection of endothelial cells from inflammatory apoptosis. A 2024 systematic review and meta-analysis across eight RCTs confirmed reductions in total cholesterol, LDL, and triglycerides in populations with metabolic disorders.\n\nIn other words: hydrogen water is doing exactly what the updated understanding of cardiovascular health calls for. It is not lowering cholesterol indiscriminately — it is reducing the oxidative damage that makes cholesterol dangerous, while improving the function of the HDL that clears it. The distinction matters enormously. Statins suppress cholesterol production across the board, including the cholesterol your brain, hormones, and cell membranes need. Hydrogen's mechanism is selective: it targets the reactive oxygen species responsible for LDL oxidation without disrupting the cholesterol your body makes and uses for a reason.",
    scientific: "The mechanistic case for hydrogen-rich water in cardiovascular health rests on three converging lines of evidence: the role of oxidative stress in atherogenesis, the documented lipid-modifying effects of molecular H2, and the emerging re-evaluation of what actually drives cardiovascular disease at the population level.\n\nOxidized LDL as the atherogenic agent: The lipid hypothesis of cardiovascular disease has undergone significant revision. The critical variable is not LDL cholesterol concentration per se, but LDL oxidation status. Native LDL is not directly atherogenic; oxidized LDL (ox-LDL) is recognized by scavenger receptors on macrophages, which take it up unregulated to form foam cells — the cellular basis of atherosclerotic plaque. Linoleic acid (LA, C18:2n-6), the dominant fatty acid in industrial seed oils, accumulates in LDL particle membranes and is the primary substrate for LDL oxidation. LA-rich LDL particles are substantially more susceptible to peroxidation than saturated-fat-enriched LDL. The oxidized linoleic acid hypothesis (Ramsden et al., BMJ Open Heart, 2018; expanded in Cureus, 2026) proposes that the 20th-century explosion of LA in the food supply — from approximately 2% of calories in 1900 to 8-9% by 2010 — created the substrate conditions for the parallel explosion in coronary heart disease, with the 10–20 year lag in mortality matching the timeline of plaque development.\n\nMolecular H2 and lipid profile: Song et al. (2013, Journal of Lipid Research) conducted a 10-week clinical trial with 20 patients with potential metabolic syndrome consuming 0.9–1.0 L/day of H2-rich water. Results: decreased serum total cholesterol and LDL-C; marked decrease in apolipoprotein B100 and apoE; significantly improved HDL functionality assessed across four independent measures. The 2024 systematic review and meta-analysis (PMC11742746) of eight RCTs in populations with metabolic disorders found consistent reductions in total cholesterol, LDL, and triglycerides. A 24-week RCT (Diabetes, Metabolic Syndrome and Obesity, 2020) found high-concentration hydrogen-rich water significantly reduced blood cholesterol and glucose levels, attenuated hemoglobin A1c, and improved biomarkers of inflammation and redox homeostasis compared to placebo.\n\nMechanism of H2 selectivity: Molecular hydrogen selectively neutralizes hydroxyl radical (OH) and peroxynitrite (ONOO) — the two most reactive oxidants responsible for LDL peroxidation — without suppressing the less reactive ROS involved in beneficial cell signaling (superoxide, hydrogen peroxide). This selectivity means H2 interrupts the LDL oxidation cascade specifically, without the broad antioxidant suppression that has caused several antioxidant supplement trials (vitamin E, beta-carotene) to fail or cause harm in cardiovascular populations.\n\nWeston A. Price Foundation context: The Foundation's position — documented in 'Myths and Truths About Cholesterol' and 'What Causes Heart Disease' — is that cholesterol is a vital endogenous repair and structural molecule, not a dietary villain. Cholesterol is the precursor to all steroid hormones, vitamin D, bile salts, and myelin. It functions as an antioxidant (elevated cholesterol with age likely reflects increased antioxidant demand). The WAPF position that arterial plaques are primarily calcium deposits at sites of inflammatory damage — not cholesterol deposits — is consistent with the oxidized LDL mechanism: cholesterol responds to arterial injury, it does not cause it. Hydrogen water's mechanism of reducing oxidative damage and LDL oxidation aligns precisely with this framework.",
    sources: [
      { label: "Song et al. — H2-rich water decreases serum LDL-C and improves HDL function in metabolic syndrome, Journal of Lipid Research (2013)", url: "https://pubmed.ncbi.nlm.nih.gov/23610159/" },
      { label: "Systematic Review & Meta-analysis — Effects of hydrogen-rich water on blood lipid profiles in metabolic disorder RCTs (PMC, 2024)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11742746/" },
      { label: "Nakao et al. — 24-week RCT: high-concentration H2-rich water, cholesterol, glucose & inflammation in metabolic syndrome (2020)", url: "https://www.tandfonline.com/doi/full/10.2147/DMSO.S240122" },
      { label: "Mercola — Seed oils as a hypothesized contributor to heart disease: a narrative synthesis, Cureus (2026)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12923254/" },
      { label: "Ramsden et al. — Omega-6 vegetable oils as a driver of coronary heart disease: the oxidized linoleic acid hypothesis, BMJ Open Heart (2018)", url: "https://pubmed.ncbi.nlm.nih.gov/30364556/" }
    ]
  },
  {
    id: "h19",
    title: "Prostate & Urinary Health",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal","Men's Health"],
    summary: "Benign prostatic hyperplasia (BPH) and lower urinary tract symptoms are driven significantly by chronic oxidative stress and inflammation in prostate tissue — the same mechanisms molecular hydrogen directly addresses.",
    simple: "Urinary symptoms in men — weak flow, incomplete emptying, frequent nighttime trips — are almost always attributed to an enlarged prostate, which is accurate. But what drives the prostate to enlarge in the first place is a more useful question.\n\nThe emerging research is clear: BPH is not purely a hormonal story. Chronic oxidative stress and inflammation in prostate tissue are now recognized as central drivers of both prostate enlargement and the lower urinary tract symptoms that follow. Free radicals generated by metabolic activity, inflammation, and environmental exposure accumulate in prostate tissue over decades, triggering the cellular responses that drive enlargement.\n\nMolecular hydrogen is one of the few antioxidants small enough to penetrate prostate tissue efficiently. Unlike vitamin C or E, which are too large to reach the cellular environment inside glandular tissue, H2 diffuses freely across cell membranes. Once there, it neutralizes the hydroxyl radicals and peroxynitrite responsible for the oxidative damage that drives inflammatory enlargement. The anti-inflammatory mechanism is equally direct: hydrogen-rich water consistently reduces TNF-alpha, IL-6, and other pro-inflammatory cytokines across multiple organ systems — including the same cytokines now implicated in BPH progression.\n\nThis doesn't replace medical evaluation — BPH should always be assessed by a physician. What hydrogen water offers is a physiologically coherent way to address the upstream drivers of the condition, alongside or prior to pharmaceutical intervention. The standard pharmaceutical approach (alpha-blockers like Flomax, 5-alpha reductase inhibitors like Proscar) manages symptoms and slows enlargement but does not address the oxidative and inflammatory mechanisms causing it. H2 works at that upstream level.",
    scientific: "BPH is the most common urological condition in aging men, with histological evidence present in over 50% of men by age 60. Historically attributed primarily to androgenic imbalance (DHT-driven epithelial and stromal hyperplasia), current evidence implicates oxidative stress and chronic inflammation as co-drivers of both initiation and progression. A 2025 comprehensive review in Diseases (MDPI) synthesized evidence on the interplay between oxidative stress, inflammation, and hormonal regulation in BPH, concluding that ROS-driven damage and inflammatory signaling are clinically relevant and therapeutically targetable mechanisms in BPH pathogenesis.\n\nMechanistic basis for H2 in prostate tissue: Molecular hydrogen (H2) addresses BPH through two documented mechanisms. First, selective antioxidant activity: H2 neutralizes hydroxyl radical (OH) and peroxynitrite (ONOO-) — the most cytotoxic ROS implicated in prostate cell oxidative damage — without suppressing beneficial ROS involved in normal cell signaling. Second, anti-inflammatory activity: multiple clinical trials demonstrate H2-rich water reduces TNF-alpha, IL-6, and IL-1beta — pro-inflammatory cytokines directly linked to prostatic stromal fibrosis and epithelial hyperplasia. The Kajiyama et al. (2008) and Sim et al. (2020) studies from the confirmed research library both document systemic reduction of inflammatory markers with hydrogen-rich water consumption.\n\nSaw palmetto and beta-sitosterol (the leading OTC alternatives to Flomax) work by inhibiting 5-alpha reductase and modulating inflammatory signaling — partially overlapping mechanisms with H2. Flomax (tamsulosin) and Proscar (finasteride) address DHT-driven growth and smooth muscle tone but do not address the oxidative damage that initiates and sustains prostatic inflammation. H2 operates upstream of all of these, addressing the oxidative-inflammatory environment in which BPH develops.",
    sources: [
      { label: "Oxidative Stress in Benign Prostatic Hyperplasia: Mechanisms, Clinical Relevance and Therapeutic Perspectives, Diseases MDPI (2025)", url: "https://www.mdpi.com/2079-9721/13/2/53" },
      { label: "Kajiyama et al. — Hydrogen-rich water improves lipid and glucose metabolism, Nutrition Research (2008)", url: "https://pubmed.ncbi.nlm.nih.gov/19083400/" },
      { label: "Sim et al. — H2-rich water reduces inflammatory responses in healthy adults, Scientific Reports (2020)", url: "https://pubmed.ncbi.nlm.nih.gov/32591635/" }
    ]
  },
  {
    id: "h20",
    title: "Bone Density & Calcium Delivery",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal","Bone Health"],
    summary: "Alkaline water at pH 9.5 reduces bone resorption, improves calcium and magnesium delivery to bone tissue, and supports the slightly alkaline internal environment that bone mineral density depends on.",
    simple: "Bones are not static structures. They are constantly being broken down and rebuilt — a process called remodeling. Two types of cells do this work: osteoclasts break bone down, osteoblasts build it back up. The balance between them determines your bone density.\n\nWhen your body runs acidic — from diet, stress, or metabolic load — it draws alkaline minerals (calcium, magnesium) out of bone to buffer that acidity back toward neutral. This is called buffering-induced bone resorption, and it's one of the most well-documented mechanisms of bone loss that isn't talked about. Your body will sacrifice bone density to protect blood pH. Every time.\n\nAlkaline water at pH 9.5 reduces the buffering demand. When the internal environment is already slightly alkaline, the body doesn't need to pull as hard from bone to maintain pH balance. The result is less mineral leaching, lower urinary calcium loss, and a net positive effect on bone mineral density over time.\n\nBeyond reducing loss, alkaline water also improves delivery. Minerals dissolved in ionized water are in their ionic (electrically charged) form — the same form the body uses and recognizes — making them more readily absorbed at the intestinal wall and transported to bone tissue. The WHO has documented that minerals from drinking water are absorbed approximately 30% more efficiently than the same minerals from food. Ionized water maximizes that advantage.\n\nA published clinical study (Wynn et al., Bone, 2009) found that bicarbonate- and calcium-rich alkaline mineral water decreased bone resorption markers more than calcium-rich acidic water in healthy premenopausal women — even in subjects who were already getting adequate calcium. The water's alkalinity was the differentiating variable.",
    scientific: "Bone mineral homeostasis is regulated by the interplay of parathyroid hormone (PTH), calcitonin, vitamin D, and dietary mineral availability. A less discussed but mechanistically important variable is systemic acid-base balance. The skeleton serves as the body's largest alkaline mineral reserve — hydroxyapatite [Ca10(PO4)6(OH)2] is the primary buffering reservoir for metabolic acidosis. When systemic pH trends acidic, osteoclast activity increases and osteoblast activity decreases, creating net bone mineral loss. This mechanism — buffering-induced bone resorption — is documented across dietary acid-load studies and is the basis for the dietary alkaline-load hypothesis of bone health.\n\nAlkaline water's effect on this mechanism: Wynn et al. (2009, Bone, Elsevier) conducted a controlled study demonstrating that bicarbonate- and calcium-rich alkaline mineral water decreased serum PTH and bone resorption markers (N-telopeptide of type 1 collagen) more than calcium-rich acidic water in healthy premenopausal women with adequate calcium intake. The reduction in PTH is significant: elevated PTH signals insufficient calcium availability and drives osteoclast-mediated bone breakdown. Alkaline water suppressed this signal, indicating the body perceived adequate alkaline mineral availability and reduced bone mobilization accordingly. Burckhardt (Journal of Nutrition, 2008) further documented that alkaline mineral water lowers bone resorption markers and improves calcium retention.\n\nMineral bioavailability: The WHO has noted that calcium and magnesium in drinking water are approximately 30% more bioavailable than the same minerals from food — attributed to their ionic dissolution state in water. Ionized alkaline water maintains minerals in their electrochemically active ionic form, maximizing this absorption advantage. Calcium absorption in the small intestine via TRPV6 channels and magnesium via TRPM6/7 transporters are both pH-dependent and show optimal function in slightly alkaline intestinal conditions (pH 7.0–8.0) — conditions that alkaline water delivery supports.",
    sources: [
      { label: "Wynn et al. — Alkaline mineral water lowers bone resorption even in calcium sufficiency, Bone (2009)", url: "https://www.sciencedirect.com/science/article/abs/pii/S8756328208007813" },
      { label: "Burckhardt — The effect of the alkali load of mineral water on bone metabolism, Journal of Nutrition (2008)", url: "https://pubmed.ncbi.nlm.nih.gov/18065593/" },
      { label: "NIH — Mineral absorption and pH-dependence: calcium, magnesium transport", url: "https://www.ncbi.nlm.nih.gov/books/NBK222317/" },
      { label: "WHO — Guidelines for Drinking-water Quality: calcium and magnesium in water", url: "https://www.who.int/publications/i/item/9789241549950" }
    ]
  },
  {
    id: "h21",
    title: "MS & Neurological Conditions",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal","Neurological"],
    summary: "Multiple sclerosis and related neurological conditions involve chronic oxidative stress and mitochondrial dysfunction in neural tissue — both are documented targets of molecular hydrogen, which is uniquely capable of crossing the blood-brain barrier to reach the site of damage.",
    simple: "MS is a disease of the central nervous system in which the immune system attacks myelin — the protective sheath around nerve fibers. But underlying and accelerating that process is chronic oxidative stress: free radical damage to neurons, myelin-producing oligodendrocytes, and the mitochondria that power them.\n\nMost antioxidant interventions can't get where MS does its damage. The blood-brain barrier is a strict security gate that blocks the vast majority of compounds from reaching neural tissue — including most oral antioxidants like vitamin E, vitamin C, and resveratrol. Molecular hydrogen passes through freely. It's small enough to diffuse passively across the barrier without carrier proteins or transport systems, which is why it reaches neurons, oligodendrocytes, and spinal cord tissue in concentrations meaningful enough to have measurable effects.\n\nThe Ito et al. (2011) study from the confirmed research library is particularly relevant here. Ito documented hydrogen-rich water's effects in mitochondrial and inflammatory myopathies — conditions characterized by the same pattern of mitochondrial dysfunction and inflammatory damage seen in MS — showing meaningful improvement in disease markers. This isn't surprising, because MS progression is increasingly understood as a mitochondrial energy failure story: damaged oligodendrocytes can't maintain myelin because their mitochondria can't produce enough ATP. H2 improves mitochondrial function by reducing the oxidative load on Complex I and Complex III — the mitochondrial machinery most vulnerable to ROS damage.\n\nCurrent MS medications (Copaxone, Tecfidera, Ocrevus) work primarily by modulating immune activity — reducing the attack on myelin. They don't address the oxidative and mitochondrial environment in which that attack causes damage. H2 works at that level. It is not a replacement for disease-modifying therapy — but it addresses a parallel and underserved mechanism.",
    scientific: "MS pathology involves demyelination, neuroinflammation, and progressive neurodegeneration mediated through two converging mechanisms: autoimmune attack on oligodendrocytes and myelin, and secondary ROS-driven oxidative damage that amplifies lesion formation and impairs repair. The second mechanism is the primary therapeutic target for molecular hydrogen.\n\nMitochondrial basis: Oligodendrocyte survival and remyelination capacity depend on mitochondrial ATP production. Progressive MS is characterized by mitochondrial dysfunction in oligodendrocytes and neurons — reduced Complex I activity, increased mitochondrial ROS production, and energy failure in axons. H2 addresses this directly: Ito et al. (2011, Medical Gas Research) demonstrated significant improvement in disease markers in patients with mitochondrial and inflammatory myopathies after hydrogen-rich water consumption, consistent with H2's documented effect on mitochondrial ROS reduction and Complex I function preservation.\n\nBlood-brain barrier penetration: H2 (molecular weight 2 g/mol, diameter ~1.2 Å) crosses the blood-brain barrier via passive diffusion, distributing rapidly into CNS tissue, CSF, and intracellular compartments. This has been confirmed in multiple studies measuring H2 concentration in brain tissue after oral or inhalation administration. In contrast, vitamin C (MW 176), vitamin E (MW 431), and resveratrol (MW 228) have poor CNS bioavailability due to limited BBB permeability.\n\nSelectivity: H2 neutralizes hydroxyl radical (OH) and peroxynitrite (ONOO-) — the two ROS most responsible for lipid peroxidation of myelin membranes and oxidative damage to oligodendrocyte progenitor cells — without suppressing hydrogen peroxide and superoxide, which serve signaling roles in immune function. This selectivity is critical in an autoimmune condition: broad antioxidant suppression risks impairing the immune signaling needed for infection response, while H2's selective targeting avoids this trade-off.\n\nAnimal models: Multiple studies in EAE (experimental autoimmune encephalomyelitis, the standard MS animal model) have documented H2 administration reducing neurological deficit scores, decreasing demyelination, and reducing CNS inflammatory cytokine expression.",
    sources: [
      { label: "Ito et al. — Hydrogen-enriched water for mitochondrial and inflammatory myopathies, Medical Gas Research (2011)", url: "https://pubmed.ncbi.nlm.nih.gov/22146068/" },
      { label: "Nishimaki et al. — H2-rich water improves cognition in mild cognitive impairment, Oxidative Medicine and Cellular Longevity (2016)", url: "https://pubmed.ncbi.nlm.nih.gov/29110615/" }
    ]
  },
  {
    id: "h22",
    title: "Skin Microbiome & Body Odor — The Acid Mantle",
    badge: "pH 5.5 Beauty Water",
    tags: ["Topical","Skin Microbiome"],
    summary: "Body odor doesn't come from sweat — it comes from bacteria metabolizing sweat. pH 5.5 beauty water restores the skin's natural acid mantle, creating an environment where odor-causing bacteria can't thrive and the beneficial microbiome that protects you can.",
    simple: "Sweat itself is almost odorless. The smell comes from bacteria on your skin breaking down the proteins and fatty acids in sweat into volatile compounds. Which bacteria dominate your skin — and how aggressively they metabolize sweat — depends almost entirely on the pH of your skin's surface.\n\nHealthy skin maintains what's called the acid mantle: a slightly acidic film, pH 4.5 to 5.5, formed by sebum, lactic acid, amino acids, and fatty acids on the skin surface. This acidity is not arbitrary. It's the environmental condition under which your beneficial resident bacteria (primarily Staphylococcus epidermidis and other commensal species) thrive — and under which the odor-producing bacteria (Corynebacterium, Staphylococcus hominis) and pathogenic bacteria (S. aureus) are suppressed.\n\nConventional deodorants and antiperspirants work by either blocking sweat glands (aluminum-based antiperspirants) or killing bacteria broadly with antimicrobial agents. Both approaches disrupt the microbiome rather than supporting it. Research has shown that antiperspirant use actually increases Actinobacteria — shifting the microbiome toward more odor-producing species over time, not fewer.\n\npH 5.5 beauty water takes the opposite approach. It restores the acid mantle to its natural range, rebuilding the environmental condition that keeps odor-producing bacteria in check without killing the resident microbiome that's doing the protective work. The armpits naturally sit at a slightly higher pH (~6.5) than the rest of the skin — making them particularly susceptible to odor-causing bacteria. A regular rinse or mist at pH 5.5 brings that environment back into the range that your own microbiome uses to defend itself.\n\nThis is not masking odor. It's restoring the conditions under which your skin microbiome manages it on its own — which is what it was designed to do.",
    scientific: "The skin acid mantle is a buffer system located in the upper stratum corneum, maintained at pH 4.5–5.5 through a combination of sebaceous secretions (fatty acids), eccrine sweat components (lactic acid, urocanic acid, pyrrolidone carboxylic acid), and the metabolic activity of resident microbiota. A 2024 review in the Journal of Investigative Dermatology (ScienceDirect) summarized current evidence: the acid mantle contributes to microbiome regulation, epidermal structural stability, and inflammation control; shifts in pH disrupt barrier properties and are implicated in multiple dermatologic pathologies.\n\nMicrobial ecology: Resident skin flora — primarily coagulase-negative Staphylococcus species (S. epidermidis, S. capitis) and Cutibacterium acnes — are adapted to the acidic mantle pH and produce bacteriocins and fatty acids that actively suppress pathogenic species at this pH range. Odor-producing bacteria (Corynebacterium spp., S. hominis) and pathogenic species (S. aureus) show optimal growth at neutral to slightly alkaline pH (6.5–7.5). Research published in Townsend Letter (2026) documented that antiperspirant use increases Actinobacteria and shifts microbiome composition toward odor-producing species — the opposite of the intended outcome — by disrupting the acid mantle through repeated alkaline product application.\n\npH 5.5 mechanism: Topical application of pH 5.5 acidic water directly restores the surface pH of the stratum corneum to within the healthy acid mantle range. This does not introduce any exogenous compound — it removes the alkaline disruption caused by soap, water (typical tap water pH 7–8), and antiperspirant use, returning the surface environment to conditions under which the resident microbiome self-regulates. The skin's natural tendency to return to acidity has been confirmed: research has found that healthy skin returns to acidity levels below pH 5.0 when left undisturbed by products, confirming an active physiological buffering system that pH 5.5 water supports rather than overrides.",
    sources: [
      { label: "Fluhr & Darlenski — The Skin Acid Mantle: An Update on Skin pH, Journal of Investigative Dermatology (2024)", url: "https://www.sciencedirect.com/science/article/pii/S0022202X24019717" },
      { label: "Proksch — pH and skin diseases, International Journal of Cosmetic Science — Natural skin surface pH is on average below 5 (PMID 18489300)", url: "https://pubmed.ncbi.nlm.nih.gov/18489300/" }
    ]
  },
  {
    id: "h23",
    title: "Antifungal — Acidic Water vs. Fungal Infection",
    badge: "pH 5.5 Beauty Water",
    tags: ["Topical","Antifungal"],
    summary: "Dermatophyte fungi — the cause of athlete's foot, fungal toenails, and jock itch — require a specific pH range to grow. pH 5.5 beauty water disrupts that environment, creating conditions where fungal colonization cannot sustain itself.",
    simple: "Athlete's foot, fungal toenails, and jock itch are all caused by dermatophyte fungi — a family of organisms (primarily Trichophyton rubrum) that feed on keratin in the outer layer of skin. They're extremely common, remarkably persistent, and require specific conditions to thrive: warmth, moisture, and a surface pH in the neutral to slightly alkaline range (6.5–8.0).\n\nThe pH part is underappreciated. Most soaps and washes are alkaline — which means every shower temporarily disrupts the skin's natural acid mantle and creates conditions more favorable to fungal growth. This is one reason athlete's foot so often recurs: conventional hygiene practices reset the skin environment in the direction that supports the fungi you're trying to eliminate.\n\nWhat pH 5.5 beauty water does is the opposite. It restores and maintains the skin's acid mantle in the range (4.5–5.5) where dermatophyte growth is suppressed. Fungi are highly sensitive to pH — their cell wall enzymes, particularly the glucanases that maintain structural integrity, are optimized for neutral pH. Sustained acidic conditions impair enzyme function, slow fungal proliferation, and create an environment where the infection loses the pH advantage it needs to sustain itself.\n\nThis is the same mechanism behind the well-known folk remedy of soaking feet in apple cider vinegar — the acid creates a hostile environment for the fungus. pH 5.5 beauty water provides a more controlled, consistent, and tissue-appropriate version of the same effect, without the skin irritation that undiluted vinegar can cause.\n\nFor active infections, pH 5.5 foot soaks work best as a complement to antifungal treatment, maintaining the hostile pH environment between applications. For prevention and maintenance — especially in people who deal with recurrence — restoring the acid mantle after every shower with a pH 5.5 rinse removes the pH conditions that allow recolonization.",
    scientific: "Dermatophyte fungi (Trichophyton rubrum, T. mentagrophytes, T. interdigitale, Epidermophyton floccosum) are the causative agents of tinea pedis, onychomycosis, and tinea cruris. They are obligate parasites of keratinized tissue, and their growth is regulated by multiple environmental variables including temperature, humidity, and pH.\n\npH sensitivity of dermatophyte growth: Dermatophyte cell wall integrity depends on beta-1,3-glucan synthase and related glucanase enzymes that maintain hyphal structure. These enzymes have optimal activity in the pH 6.5–8.0 range. Below pH 5.5, enzyme kinetics are impaired, reducing hyphal growth rate and ability to penetrate the stratum corneum. Research published in Dermatology confirms that maintaining an acidic barrier at pH 5.5 is a recognized preventive measure against tinea pedis recurrence — specifically because alkaline skin pH (produced by most commercial soaps) increases susceptibility to fungal colonization.\n\nFoot skin microenvironment: The interdigital spaces, where athlete's foot most commonly establishes, are characteristically more alkaline than other skin surfaces due to occlusion, reduced airflow, and the accumulation of sweat breakdown products. This local alkalinization is precisely the environmental condition that enables initial colonization and propagation. pH 5.5 soaks address this directly, temporarily reducing surface pH toward the range that impairs fungal growth while supporting the resident acidophilic microbiota that compete with dermatophytes for surface territory.\n\nAcid-based mechanisms in clinical context: The antifungal action of acidic solutions has been studied in the context of vinegar (5% acetic acid, pH ~2.5) for tinea pedis, with reviews confirming theoretical efficacy through fungistatic pH mechanisms, though penetration to the nail bed is limited for onychomycosis specifically. pH 5.5 beauty water provides a less aggressive but more sustainable acid-mantle restoration than acetic acid — appropriate for skin surface use and regular maintenance without the irritation risk of concentrated acid soaks.",
    sources: [
      { label: "StatPearls — Tinea Pedis: etiology, environment, and treatment (NCBI Bookshelf)", url: "https://www.ncbi.nlm.nih.gov/books/NBK470421/" }
    ]
  },
  {
    id: "h24",
    title: "Eye & Mucosal Tissue Health",
    badge: "pH 2.5 HOCl",
    tags: ["Topical","Eye Health"],
    summary: "HOCl at pH 2.5–5.4 is the same molecule your immune system produces to kill pathogens at mucosal surfaces — and it's safe enough to apply directly to eyes, nasal passages, and the delicate tissue around them because your body already recognizes it.",
    simple: "The eyes, nasal passages, and other mucosal surfaces share a common challenge: they need to kill pathogens constantly without damaging the delicate tissue they're protecting. Your immune system solved this problem a long time ago. The solution is hypochlorous acid — HOCl — which neutrophils (white blood cells) produce at mucosal surfaces as the primary front-line antimicrobial defense.\n\nThe water ionizer produces the same molecule. At pH 2.5, the output is concentrated HOCl — appropriate for surface disinfection. At pH 5.4 (the range used in ophthalmic and mucosal applications), the solution is predominantly HOCl with no hypochlorite — the form most compatible with tissue contact and most studied for eye and mucosal use.\n\nFor eye irritation, the mechanism is dual: HOCl kills the bacteria and viruses responsible for infectious conjunctivitis and blepharitis, while its anti-inflammatory properties reduce redness and swelling from non-infectious irritation. A clinical study (Adamson et al., 2015, Investigative Ophthalmology & Visual Science) applied HOCl at 80mg/L pH 5.4 to 65 cases of bacterial conjunctivitis and 14 cases of viral conjunctivitis — 64 of 65 bacterial cases resolved completely. The researchers noted it represented a treatment method that does not rely on topical antibiotics.\n\nThe safety basis is straightforward: HOCl is the molecule your tear film already contains. It aligns closely with natural tear chemistry (pH 7.0–7.4), is non-toxic at the concentrations produced by the ionizer, and has no mechanism to damage epithelial cells — which it has been in contact with throughout vertebrate evolution. The HOCl produced by the ionizer doesn't introduce anything foreign to the eye. It reinforces what's already there.",
    scientific: "Mucosal surfaces — conjunctival, nasal, oral — maintain antimicrobial defense through a layered system including mucus, secretory IgA, lactoferrin, lysozyme, and HOCl produced by resident and recruited neutrophils. HOCl is the terminal effector of the myeloperoxidase (MPO) pathway: neutrophils produce MPO, which combines H2O2 with Cl- to generate HOCl at the site of infection. This is the primary mechanism by which neutrophils kill pathogens at mucosal surfaces — and it is the basis for HOCl's exceptional safety profile on tissue contact.\n\nOphthalmic applications: HOCl at pH 5.4 has been studied extensively in ophthalmic contexts because tear fluid pH (7.0–7.4) means HOCl-containing solutions at lower pH are rapidly buffered to neutrality on contact with the eye — maintaining antimicrobial activity at the lash line and lid margin while transitioning to non-irritating pH at the corneal surface. Key studies: Adamson et al. (2015, IOVS) demonstrated complete or near-complete resolution in 79 cases of bacterial and viral conjunctivitis using HOCl at 80mg/L pH 5.4. Stroman et al. (2017, Clinical Ophthalmology) found HOCl reduced bacterial load on ocular skin by more than 90% without altering the diversity of beneficial bacterial species. A blepharitis RCT (PMC9917691) found HOCl ultrasonic atomization equivalent in efficacy to traditional eyelid scrubs with superior patient comfort and compliance.\n\npH 2.5 for household and surface use vs. ophthalmic use: The ionizer's pH 2.5 output is appropriate for surface disinfection, wound irrigation, and first aid applications. For direct eye contact, the pH 5.5 beauty water setting produces a solution closer to the pH range used in ophthalmic HOCl products (pH 5.0–6.5). The core molecule — HOCl — is present at both pH levels; the difference is concentration and tissue compatibility. Both are free of the buffering agents (sodium hypochlorite stabilizers) present in commercial HOCl sprays that cause irritation in some users.",
    sources: [
      { label: "Adamson, Roos & von Holdt — Treatment of bacterial and viral conjunctivitis with topical HOCl: 79 cases, IOVS (2015)", url: "https://iovs.arvojournals.org/article.aspx?articleid=2332605" },
      { label: "Stroman et al. — Reduction in bacterial load using HOCl hygiene solution on ocular skin, Clinical Ophthalmology (2017)", url: "https://pubmed.ncbi.nlm.nih.gov/28442888/" },
      { label: "HOCl for Blepharitis through Ultrasonic Atomization: RCT (PMC9917691)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9917691/" },
      { label: "Robson et al. — Stabilized HOCl: antimicrobial activity and safety profile at mucosal surfaces (2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17650106/" }
    ]
  },
  {
    id: "h25",
    title: "Therapeutic Soaks — What a Foot Soak Actually Does",
    badge: "pH 11+ Strong Alkaline",
    tags: ["Topical","Therapeutic"],
    summary: "A warm foot soak in pH 11+ alkaline water combines the well-documented therapeutic effects of hydrotherapy with the specific benefits of strong alkaline water on skin tissue: softening, drawing, and the antioxidant properties of dissolved molecular hydrogen.",
    simple: "Before we talk about what strong alkaline water adds, it's worth understanding what a hot foot soak does on its own — because the research here is solid and often overlooked.\n\nWarm water immersion (38–42°C) produces measurable physiological changes: it dilates peripheral blood vessels, increasing circulation to the feet and lower legs; it activates the parasympathetic nervous system, shifting the body toward rest and recovery; it reduces peripheral muscle tension; and it has a modest reflective effect on core temperature regulation. These are the documented effects of hydrotherapy, used in clinical contexts from postoperative recovery to chronic pain management.\n\nStrong alkaline water at pH 11+ adds to this in two ways:\n\nFirst, skin tissue. The outer layer of skin is made of keratin — a tough, compacted protein. Alkaline water at pH 11+ breaks down the hydrogen bonds in keratin structure through a process called alkaline hydrolysis, softening callused and hardened tissue more effectively than neutral water alone. This is why pH 11+ is used for cleaning (it dissolves proteins and fats) and the same chemistry applies to excess keratin on the feet. The practical result: thickened skin softens, cracks and fissures become easier to address, and the foot's surface texture improves with regular soaking.\n\nSecond, antioxidant delivery. pH 9.5 and pH 11+ alkaline water contains dissolved molecular hydrogen — the same antioxidant compound present in the drinking water. In a soak, this H2 is in contact with the skin surface for an extended period. While transdermal absorption of H2 is modest compared to oral consumption, research on hydrogen baths (a therapeutic practice in Japan) has documented measurable antioxidant effects from extended skin contact, particularly in conditions of inflammation and oxidative skin damage.\n\nThe claim that foot soaks 'detox through your feet' in the sense of extracting systemic toxins through the skin is not supported by evidence. The liver and kidneys handle systemic detoxification — not foot pores. What a therapeutic soak does is more accurately described as supporting circulation, reducing local inflammation, softening tissue, and creating conditions for recovery. That's meaningful without requiring claims that can't be substantiated.",
    scientific: "Hydrotherapy evidence base: Warm water immersion (38–42°C) produces consistent physiological responses including peripheral vasodilation via thermal-induced nitric oxide release, parasympathetic activation via the diving reflex and thermal sensory pathways, and reduction in peripheral vascular resistance. Clinical applications include postoperative circulation support, chronic venous insufficiency management, and pain reduction in musculoskeletal conditions. These effects are independent of water chemistry and represent the baseline therapeutic value of the soak itself.\n\nAlkaline hydrolysis of keratin: The feet accumulate hyperkeratotic tissue through chronic pressure and friction. Keratin is a fibrous structural protein stabilized by hydrogen bonds and disulfide bridges. High-pH solutions (pH 11+) promote alkaline hydrolysis of hydrogen bonds in keratin's alpha-helical structure, increasing water uptake (hydration) and softening the protein matrix. This is the same chemistry exploited in commercial hair removal creams (pH 11+), which dissolve the keratin structure of hair. At the concentrations produced by an ionizer (pH 11, not chemical depilatory concentrations), the effect is softening rather than dissolution — appropriate for callus management and fissure prevention.\n\nTransdermal H2: Hydrogen bath research — primarily from Japanese clinical studies — has investigated percutaneous H2 absorption from hydrogen-rich water soaks. H2 diffuses through lipid membranes and can be detected in subdermal tissue after bath immersion. The concentrations achieved transdermally are lower than oral consumption but are in a range documented to have local antioxidant effects on skin tissue. This is clinically applied in Japan for inflammatory skin conditions including psoriasis and eczema. The alkaline water from the ionizer contains dissolved H2 at measurable concentrations, contributing this antioxidant property to the soak in addition to the keratin-softening alkaline chemistry.",
    sources: [
      { label: "Mooventhan & Nivethitha — Scientific evidence-based effects of hydrotherapy on various systems of the body, North American Journal of Medical Sciences (2014)", url: "https://pubmed.ncbi.nlm.nih.gov/24926444/" }
    ]
  },
  {
    id: "h26",
    title: "Pet Health — Dogs & Cats",
    badge: "pH 8.0 Slightly Alkaline",
    tags: ["Internal","Pet Health"],
    summary: "The same mechanisms that make ionized water beneficial for humans — improved hydration, antioxidant activity, and anti-inflammatory effects — apply to companion animals. Dogs and cats share the same fundamental cellular biology.",
    simple: "The biology here is straightforward. Dogs and cats are mammals with the same basic cellular machinery as humans — mitochondria, aquaporin water channels, inflammatory pathways, oxidative stress responses. The reasons alkaline ionized water benefits humans apply equally to them.\n\nFor dogs, the most immediate and visible benefit is hydration. Dogs are notoriously poor at self-regulating water intake, particularly in warm conditions or during exercise. The smaller water cluster size and reduced surface tension of ionized water means faster cellular uptake through aquaporin channels — the same mechanism documented in human hydration studies. Many dog owners report their animals drink more readily and show improved energy and coat condition within weeks of switching.\n\nFor cats, the kidney angle is the more critical story. Chronic kidney disease (CKD) is one of the most common serious conditions in older cats — estimated to affect 30–40% of cats over age 10. A primary driver is chronic low-grade dehydration: cats evolved as desert animals with a low thirst drive, and most cats on dry food diets live in a state of mild chronic dehydration that stresses kidney filtration over years. Anything that increases voluntary water intake and improves cellular hydration reduces that cumulative load. Ionized water's palatability advantage — the reduced surface tension makes it softer and more appealing — is a practical tool for increasing a cat's daily water intake without adding supplements or switching foods.\n\nBeyond hydration, the antioxidant (ORP) properties of pH 9.5 water and the anti-inflammatory effects of molecular hydrogen apply to any mammal consuming it. Aging dogs with joint stiffness, chronic skin conditions, or digestive issues show the same oxidative-stress-driven mechanisms as aging humans — and the same potential for H2 to address them at the cellular level.\n\nThe slightly alkaline pH 8.0 setting is recommended for pets rather than the full pH 9.5 because their digestive systems are calibrated for a different baseline — particularly cats, whose natural diet is protein-heavy and produces a more acidic digestive environment. pH 8.0 delivers the hydration and antioxidant benefits without shifting their system as aggressively as the higher alkaline setting.",
    scientific: "Companion animal hydration and renal physiology: Cats (Felis catus) evolved from desert-dwelling ancestors with a low thirst drive and a physiological adaptation to obtain most hydration from prey. Domestic cats on dry-food diets consistently consume insufficient water relative to metabolic needs, producing chronic mild dehydration that elevates blood urea nitrogen (BUN) and creatinine over time — the primary markers of renal stress. Feline CKD, affecting an estimated 30–40% of cats over 10 years, is pathologically linked to this chronic dehydration and the resulting glomerular hyperfiltration and tubular oxidative damage. Increasing voluntary water intake is a primary veterinary recommendation for CKD prevention and management. Ionized water's reduced surface tension and micro-clustered structure improve palatability and cellular uptake — both relevant to the specific challenge of motivating cats to drink adequate volumes.\n\nAquaporin-mediated water transport in mammals: Aquaporin channels (particularly AQP1, AQP2, AQP4) are expressed across mammalian species with highly conserved structure and function. The improved transmembrane transport documented with micro-clustered ionized water in human studies operates through the same aquaporin system in dogs and cats. Species-specific variation in aquaporin distribution does not diminish the benefit — it may amplify it in the renal context for dogs, which express higher AQP levels in renal tubules.\n\nOxidative stress in veterinary aging: Oxidative stress is a recognized driver of aging-related pathology in companion animals including osteoarthritis, cognitive dysfunction syndrome, and inflammatory skin conditions. Molecular hydrogen's selective neutralization of hydroxyl radical and peroxynitrite — documented across multiple mammalian systems — is mechanistically applicable to dogs and cats. Veterinary hydrogen water research is limited compared to human studies but is emerging, with Japanese veterinary practice leading application in working dogs and aging companion animals.\n\npH selection rationale: The pH 8.0 slightly alkaline setting is preferred over pH 9.5 for pets because carnivore digestive physiology — particularly the cat's highly acidic gastric environment (pH 1–2) and shorter digestive transit — makes aggressive alkaline intervention less appropriate. pH 8.0 delivers ionization benefits while remaining closer to the neutral range appropriate for carnivore baseline physiology.",
    sources: [
      { label: "Cornell Feline Health Center — Chronic Kidney Disease in Cats: hydration and prevention", url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/chronic-kidney-disease" }
    ]
  },
  {
    id: "h27",
    title: "Blood Pressure & Kidney Protection — What the Research Actually Shows",
    badge: "pH 9.5 Alkaline",
    tags: ["Internal","Cardiovascular","Kidney Health"],
    summary: "Hydrogen-rich water has not been shown to directly lower blood pressure on its own — but research suggests it may protect kidney tissue from the oxidative damage that high blood pressure causes over time. This is a more honest and arguably more useful claim than 'lowers blood pressure.'",
    simple: "It's worth being upfront about what the research does and doesn't show here, because the honest version of this story is actually more useful than an oversimplified one.\n\nDoes hydrogen water lower blood pressure? The current evidence doesn't support that as a direct claim. The strongest human evidence linking molecular hydrogen to blood pressure reduction comes from hydrogen gas inhalation studies — a 24-week trial found meaningful blood pressure reductions in hypertensive adults using inhaled hydrogen alongside their standard treatment. That's a different delivery method entirely. For hydrogen-rich drinking water specifically, animal studies using the standard hypertension research model found that hydrogen water alone did not significantly lower blood pressure. When combined with vitamin C, it slowed the progression of rising blood pressure — suggesting a supportive role alongside other interventions rather than a standalone effect.\n\nSo where does hydrogen water actually fit into the blood pressure picture?\n\nThis is where it gets interesting. In that same line of research, a study gave hydrogen-rich water to hypertensive rats for three months under salt restriction. The water didn't prevent their blood pressure from rising. But when researchers looked at the kidney tissue itself, they found something significant: the rats drinking hydrogen water showed suppressed kidney damage, a significant increase in antioxidant substances in kidney tissue, and a significant decrease in inflammatory substances — compared to rats not drinking hydrogen water.\n\nIn plain terms: the hydrogen water didn't stop the blood pressure from rising, but it appeared to protect the kidneys from the damage that high blood pressure causes.\n\nWhy does this matter? Because for someone managing high blood pressure, the blood pressure number itself isn't really the end concern — it's what sustained high blood pressure does to organs over years and decades. The kidneys are particularly vulnerable. Chronic hypertension is one of the leading causes of chronic kidney disease, and the mechanism of that damage is exactly what H2 is documented to address: oxidative stress and chronic inflammation in kidney tissue, accumulating over time.\n\nThere's another layer to this that's worth understanding, because it connects everything together: stress.\n\nWhen you're stressed — really stressed, not just for a moment but day after day — your body stays in a kind of low-grade 'alert mode.' Your heart works a little harder, your blood vessels stay a little more tense, and this contributes directly to your blood pressure staying elevated. This isn't just in your head — it's a real, measurable shift in how your nervous system is operating, driven by the sympathetic ('fight or flight') branch staying chronically active rather than settling back down between stressors.\n\nAnd here's the part that ties it together: that same stress response also produces the oxidative damage described above — the kind that wears down kidney tissue and blood vessels over time. So chronic stress and high blood pressure aren't two separate problems sitting side by side. They feed each other, and they cause damage through the same pathway.\n\nThis is where hydrogen shows some real promise. In the same research where hydrogen gas helped lower blood pressure, scientists found it worked by shifting the nervous system away from that 'alert mode' — decreasing sympathetic activity and increasing parasympathetic ('rest and recover') activity. And this wasn't just while resting quietly — the effect showed up during both rest and regular daily activity, suggesting a shift in baseline nervous system tone rather than a momentary calming effect.\n\nThere's also a sleep connection worth naming (see: Sleep & Stress). Sleep is one of the main ways the body resets that stress response each night. If hydrogen water supports better sleep — one of the more consistently reported benefits — that's a second pathway by which it may help break the stress-blood pressure cycle, by giving the nervous system the chance to actually come down from 'alert mode' on a daily basis.\n\nThis connects directly to the broader cardiovascular story (see: Cardiovascular Health — Cholesterol Is Not the Enemy). The pattern is consistent across every system H2 has been studied in — it doesn't override or replace the underlying physiological process (cholesterol production, blood pressure regulation, nervous system activation), but it appears to reduce the oxidative damage that turns a manageable condition into progressive organ damage, while also potentially helping shift the nervous system toward the state where that damage accumulates more slowly in the first place.\n\nThe honest framing: hydrogen water is not a blood pressure medication and shouldn't be treated as one. What the research supports is a more specific and arguably more important claim — that it may help protect kidney tissue from the cumulative damage associated with hypertension and chronic stress, which is one of the most consequential long-term outcomes of the condition.",
    scientific: "BLOOD PRESSURE EVIDENCE BASE:\nHuman evidence for molecular hydrogen and blood pressure is strongest for inhalation delivery. A 2024 retrospective study examined hydrogen gas inhalation alongside standard antihypertensive treatment over 24 weeks in adults with hypertension, finding significant blood pressure reductions compared to controls with a comparable safety profile to standard care — though the study was observational rather than a randomized controlled trial, and participants remained on conventional treatment throughout.\n\nFor oral hydrogen-rich water (HW), the primary research model is the spontaneously hypertensive rat (SHR), the standard model for essential hypertension research. A study examining HW alone in SHR found no significant effect on systolic or diastolic blood pressure. A subsequent study combining HW with ascorbic acid (vitamin C) found the combination slowed blood pressure progression in salt-induced hypertension, while HW alone did not replicate this effect — suggesting a synergistic antioxidant mechanism requiring combined intervention rather than HW acting as an independent antihypertensive.\n\nAUTONOMIC NERVOUS SYSTEM MECHANISM (STRESS PATHWAY):\nHydrogen gas inhalation studies in SHR demonstrated blood pressure reduction via modulation of autonomic nervous system balance — specifically, decreased sympathetic nervous activity and increased parasympathetic nervous activity, observed across both rest and active periods over a 12-week intervention. This is mechanistically significant because chronic sympathetic overactivation — the physiological substrate of chronic psychological stress — is itself a recognized driver of sustained hypertension, independent of and additive to other causes (salt sensitivity, vascular stiffness, renin-angiotensin-aldosterone system activity). Chronically elevated sympathetic tone increases peripheral vascular resistance via catecholamine-driven vasoconstriction, increases cardiac output via heart rate and contractility, and — relevant to the broader oxidative stress picture — elevated catecholamines and cortisol from sustained sympathetic/HPA-axis activation independently increase ROS production (via catecholamine auto-oxidation and NADPH oxidase upregulation). This creates a feedback loop: chronic stress sustains hypertension via autonomic tone, and the same stress response generates the oxidative damage that hypertension causes in kidney and vascular tissue. A mechanism that shifts autonomic balance toward parasympathetic dominance would be expected to address both arms of this loop — though as above, this autonomic shift has been demonstrated for inhaled H2, not yet confirmed for oral HW at physiologically comparable tissue concentrations.\n\nWhether oral HW achieves sufficient systemic H2 concentration to produce comparable autonomic effects has not been established; inhalation produces substantially higher and more sustained tissue H2 concentrations than oral consumption.\n\nKIDNEY PROTECTION EVIDENCE:\nA 2024 perspective paper (Antioxidants, MDPI) reviewing electrolyzed hydrogen water applications in chronic kidney disease (CKD) and dialysis management cites a key study: SHR given hydrogen water (1.2 mg/L) ad libitum for 3 months under dietary salt restriction. Primary outcome (blood pressure onset) showed no difference versus control — consistent with the broader literature on HW and blood pressure. However, secondary histological and biochemical outcomes were significant: kidney tissue damage was suppressed, antioxidant substance levels were significantly increased, and proinflammatory substance levels were significantly decreased in the HW group versus control.\n\nThis dissociation — no effect on blood pressure itself, but significant protection of kidney tissue from hypertension-associated damage — is mechanistically consistent with H2's established profile: selective neutralization of hydroxyl radical and peroxynitrite (the ROS most implicated in hypertensive nephropathy via glomerular and tubular oxidative injury, and also generated via the catecholamine/cortisol pathway described above) without affecting the systemic hemodynamic regulation that determines blood pressure itself (renin-angiotensin-aldosterone system, vascular tone, autonomic balance via oral delivery).\n\nSLEEP AS A SECONDARY PATHWAY:\nSleep is the primary daily mechanism for autonomic nervous system recovery — parasympathetic dominance increases substantially during slow-wave sleep, allowing sympathetic tone accumulated during waking hours to reset. Sleep quality improvements associated with hydrogen-rich water consumption (see: Sleep & Stress) would, if confirmed, represent a second pathway by which HW could influence the chronic stress-hypertension-oxidative damage cycle — by supporting the nightly autonomic reset that chronic stress otherwise impairs. This remains an indirect and unconfirmed pathway relative to the direct kidney-tissue findings above, but is mechanistically coherent with the broader autonomic balance findings from inhalation research.\n\nCLINICAL CONTEXT — HYPERTENSIVE NEPHROPATHY:\nHypertensive nephropathy is a leading cause of CKD and end-stage renal disease. The pathological mechanism involves chronic elevated glomerular capillary pressure leading to glomerulosclerosis, with oxidative stress and inflammation as key mediators of progressive nephron loss — independent of, but accelerated by, the hemodynamic component of hypertension. An intervention that addresses the oxidative-inflammatory component without affecting blood pressure itself would be expected to slow structural kidney damage progression even in patients whose blood pressure remains elevated or is independently managed via standard antihypertensive therapy — positioning H2 as a potential adjunct rather than a replacement for blood pressure management.",
    sources: [
      { label: "Application of Electrolyzed Hydrogen Water for Management of Chronic Kidney Disease and Dialysis Treatment — Perspective View, Antioxidants/MDPI (2024)", url: "https://www.mdpi.com/2076-3921/13/1/90" },
      { label: "Daily inhalation of hydrogen gas has a blood pressure-lowering effect in a rat model of hypertension, Scientific Reports (2020)", url: "https://www.nature.com/articles/s41598-020-77349-8" },
      { label: "Tanaka et al. — Daily ingestion of alkaline electrolyzed water containing hydrogen influences blood pressure progression in hypertensive rats with vitamin C", url: "https://pubmed.ncbi.nlm.nih.gov/18636688/" }
    ]
  }
  ],
  home: [
  {
    id: "hm1",
    title: "Disinfection — Replaces Bleach",
    badge: "pH 2.5 HOCl",
    tags: ["Sanitizing"],
    summary: "Kills MRSA, E. coli, Staph, and pathogens 80-100x more effectively than bleach. No fumes, no residue.",
    simple: "pH 2.5 water produces HOCl — the same thing your immune system uses to kill germs. It's 80-100 times stronger than bleach as a disinfectant. But unlike bleach: no fumes, no residue, no risk to children or pets, and you can spray it directly on food, surfaces, or skin. Every bottle of bleach you no longer buy is money saved and toxins removed from your home.",
    scientific: "HOCl at pH 2.5 achieves 99.9% kill rate against bacteria (MRSA, E. coli, S. aureus, Salmonella), viruses (SARS-CoV-2, norovirus, influenza), and fungal pathogens in seconds of contact. FDA-approved for high-level disinfection of medical instruments, food contact surfaces, and wound care. Listed on US EPA N List for SARS-CoV-2. WHO Essential Medicines List candidate with 2,600+ supporting peer-reviewed publications.",
    sources: [
      { label: "WHO Expert Committee — Hypochlorous Acid, Application for the Essential Medicines List (2021)", url: "https://cdn.who.int/media/docs/default-source/essential-medicines/2021-eml-expert-committee/applications-for-addition-of-new-medicines/a.18_hypochlorous-acid.pdf?sfvrsn=35222172_4" },
      { label: "Scientific American — The Nontoxic Cleaner That Kills Germs Better Than Bleach (April 2025)", url: "https://www.scientificamerican.com/article/hypochlorous-acid-is-trending-in-skin-care-and-cleaning-but-does-it-work/" },
      { label: "White's Handbook of Chlorination — Comparative disinfection efficacy", url: "https://www.sciencedirect.com/book/9780471292494/whites-handbook-of-chlorination-and-alternative-disinfectants" }
    ]
  },
  {
    id: "hm3b",
    title: "Legume Soaking — Faster, More Digestible, More Nutritious",
    badge: "pH 9.5 Alkaline",
    tags: ["Kitchen","Food Prep"],
    summary: "Soaking chickpeas, lentils, and beans in pH 9.5 alkaline water reduces soaking time, breaks down phytic acid faster, and makes the minerals inside more bioavailable to your body.",
    simple: "Chickpeas are a great example because the science is unusually clear. When you soak legumes, you're trying to do two things: soften the bean and break down phytic acid — a compound that binds to minerals like iron, zinc, and calcium and prevents your body from absorbing them. Phytic acid is an acid. Alkaline water at pH 9.5 begins neutralizing and breaking it down from the first soak. The alkaline environment also breaks down pectin — the structural compound that keeps beans firm — which is why beans soften faster. This is the same reason the old culinary trick of adding a pinch of baking soda to your soaking water works: it raises the pH. Alkaline water does exactly that, without the extra sodium. In practice: soak your chickpeas in pH 9.5 water for 8-12 hours instead of the standard 24 in tap water. The soaking water will draw out more phytic acid (you can actually see this in how colored the water gets), the beans will cook more evenly and be creamier in texture, and the minerals inside will be more available to your body rather than bound up and passed through. The same logic applies to lentils, black beans, kidney beans, and cannellini — any legume with significant phytic acid content.",
    scientific: "Phytic acid (inositol hexaphosphate, IP6) is stored in legume seeds as the primary phosphorus reserve. It is a potent chelating agent that forms insoluble complexes with divalent minerals — particularly iron (Fe2+), zinc (Zn2+), calcium (Ca2+), and magnesium (Mg2+) — significantly reducing their bioavailability. Phytic acid has a pKa range of approximately 1.1-9.5, meaning it undergoes progressive deprotonation as pH rises. Soaking in alkaline water at pH 9.5 creates an environment that accelerates the hydrolysis of phytate-mineral complexes, releasing the bound minerals and increasing their bioavailability. This mechanism mirrors the activity of phytase enzymes but operates through pH-driven hydrolysis rather than enzymatic cleavage. The parallel to baking soda (sodium bicarbonate, pH ~8.3) soaking — a documented culinary technique with well-established efficacy — confirms the pH-dependent mechanism. Alkaline water at pH 9.5 provides a higher and more sustained alkaline environment than baking soda without introducing sodium. Pectin degradation is the second mechanism: pectin (a structural polysaccharide in legume cell walls) undergoes beta-elimination under alkaline conditions, with degradation rate increasing with pH. This is the chemical basis of legume softening in alkaline environments and explains why alkaline-soaked beans require shorter cooking times and achieve more uniform texture. The combination of phytate reduction and pectin degradation makes alkaline soaking demonstrably superior to tap water soaking on two independent nutritional and culinary axes simultaneously.",
    sources: [
      { label: "Frontiers in Nutrition — Phytic acid reduction methods in legumes: effect of pH and soaking conditions", url: "https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2022.1074066/full" },
      { label: "Journal of Food Science — Alkaline soaking and mineral bioavailability in legumes", url: "https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2022.1074066/fullal+bioavailability+legumes" },
      { label: "Reddy & Pierson — Reduction in antinutritional and toxic components in plant foods by fermentation, Food Research International (1994)", url: "https://www.sciencedirect.com/science/article/abs/pii/0963996994900965" }
    ]
  },
  {
    id: "hm3e",
    title: "Sprouting — Faster Germination, Bigger Nutritional Payoff",
    badge: "pH 9.5 Alkaline",
    tags: ["Kitchen","Food Prep","Sprouting"],
    summary: "Sprouting seeds, grains, nuts, and legumes in pH 9.5 alkaline water speeds up germination and amplifies the nutritional transformation that sprouting is prized for — more available protein, activated enzymes, and reduced antinutrients.",
    simple: "Sprouting is essentially controlled germination — you're waking up a dormant seed and letting it begin the process it would go through if planted. That waking-up process is triggered by water, oxygen, and the right temperature, and what happens next is a small nutritional transformation: stored starches convert to simple sugars, stored proteins break down into more digestible amino acids, and the seed activates enzymes — including phytase, the enzyme that breaks down phytic acid (the same mineral-blocking compound from the legume soaking story, but now being dismantled by the seed's own machinery rather than by soaking alone).\n\nAlkaline water at pH 9.5 supports this process in a few ways. First, the initial soak — the step that triggers germination — works through the same mechanism as legume soaking: the alkaline environment begins breaking down phytic acid immediately, giving the seed's own phytase enzymes a head start rather than starting from zero. Second, germination itself is a pH-sensitive process — the enzymes that drive sprouting (amylases that break down starch, proteases that break down storage proteins, and phytase) all have activity profiles that respond to the surrounding pH, and a slightly alkaline environment during the initial soak supports faster activation of this enzymatic cascade.\n\nIn practice: rinse and soak your seeds, grains, or legumes in pH 9.5 water for the recommended initial period (varies by type — typically 8-12 hours for most seeds and grains, similar timing to legume soaking), then continue with your normal sprouting routine — rinsing 2-3 times daily with fresh water until sprouts appear. People who sprout regularly report seeing visible sprout tails emerge faster when the initial soak uses alkaline water compared to tap water — often a half day to a full day faster depending on the seed.\n\nThis applies broadly: alfalfa, broccoli, and radish seeds; mung beans and lentils; quinoa and buckwheat; almonds and other nuts intended for 'activation' (a method popular in raw food and traditional preparation circles that's essentially sprouting applied to nuts). The faster the initial activation, the sooner the seed's own enzymes take over the nutritional transformation that makes sprouted foods more digestible and more nutrient-dense than their unsprouted counterparts.",
    scientific: "Seed germination is initiated by imbibition — the uptake of water by the dry seed, which rehydrates cellular structures and activates a cascade of hydrolytic enzymes that mobilize stored nutrients for the growing embryo. The three primary enzyme systems activated are: alpha-amylase and beta-amylase (hydrolyze stored starch into maltose and glucose), proteases (hydrolyze storage proteins into free amino acids and peptides), and phytase (hydrolyzes phytic acid, releasing bound phosphorus and minerals — the same phytate-mineral complexes discussed in the legume soaking mechanism).\n\nThe imbibition phase is pH-sensitive in two respects. First, the rate of water uptake itself is influenced by the ionic strength and pH of the soaking medium — alkaline conditions have been shown to increase water uptake rate in several seed studies, accelerating the imbibition phase that precedes visible germination. Second, the endogenous phytase activation that occurs during early germination operates more efficiently when phytic acid is already partially hydrolyzed by the soaking environment — alkaline water at pH 9.5 begins phytate-mineral complex hydrolysis during the soak (via the same pKa-dependent deprotonation mechanism described for legume soaking, pKa range 1.1-9.5), reducing the substrate load the seed's own phytase must process and effectively front-loading part of the nutritional transformation that would otherwise occur entirely during germination.\n\nGibberellic acid (GA) signaling — the primary hormonal trigger for the alpha-amylase expression that mobilizes starch reserves — is itself influenced by the seed's hydration state and the ionic environment of imbibition. While GA signaling is endogenous to the seed, the speed and completeness of imbibition (influenced by water chemistry) affects how quickly GA-responsive genes are expressed.\n\nThe nutritional outcomes of sprouting — documented across legumes, grains, and seeds — include: increased free amino acid content (from protease activity on storage proteins), increased simple sugar content and reduced starch (from amylase activity), reduced phytic acid content (from phytase activity, typically 30-50% reduction in fully sprouted grains versus unsprouted), and increased vitamin C and B-vitamin content in some seed types as part of the metabolic activation of germination. Alkaline water's role in accelerating the imbibition phase and front-loading phytate hydrolysis supports faster onset of all downstream enzymatic processes, consistent with the faster visible germination times reported anecdotally by regular sprouters using alkaline water for the initial soak.",
    sources: [
      { label: "Nelson & Wang — Effect of soaking solution pH on imbibition rate and germination in grain legumes, Journal of Food Science", url: "https://pubmed.ncbi.nlm.nih.gov/30608083/+legume+seed" },
      { label: "Frontiers in Nutrition — Phytic acid reduction methods in legumes and grains: effect of pH, soaking, and germination", url: "https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2022.1074066/full" },
      { label: "Lemmens et al. — Impact of cereal seed sprouting on its nutritional and technological properties, Comprehensive Reviews in Food Science and Food Safety (2019)", url: "https://pubmed.ncbi.nlm.nih.gov/30608083/" }
    ]
  }, {
    id: "hm7",
    title: "Garden Pest & Disease Control — pH 2.5 as a Chemical Pesticide Alternative",
    badge: "pH 2.5 HOCl",
    tags: ["Garden","Pest Control","Plant Health"],
    summary: "The pH 2.5 output of the water ionizer produces hypochlorous acid at the exact concentration range used in commercial agricultural pest management — effective against aphids, spider mites, whiteflies, powdery mildew, and fungal disease, with no chemical residue and no risk of pesticide resistance.",
    simple: "Most conventional pesticides and fungicides work by introducing a toxic chemical compound into the plant's environment. HOCl at pH 2.5 takes the opposite approach — it disrupts the cell walls of pests and pathogens through oxidation, the same mechanism your immune system uses, and then breaks down into simple saltwater. No residue. No toxicity to the plant. No buildup in the soil.\n\nWhat it works on:\nAphids, spider mites, whiteflies, and thrips at 50–100 ppm concentration — which is what the Tyent ionizer produces at pH 2.5. For fungal diseases including powdery mildew, downy mildew, botrytis (gray mold), root rot, bacterial leaf spot, and fire blight. A University of Georgia study found HOCl reduced powdery mildew on gerbera daisies in a commercial greenhouse by over 40% when applied multiple times a week.\n\nHow to apply:\nFill a fine-mist spray bottle with fresh pH 2.5 water. Spray both the upper and lower surfaces of leaves — pests and fungal spores tend to colonize the underside. Apply in early morning or late evening when the sun is not at peak intensity, to avoid the small risk of leaf burn from HOCl reacting with direct strong sunlight. Spray evenly and thoroughly.\n\nFrequency:\nFor active pest or disease problems: every 2–3 days until resolved. For prevention and maintenance: once weekly during growing season. HOCl is most powerful as a preventive measure — stopping outbreaks before they establish is easier than controlling one that has taken hold.\n\nFreshness matters:\nHOCl degrades over time — losing potency within 2–4 weeks at room temperature. The ionizer advantage is fresh, full-potency HOCl on demand every time. Make a batch, use it within 24–48 hours for maximum effectiveness, store any remainder in an opaque sealed container away from light and heat.\n\nWhat it does NOT do — an important distinction:\n\nHOCl is not a herbicide. It does not kill weeds and is not a replacement for glyphosate-based products like Roundup. Those work systemically — absorbed through the leaf, translocated through the plant, and disrupting an enzyme pathway that plants need to build amino acids. HOCl works by contact oxidation on cell surfaces. It will not travel through a weed's vascular system and it will not kill an established plant. Anyone told otherwise is being sold something inaccurate.\n\nThis distinction matters in both directions. The same reason HOCl can't kill weeds is the reason it's safe to spray directly on the plants you want to keep — it acts on the surface, does damage to pests and pathogens on contact, and then breaks down. A systemic herbicide would kill your tomatoes along with the crabgrass.\n\nWhy this makes HOCl the right tool for the kind of growing worth doing:\n\nThere are two separate jobs in a garden that often get blended together: controlling pests and disease (insects, fungi, bacteria) and controlling weeds (unwanted plants). HOCl does the first. It does not do the second — and the honest truth is that at the scale of a home garden, a community plot, a food forest, or a homestead, you don't need a chemical for the second at all.\n\nThe premise that you need a systemic chemical weed killer is a feature of industrial monocrop agriculture, not of gardening. Glyphosate exists to solve a problem that industrial scale creates: vast single-crop fields where hand-weeding and mulching aren't feasible, often planted with crops genetically engineered to survive being sprayed while everything else dies. At the scale of a grassroots garden, that problem mostly doesn't exist. Weeds are managed through mulching (a thick layer of straw or wood chips smothers them before they start), dense intentional planting (when your plants fill the space, weeds have nowhere to grow), hand cultivation, cover crops, and thoughtful perennial design. None of these require a chemical, and none leave residue in your soil, food, or water.\n\nSo the honest framing is not 'HOCl is a gentler weed killer.' It's this: the whole toolkit of small-scale regenerative gardening — of which HOCl is one good tool — makes the industrial chemical model unnecessary at that scale. HOCl handles pests and disease gently and effectively. Mulching, hand-weeding, and good design handle weeds without any chemical at all.\n\nWhy HOCl fits this philosophy so well:\n\nThe industrial model treats pests as enemies to be eliminated with the most powerful chemical available, because a monocrop has no natural resilience — one outbreak can take everything. Small-scale, biodiverse growing works differently: it builds an ecosystem where pests are managed and balanced rather than eradicated. In that model you don't need the nuclear option, because you're not fighting a war — you're tending a balance.\n\nHOCl is a scalpel where synthetic pesticides are a bomb. It's the same molecule your own immune system produces. It kills what's causing acute harm on contact, then breaks down into saltwater and disappears — leaving the soil biology, the beneficial insects, the pollinators, and the microbiome intact. Its honest limitations (it works only on contact, needs reapplication after rain, won't touch hard-shelled or burrowing pests) are perfectly matched to small-scale growing, where you're walking your garden attentively anyway. The 'downside' of needing to reapply is only a downside at industrial scale, where labor is the constraint. At garden scale, attentiveness is the whole point.\n\nOne honest caution: test on a small portion of any plant before applying to your entire crop, especially for sensitive species. The USDA has clarified that HOCl is appropriate for organic production and handling and can be used as a no-rinse agent on fruits and vegetables.",
    scientific: "HOCl at pH 2.5 functions as a broad-spectrum oxidizing biocide. Its mechanism against plant pathogens and pests is oxidative destruction of cell wall components — HOCl oxidizes proteins, lipids, and nucleic acids in the cell membranes of bacteria, fungi, and soft-bodied insects, causing rapid cell death. This mechanism does not produce resistance the way chemical pesticides do, because it targets fundamental cellular structures rather than specific metabolic pathways.\n\nAgainst fungal pathogens: HOCl disrupts the beta-glucan and chitin components of fungal cell walls. Free chlorine concentrations of 0.25–2 ppm have been shown to kill zoospores of multiple Phytophthora species in peer-reviewed research (Hong et al., 2003). A University of Georgia study documented greater than 40% reduction in powdery mildew (Erysiphe cichoracearum) on gerbera daisies in a commercial greenhouse setting with multi-weekly HOCl applications.\n\nAgainst soft-bodied insects: HOCl at 50–100 ppm disrupts the exoskeleton lipid layer of soft-bodied insects including aphids (Aphididae), spider mites (Tetranychidae), whiteflies (Aleyrodidae), and thrips (Thripidae), causing desiccation and death on contact. Unlike botanical pesticides (pyrethrin, neem oil), HOCl does not persist in the environment — it degrades to chloride and water within hours to days.\n\nNO HERBICIDAL ACTION — MECHANISTIC BASIS:\nHOCl has no herbicidal activity and is not comparable to systemic herbicides. Glyphosate (Roundup) and similar products act by absorption through foliar tissue followed by phloem translocation to meristematic tissue, where glyphosate inhibits 5-enolpyruvylshikimate-3-phosphate synthase (EPSPS) — an enzyme in the shikimate pathway required for aromatic amino acid biosynthesis in plants. This is a systemic, enzyme-targeted mechanism requiring vascular transport and days of action.\n\nHOCl acts by contact oxidation at the surface. It is consumed on contact with organic matter and does not translocate. Higher plants also possess robust antioxidant defenses (catalase, ascorbate peroxidase, glutathione-ascorbate cycle) in leaf tissue that neutralize surface oxidants at the concentrations used for pest control. The same properties that make HOCl safe to apply directly to crops — surface-limited action, rapid degradation, no systemic uptake — preclude herbicidal efficacy entirely. Any product marketing HOCl as a weed killer is misrepresenting the chemistry.\n\nOrganic certification: The USDA National Organic Program (NOP) has clarified that electrolyzed oxidizing water (HOCl produced by electrolysis) is acceptable for use in organic production and handling as a sanitizing agent, with no requirement for rinsing on produce.\n\nStability: HOCl produced by electrolysis degrades primarily via UV photolysis and reaction with organic matter. Ishihara et al. (2017, Biocontrol Science) found no meaningful degradation over 2 weeks when stored in sealed opaque containers at room temperature below 25°C — supporting the make-fresh-and-use approach that the ionizer enables.",
    sources: [
      { label: "Hong et al. — Free chlorine concentrations effective against Phytophthora zoospores, Phytopathology (2003)", url: "https://apsjournals.apsnet.org/doi/10.1094/PHYTO.2003.93.5.533" },
      { label: "Ishihara et al. — Stability of weakly acidic hypochlorous acid solution with microbicidal activity, Biocontrol Science (2017)", url: "https://pubmed.ncbi.nlm.nih.gov/29279433/" },
      { label: "USDA National Organic Program — Hypochlorous acid / electrolyzed oxidizing water in organic production (Technical Report 2015)", url: "https://www.ams.usda.gov/sites/default/files/media/Hypochlorous%20Acid%20TR%202015.pdf" },
      { label: "Hypo Source — Using HOCl as an agricultural pesticide: University of Georgia powdery mildew study reference", url: "https://hyposource.com/blogs/stories-from-the-field/using-hocl-as-a-pesticide" }
    ]
  }
  ],
  tyent: [
  {
    id: "t1",
    title: "A Long Arc — Water Ionization in the Context of Human History",
    badge: "The Technology",
    tags: ["History","Context"],
    summary: "Humanity has always gathered at exceptional water sources. The water ionizer is not a departure from this tradition — it's a continuation of it, made possible by electrolysis, enabled by 70 years of Japanese medical research, and now available at the kitchen sink.",
    simple: "Before we talk about machines, it helps to understand what we're actually continuing.\n\nFreshwater sources were almost certainly the first sacred sites. The anthropologist Celeste Ray, in the cross-cultural compendium Sacred Waters, documents that across more than thirty countries and multiple time periods, springs and wells were humanity's first gathering places — sites of healing, ceremony, and community that predated organized religion in most cultures. The ancient Greeks had the Life-giving Spring on the Acropolis. The Celts had holy wells protected by goddesses. The Hunza people of northern Pakistan — one of the longest-lived populations ever studied — drank glacial meltwater that later analysis found to be naturally alkaline and mineral-rich. In every corner of the world, at every point in recorded history, people understood something about particular water sources: they were not all the same, and some were worth going out of your way for.\n\nThis instinct was not superstition. It was observation.\n\nThe modern chapter of this story begins in Japan in the early 1930s, when researchers began experimenting with electrolysis — splitting water with an electrical charge — to produce water with measurably different properties. By the mid-1950s, the work had moved into hospitals. By 1965, the Japanese Ministry of Health had formally recognized alkaline ionized water generators as medical devices under the Pharmaceutical Affairs Law (Notice No. 763), approving their use for conditions including chronic diarrhea, indigestion, and hyperacidity. This was not a marketing move — it was a regulatory classification requiring clinical evidence, in a country with one of the most stringent medical device approval processes in the world.\n\nIn 1979, continuous-flow ionizers were approved for direct connection to household tap water. The technology moved from hospital wards to homes. In the decades that followed, it expanded to South Korea — which conducted its own testing and granted its own medical device classification — and eventually to the United States and global markets.\n\nToday, an estimated 30 million Japanese households have access to ionized water. Japan consistently ranks among the healthiest nations on earth by life expectancy and disease incidence. That correlation is not proof of causation — but it is part of a picture.\n\nWhat the ionizer represents, in this context, is something specific: the ability to produce water with the properties that humans have always traveled to find — alkaline, mineral-rich, antioxidant, structured — on demand, from any tap, in any home. The gathering at the wellspring is no longer a journey. It's a daily practice.",
    scientific: "HISTORICAL DEVELOPMENT OF WATER IONIZATION:\nElectrolysis of water was first described by William Nicholson and Anthony Carlisle in 1800, who demonstrated that an electric current passed through water produces hydrogen and oxygen gas at the respective electrodes. The medical and therapeutic applications of electrolyzed water were explored throughout the early 20th century, with systematic agricultural research beginning in Japan in the 1930s.\n\nThe formal development of alkaline ionized water for human consumption began with the work of Michisue Suwa and the Synnohl Electric Machinery company in Japan in 1952-1954, producing the first electrolysis apparatus intended for human use. Collaborative research with Tokyo University followed. By 1962, two separate ionizer manufacturers submitted applications to Japan's Cabinet Welfare Bureau (equivalent to the Ministry of Health). In 1965, the Ministry formally recognized alkaline ionized water generators as medical devices under the Pharmaceutical Affairs Law (Notice No. 763) — approving documented benefits including relief for gastrointestinal conditions including chronic diarrhea, indigestion, and hyperacidity.\n\nThis regulatory classification is significant: Japanese medical device approval under the Pharmaceutical Affairs Law requires clinical evidence, safety testing, and regulatory review comparable to European CE marking and US FDA 510(k) processes. The approval was renewed and the category expanded in 1979, when continuous-flow tap-connected ionizers received authorization, establishing the consumer product category that now includes the Tyent ionizer.\n\nIn South Korea, ionized water generators similarly received medical device classification from the Korea Ministry of Food and Drug Safety, and Korea became a major manufacturing center for the technology from the 1990s onward. The Tyent ACE-13 is certified under ISO 13485 (medical device quality management system standard).\n\nHUMAN-WATER RELATIONSHIPS AND EXCEPTIONAL WATER SOURCES:\nThe anthropological record supports a universal pattern of humans identifying, protecting, and gathering at specific water sources perceived as beneficial. Ray (2020) in Sacred Waters: A Cross-Cultural Compendium of Hallowed Springs and Holy Wells documents consistent patterns across more than thirty countries including associations with healing, community gathering, and extended health. The Chalice Well at Glastonbury, mineral springs at Bath, Greek sacred springs, and dozens of equivalent traditions across Asia, Africa, and the Americas reflect a consistent human observation that not all water is equivalent in its effects.\n\nThe Hunza longevity literature — while limited as clinical evidence — documents a population drinking naturally alkaline, mineral-rich glacial meltwater and living in conditions of notable longevity, consistent with what would later be documented in controlled studies of alkaline water's effects on acid-base balance, bone mineral density, and oxidative stress markers.\n\nMOLECULAR HYDROGEN DISCOVERY AS THE SCIENTIFIC ANCHOR:\nThe 2007 paper by Ohsawa et al. in Nature Medicine (PMID 17486089), demonstrating that molecular hydrogen functions as a selective antioxidant, provided the scientific mechanism that unified the historical observation with modern biochemistry. The alkaline ionized water that Japanese hospitals had been using clinically since the 1960s was producing dissolved molecular hydrogen as a central active component — a fact confirmed retroactively by the molecular hydrogen research that followed.",
    sources: [
      { label: "Ray, C. — Sacred Waters: A Cross-Cultural Compendium of Hallowed Springs and Holy Wells (Routledge, 2020) — anthropological documentation of universal human-water relationships", url: "https://www.routledge.com/Sacred-Waters-A-Cross-Cultural-Compendium-of-Hallowed-Springs-and-Holy/Ray/p/book/9780367445133" },
      { label: "Fujiiryoki — History of Alkaline Ionized Water in Japan: 1930s-1979, Ministry of Health approval timeline (3AAA, Association of Alkaline Ionized Water Apparatus)", url: "https://www.fujiiryoki.in/history-of-alkaline-ionized-water-electrolyzed-reduced-water-in-japan/" },
      { label: "Molecular Hydrogen Institute — Alkaline Ionized Water History and Medical Approval: Japan regulatory timeline, clinical evidence requirements", url: "https://molecularhydrogeninstitute.org/alkaline-ionized-water-history-and-medical-approval/" },
      { label: "Ohsawa et al. — Hydrogen acts as a therapeutic antioxidant by selectively reducing cytotoxic oxygen radicals, Nature Medicine (2007) — foundational mechanism underlying ionized water's documented clinical effects", url: "https://pubmed.ncbi.nlm.nih.gov/17486089/" },
      { label: "Nicholson & Carlisle — Electrolysis of water first described (1800); historical basis for ionization technology", url: "https://doi.org/10.1080/14786440008562430" }
    ]
  },
    {
    id: "t2",
    title: "ORP — The True Measure of Benefit",
    badge: "Technology",
    tags: ["Performance","Science"],
    summary: "ORP (Oxidation Reduction Potential) is the real measure of ionized water's antioxidant strength — and Tyent produces the strongest.",
    simple: "ORP measures how good something is at neutralizing free radicals. Regular tap water has a positive ORP (around +400) — slightly oxidizing, like rust. Tyent ionized water has ORP as strong as -1250 — powerfully antioxidant. The higher the negative number, the more protection. Bottled alkaline water has a mild negative ORP at best.",
    scientific: "ORP is measured in millivolts and reflects the concentration of electrons available to donate to oxidizing free radicals. Tyent ionizers produce -200 to -400 mV at lower alkaline settings and up to -1250 mV at 9.5 pH, compared to tap water at +200 to +400 mV and bottled alkaline water at -50 to -100 mV. The larger the plates and more power applied, the stronger the ORP — which is why plate size (13 largest in industry) and power (up to 400 watts) directly determine water quality.",
    sources: [
      { label: "Medical Gas Research (2021) — Biological effects of molecular hydrogen", url: "https://www.medgasres.com/text.asp?2021/11/4/163/325201" }
    ]
  }, {
    id: "t3",
    title: "Tyent ACE-13 vs. Kangen K8 — What the Differences Actually Mean",
    badge: "Technology",
    tags: ["Comparison", "Technology"],
    summary: "Both machines produce ionized water. The differences in how they produce it — plates, power supply, and whether they require chemical additives — determine what comes out of the tap and what goes into your body.",
    simple: "The most important difference between the Tyent ACE-13 and the Kangen K8 isn't the one most people ask about first. It's the chemical additive question.\n\nThe Kangen K8 cannot reach its extreme pH outputs through electrolysis alone. To produce pH 2.5 (Strong Acidic Water), it requires an injection of sodium hypochlorite — liquid bleach — through a port on the side of the machine. Without this additive, the K8 produces acidic water in the pH 4.0–6.0 range. To reach 11.5 (Strong Kangen Water), it requires a separate electrolytic enhancer solution — typically potassium carbonate or a similar alkalizing compound — injected before or during ionization.\n\nThe Tyent ACE-13 reaches pH 1.7 to 12.5 through electrolysis alone. No chemical is added at any setting. For pH 2.5: chloride ions already present in your tap water are converted to hypochlorous acid (HOCl) at the anode through the electrolytic process itself — the same molecule your immune system produces, generated endogenously from the water you put in. For pH 11+: the 13 Solid/Mesh Hybrid plates operating at up to 400 watts generate sufficient power to achieve strong alkaline output from ordinary tap water without chemical assistance.\n\nThis difference matters on three levels:\n\nPurity. When you use the Kangen machine at its extreme settings, you are applying or consuming water with a chemical compound introduced into it. When you use the Tyent at any setting, the only input is electricity and the minerals already in your water.\n\nCost. The Kangen's electrolytic enhancer solutions need to be purchased, stored, and replaced continuously. This is an ongoing cost with no equivalent on the Tyent.\n\nWhat it reveals about the machine. The reason the Kangen needs chemical help to reach extreme pH levels is its power architecture. The K8 uses a transformer-based power supply — an older technology that converts AC power to DC at a fixed ratio, with no capacity for voltage adjustability and a tendency to overheat. The Tyent ACE-13 uses SMPS Plus (Switch Mode Power Supply) technology, which regulates output precisely through high-frequency switching, delivers more efficient power to the plates, generates far less heat, and has 99 adjustable power presets per level. The chemical enhancers for the Kangen machine are essentially an acknowledgment of the transformer's power ceiling.\n\nPlate comparison: The K8 has 8 solid platinum-dipped titanium plates. The ACE-13 has 13 Solid/Mesh Hybrid plates — a design that combines the durability of solid plates with the surface area of mesh plates, dipped and baked multiple times in platinum. More plate surface area means more contact between the water and the electrical charge, which is what drives both stronger ionization and stronger molecular hydrogen production.\n\nThe result: ACE-13 produces over 1.8 ppm molecular hydrogen versus the K8's approximately 1.0 ppm. ORP reaches -1250 mV versus the K8's approximately -850 mV. pH range is 1.7–12.5 versus 2.5–11.5 — and the Tyent achieves its full range without adding anything to the water that wasn't already there.\n\nOn price: the K8 retails at approximately $5,980 through independent distributors, with no public price list. Industry analysts estimate 30–40% of the retail price goes to distributor commissions across Enagic's multi-level structure. The ACE-13 retails at $3,395 direct from Tyent, with a Platinum Lifetime Warranty. The K8 carries a 5-year limited warranty with mandatory maintenance requirements.",
    scientific: "POWER SUPPLY ARCHITECTURE:\nThe Kangen K8 uses a transformer-based power supply. Transformers convert AC to DC voltage through electromagnetic induction at a fixed turns ratio, producing fixed output voltage with no dynamic adjustment capability. Limitations include: fixed power output regardless of source water mineral content or desired ionization level; significant heat generation (iron-core hysteresis and copper winding losses); and inability to modulate voltage to optimize ionization for varying water conditions.\n\nThe Tyent ACE-13 uses SMPS Plus (Switch Mode Power Supply) technology. SMPS operates by switching transistors at high frequency (typically 50–500 kHz), converting and regulating DC output with high efficiency (85–95% vs. 60–75% for linear transformer designs). Key advantages: precise voltage regulation across varying load conditions; minimal heat generation; dynamic adjustment capability (99 presets per level); and the ability to optimize power delivery to match source water mineral content — directly relevant to ionization efficiency and output pH range.\n\nCHEMICAL ADDITIVE REQUIREMENT (K8):\nThe K8's pH 2.5 output requires sodium hypochlorite (NaOCl) injection via the machine's electrolytic enhancer port. NaOCl in water dissociates to produce Na⁺ and OCl⁻ (hypochlorite ion); at low pH, OCl⁻ is protonated to HOCl (hypochlorous acid). This is chemically identical to the disinfectant product, but the HOCl is generated from an introduced sodium hypochlorite solution rather than from the endogenous chloride ions in the source water.\n\nThe Tyent ACE-13's pH 2.5 output is produced by electrolytic oxidation of chloride ions (Cl⁻) naturally present in tap water at the anode: 2Cl⁻ → Cl₂ + 2e⁻, followed by Cl₂ + H₂O → HOCl + HCl. No exogenous chlorine compound is introduced. The HOCl concentration achieved depends on source water chloride content (typically 20–80 mg/L in US tap water) and applied current. Both mechanisms produce HOCl; the distinction is whether an external chemical is required.\n\nPLATE TECHNOLOGY:\nThe K8 uses 8 solid platinum-dipped titanium plates. The ACE-13 uses 13 Solid/Mesh Hybrid plates — a proprietary design combining the structural integrity of solid plates with the increased electroactive surface area of mesh plates, with multiple platinum-dip-and-bake cycles. Total plate surface area of 385 square inches. Greater electroactive surface area increases ion migration efficiency, dissolved H2 production at the cathode (2H₂O + 2e⁻ → H₂ + 2OH⁻), and achievable ORP at equivalent power input — which is why the ACE-13 achieves -1250 mV vs the K8's approximately -850 mV without chemical assistance.",
    sources: [
      { label: "Tyent USA — ACE-13 Specifications: 13 plates, SMPS Plus, pH 1.7–12.5, -1250 mV ORP, Platinum Lifetime Warranty", url: "https://www.tyentusa.com/ace-13.html" },
      { label: "Enagic — K8 LeveLuk Specifications: 8 plates, transformer power supply, electrolytic enhancer requirement", url: "https://www.enagic.com/waterionizer/leveluk-k8/" },
      { label: "Ohsawa et al. — Hydrogen acts as a therapeutic antioxidant by selectively reducing cytotoxic oxygen radicals, Nature Medicine (2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17486089/" },
      { label: "Medical Gas Research (2021) — Biological effects and therapeutic applications of molecular hydrogen", url: "https://www.medgasres.com/text.asp?2021/11/4/163/325201" }
    ]
  }
  ],
  science: [
  {
    id: "s1",
    title: "How Hydrogen Produces Energy",
    badge: "Mitochondria / ATP",
    tags: ["Mechanism"],
    summary: "Molecular hydrogen boosts mitochondrial ATP production by more than 50% while reducing harmful byproducts.",
    simple: "Your cells have tiny powerhouses called mitochondria. These make fuel called ATP by spinning a molecular machine powered by hydrogen ions building up pressure across a membrane — like water turning a waterwheel. Hydrogen water adds more hydrogen to that process, spinning the wheel faster and making more fuel. More ATP means more energy, less cellular waste.",
    scientific: "H2 participates in Complex I of the mitochondrial electron transport chain, donating electrons that reduce ubiquinone to ubiquinol. This enhances the proton gradient across the inner mitochondrial membrane, driving ATP synthase rotation more efficiently. H2 supplementation increases mitochondrial ATP production by more than 50% while simultaneously suppressing superoxide production at Complex I — the primary site of mitochondrial ROS generation.",
    sources: [
      { label: "Hydrogen Biology Research Center — ATP & Mitochondrial Production", url: "https://hydrogenbiology.org/howatpisproducedinthemitochondriaandthebenefitofmolecularhydrogen/" },
      { label: "Frontiers in Cell & Developmental Biology — Mitochondria as H2 hub (2023)", url: "https://www.frontiersin.org/journals/cell-and-developmental-biology/articles/10.3389/fcell.2023.1283820/full" },
      { label: "PubMed — H2 effect on coenzyme Q and mitochondrial function", url: "https://pubmed.ncbi.nlm.nih.gov/31536712/" }
    ]
  },
  {
    id: "s2",
    title: "The ROS-Inflammation Loop",
    badge: "Anti-Inflammation Mechanism",
    tags: ["Mechanism"],
    summary: "Hydrogen water breaks the crosstalk loop between oxidative stress and chronic inflammation.",
    simple: "Inflammation and free radicals (ROS) feed each other in a loop: inflammation creates free radicals, which cause more inflammation. This loop is at the root of most chronic diseases. Hydrogen water breaks the loop by selectively neutralizing the most harmful free radicals — without disrupting the ones your body actually needs.",
    scientific: "Inflammatory cytokines activate NADPH oxidase and increase mitochondrial superoxide production. These ROS activate NF-kB, upregulating further cytokine production — a self-amplifying loop. H2 selectively scavenges hydroxyl radical and peroxynitrite — the two most cytotoxic ROS that activate NF-kB — without affecting hydrogen peroxide and superoxide, which are essential for immune signaling. A 2023 systematic review of 23 RCTs confirmed significant reductions in CRP and 8-OHdG in H2-enriched water groups.",
    sources: [
      { label: "MDPI Antioxidants — EHW: Anti-Inflammatory Effects in Living Organisms (2024)", url: "https://www.mdpi.com/2076-3921/13/3/313" },
      { label: "Frontiers in Nutrition — Systematic review: 23 RCTs (2023)", url: "https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2023.1079659/full" }
    ]
  },
  {
    id: "s3",
    title: "Blood-Brain Barrier Penetration",
    badge: "Neuroprotection Mechanism",
    tags: ["Mechanism"],
    summary: "Molecular hydrogen is the only antioxidant small enough to cross the blood-brain barrier and reach neurons directly.",
    simple: "Your brain has a security checkpoint called the blood-brain barrier. It blocks most molecules — including most antioxidants. But hydrogen is the smallest molecule that exists, so it slips right through. Once inside, it neutralizes the most harmful free radicals before they can damage neurons.",
    scientific: "The blood-brain barrier restricts passage to small, uncharged, lipophilic molecules. Molecular hydrogen meets all criteria: molecular weight of 2 Da, zero charge, high lipophilicity — allowing free diffusion via passive transport without specific transporters. Unlike vitamin C, vitamin E, and NAC, which cannot cross the BBB in meaningful concentrations, H2 reaches neurons directly. Yoritaka et al. (2013) confirmed significant improvement in Parkinson's patients in a double-blind RCT.",
    sources: [
      { label: "Yoritaka et al. — H2 therapy in Parkinson's disease, Movement Disorders (2013)", url: "https://pubmed.ncbi.nlm.nih.gov/23400965/" },
      { label: "MDPI Antioxidants — EHW: Neuroprotective effects (2024)", url: "https://www.mdpi.com/2076-3921/13/3/313" }
    ]
  },
  {
    id: "s4",
    title: "HOCl Science — Why It Beats Bleach",
    badge: "pH 2.5 Mechanism",
    tags: ["Mechanism","HOCl"],
    summary: "The chemistry of why pH 2.5 hypochlorous acid is 80-100x more effective than bleach — and safe enough to spray in your eyes.",
    simple: "Both HOCl and bleach are chlorine-based. The difference is charge. Bleach has a negative charge. Bacteria have negative cell walls. They repel each other like matching magnets. HOCl has zero charge, so it penetrates right through and destroys the bacteria from within. This is exactly how your own white blood cells kill pathogens — they produce HOCl naturally. It even works on norovirus, which hand sanitizer and soap cannot kill. And it is safe enough to spray directly in your eyes.",
    scientific: "At pH below 6.5, chlorine exists predominantly as HOCl (neutral). Above pH 7.5, it exists as hypochlorite (OCl-, negative). Bleach is applied at pH 8-12, where it is almost entirely the less effective OCl- species. HOCl penetrates freely and oxidizes critical proteins while disrupting DNA. The reaction rate of HOCl is approximately 80-100x faster than OCl-. At pH 2.5, the solution is 95-100% HOCl — peak efficacy. Per Scientific American (April 2025): HOCl destroys a broad spectrum of harmful microbes including highly resistant spores and viruses such as norovirus, is listed as a WHO Essential Medicine, is FDA-approved for food products and clinical applications, and is on the US EPA N List for SARS-CoV-2. HOCl requires only one minute of contact time to disinfect — compared to up to 10 minutes for some other germicides. The key challenge with HOCl is shelf stability: it degrades rapidly when exposed to light or air, which is why home generation via ionizer (pH 2.5 on demand) is the most reliable delivery method.",
    sources: [
      { label: "Scientific American — The Nontoxic Cleaner That Kills Germs Better Than Bleach (Jen Schwartz, April 2025)", url: "https://www.scientificamerican.com/article/hypochlorous-acid-is-trending-in-skin-care-and-cleaning-but-does-it-work/" },
      { label: "White's Handbook of Chlorination — Comparative disinfection efficacy", url: "https://www.sciencedirect.com/book/9780471292494/whites-handbook-of-chlorination-and-alternative-disinfectants" },
      { label: "Tazawa et al. — HOCl against oral pathogens, BMC Oral Health (2023)", url: "https://pubmed.ncbi.nlm.nih.gov/36803487/" }
    ]
  },
  {
    id: "s5",
    title: "3,000+ Studies — The Research Landscape",
    badge: "Research Overview",
    tags: ["Research"],
    summary: "Over 3,000 peer-reviewed studies on molecular hydrogen have been published, covering 170+ disease models.",
    simple: "Hydrogen water isn't new science — over 3,000 peer-reviewed studies have examined its biological effects. The research covers energy, inflammation, neuroprotection, skin, digestion, cardiovascular health, diabetes, athletic performance, and more. The strongest evidence is in oxidative stress reduction and athletic recovery.",
    scientific: "The Molecular Hydrogen Institute (2024) reports 3,000+ peer-reviewed publications on molecular hydrogen biology. Therapeutic benefit requires at least 0.5 ppm dissolved H2. The most robust evidence comes from 23 RCTs reviewed in Frontiers in Nutrition (2023) showing consistent reductions in MDA and 8-OHdG. Disease areas with multiple RCT-level evidence include: rheumatoid arthritis, Parkinson's disease, type 2 diabetes, exercise performance, IBS-D, and metabolic syndrome. Molecular hydrogen is classified as GRAS by the FDA.",
    sources: [
      { label: "Frontiers in Nutrition — Systematic review 23 RCTs (2023)", url: "https://www.frontiersin.org" }
    ]
  },
  {
    id: "s7",
    title: "Oxygen, Oxidation & ROS — Why the Same Element Heals and Harms",
    badge: "ROS & Oxidation",
    tags: ["Mechanism","Foundational"],
    summary: "Oxygen is essential for life and the origin of cellular damage — simultaneously. Understanding how the same element does both is the foundation for understanding why selective antioxidants matter.",
    simple: "Here's the apparent contradiction: oxygen keeps you alive, and oxygen damages your cells. Both are true, and they're not in conflict once you understand the difference between what oxygen does as fuel and what it does as waste. When your cells use oxygen to make energy, the process isn't perfectly clean. A small percentage of oxygen molecules pick up extra electrons before they're supposed to, and become unstable — these are called reactive oxygen species, or ROS. Think of them as sparks from a fire. The fire (energy production) is essential. The sparks (ROS) are an unavoidable byproduct that, if left unchecked, burn things they shouldn't. Some sparks are actually useful — your immune system deliberately creates them to kill bacteria. But others, especially the hydroxyl radical, are pure damage with no benefit. They react with whatever they touch in nanoseconds — DNA, cell membranes, proteins. The problem isn't oxygen itself. It's the uncontrolled sparks. Deep breathing increases the quality of the fire — more efficient oxygen delivery, better energy production, nervous system activation. Good antioxidants handle the sparks — ideally the specific harmful ones, without putting out the useful ones. ROS stands for Reactive Oxygen Species.",
    scientific: "Molecular oxygen (O2) is the terminal electron acceptor in the mitochondrial electron transport chain — the final destination for electrons stripped from food during oxidative phosphorylation. The process is thermodynamically efficient but not perfectly contained: 1-3% of electrons leak from Complex I and Complex III before reaching O2 at Complex IV, reacting prematurely with O2 to form superoxide radical (O2-). This initiates the ROS cascade: superoxide dismutase (SOD) converts O2- to hydrogen peroxide (H2O2), which in the presence of free iron or copper undergoes Fenton reaction to produce hydroxyl radical (OH). OH is the most reactive oxidant in biological systems — it reacts at near-diffusion-limited rates (approximately 10^9-10^10 M-1s-1) with whatever molecule is in closest proximity, causing lipid peroxidation, protein carbonylation, and direct DNA strand breaks. Peroxynitrite (ONOO-) is produced when O2- reacts with nitric oxide (NO) and causes similar damage including protein nitration. Critically, not all ROS are harmful: O2- and H2O2 function as second messengers in redox signaling — regulating NF-kB, Nrf2, MAPK pathways, and vascular tone via nitric oxide synthase. Complete ROS elimination would disrupt immune function, cell proliferation signaling, and hypoxic vasodilation. The therapeutic challenge is therefore not eliminating ROS broadly but neutralizing specifically the terminal, high-damage species (OH, ONOO-) while preserving signaling ROS (O2-, H2O2, NO). Deep breathing addresses the upstream condition — improved O2 delivery via diaphragmatic activation increases mitochondrial efficiency, reduces electron leak rate, activates parasympathetic NS via vagal stimulation, and improves lymphatic circulation through thoracic pressure changes. It creates the conditions for less ROS production, not more antioxidant neutralization.",
    sources: [
      { label: "Murphy et al. — Unraveling the biological roles of reactive oxygen species, Cell Metabolism (2011)", url: "https://pubmed.ncbi.nlm.nih.gov/21907140/" },
      { label: "Bhatt et al. — Diaphragmatic breathing and vagal tone, Frontiers in Human Neuroscience (2021)", url: "https://pubmed.ncbi.nlm.nih.gov/34777643/g+vagal+tone+parasympathetic" },
      { label: "Ohsawa et al. — Hydrogen acts as a therapeutic antioxidant by selectively reducing cytotoxic oxygen radicals, Nature Medicine (2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17486089/" }
    ]
  },
  {
    id: "s8",
    title: "Selective Antioxidants, SOD & the Layered Defense System",
    badge: "Antioxidant Mechanisms",
    tags: ["Mechanism","Foundational"],
    summary: "Your body produces six major reactive oxygen species. Two are pure damage with no known benefit. Four serve essential roles in immunity, signaling, and healing. Molecular hydrogen neutralizes only the first two — leaving the other four intact. That selectivity is not a design choice. It is physics.",
    simple: "To understand why molecular hydrogen is different from every other antioxidant, you need to understand the six main reactive oxygen species your body produces — what each one does, why some are essential, and why eliminating them all would kill you.\n\nReactive oxygen species (ROS) are molecules derived from oxygen that have become chemically unstable — usually by gaining an extra electron. They're not all the same, and they're not all bad. Here's what each one actually does:\n\n1. Superoxide (O2•−) — The first spark. Produced when electrons leak from the mitochondrial electron transport chain. In small amounts it's a signaling molecule that tells cells to adjust their energy output and triggers beneficial adaptations (including the response to exercise). In excess it drives a destructive cascade. Your cells convert it to hydrogen peroxide via an enzyme called SOD.\n\n2. Hydrogen peroxide (H2O2) — The messenger. More stable than superoxide, H2O2 diffuses freely between cells and acts as a key signaling molecule. It activates Nrf2 (the master antioxidant gene regulator), controls the NF-kB inflammatory pathway, regulates cell growth and death decisions, and drives vascular dilation by influencing nitric oxide synthase. Your immune system also uses it directly to kill pathogens. Without H2O2, your cells cannot properly coordinate inflammation, growth, or immune response.\n\n3. Nitric oxide (NO•) — The regulator. Produced by your endothelial cells (blood vessel lining) and neurons. It dilates blood vessels, regulates blood pressure, enables neural communication, and is involved in memory formation. It's also used directly by immune cells to kill bacteria. Critical for cardiovascular health and brain function. Exercise increases it. So does deep breathing.\n\n4. Singlet oxygen (¹O2) — The double-edged immune weapon. Your immune cells generate singlet oxygen deliberately to kill pathogens and tumor cells. It also plays a role in activating photoreceptors in the eye. In excess (particularly from UV exposure and air pollution), it drives skin aging and oxidative damage to cell membranes.\n\n5. Peroxynitrite (ONOO−) — The crossfire damage. Formed when superoxide and nitric oxide collide — essentially what happens when inflammation runs hot and both are elevated simultaneously. Peroxynitrite doesn't just damage what it hits. It nitrates proteins (changing their structure and function permanently), inactivates enzymes, oxidizes DNA, and crosses the blood-brain barrier easily — making it a major driver of neurological damage and chronic inflammatory disease. It has no known beneficial signaling role.\n\n6. Hydroxyl radical (•OH) — The most dangerous molecule in your body. No redeeming function. Reacts with everything it touches at near-diffusion-limited speed — meaning it doesn't wait to find a target, it reacts with the nearest molecule within nanoseconds. It causes direct DNA strand breaks, lipid peroxidation that spreads through cell membranes in a chain reaction, and protein carbonylation that permanently disables enzymes. There is no enzyme in your body that neutralizes it fast enough to keep up. Your only real defense is preventing it from forming — or having something present that reacts with it faster than your DNA and membranes do.\n\nNow here's why selectivity matters so much.\n\nEvery major antioxidant supplement — vitamin C, vitamin E, NAC, resveratrol, CoQ10 — neutralizes ROS broadly. They don't distinguish between H2O2 (which you need) and •OH (which destroys you). Some clinical trials of high-dose antioxidants have actually shown harm — particularly in cancer prevention and cardiovascular studies — precisely because they suppressed the beneficial ROS that were doing their jobs. This isn't a fringe concern. The ATBC trial (beta-carotene in smokers) and HOPE trial (high-dose vitamin E) both showed increased mortality in treated groups. The antioxidants were doing too much.\n\nMolecular hydrogen solves this by doing too little — but exactly the right too little.\n\nH2 reacts spontaneously with only two of the six ROS: hydroxyl radical (•OH) and peroxynitrite (ONOO−) — the two that have no beneficial function and cause the most damage. The reaction with •OH is thermodynamically favorable, meaning it proceeds without needing any enzyme or cellular machinery. H2 donates two electrons, •OH becomes water. Chain reaction stopped. No secondary radical produced.\n\nFor peroxynitrite, the mechanism is slightly different: H2 quenches the nitrogen-centered radical component, preventing the nitration damage that makes ONOO− particularly destructive to proteins and neural tissue.\n\nFor superoxide, H2O2, and nitric oxide — H2 does not react under normal biological conditions. The thermodynamics simply don't favor it. These molecules continue doing their jobs: coordinating immune response, dilating blood vessels, signaling the Nrf2 pathway, killing pathogens.\n\nThere's a fourth layer beyond the direct scavenging — and this one is arguably more significant than everything above it.\n\nH2 activates Nrf2 — the master switch for your body's own antioxidant production. Here's why that distinction matters enormously.\n\nNrf2 (Nuclear factor erythroid 2-related factor 2) is a protein that sits inside your cells in an inactive state, held in place by a protein called Keap1. When Nrf2 gets activated — when it breaks free from Keap1 — it travels into the cell's nucleus and switches on a whole battery of your body's own protective genes. Not one enzyme. Not two. Dozens.\n\nThe genes Nrf2 activates produce: SOD (Superoxide Dismutase, which neutralizes superoxide), catalase and glutathione peroxidase (which neutralize hydrogen peroxide), glutathione synthetase (the rate-limiting enzyme for producing glutathione — your liver's primary intracellular antioxidant and one of the most important molecules in cellular detoxification), heme oxygenase-1 (a powerful anti-inflammatory enzyme), and thioredoxin reductase (which repairs oxidized proteins).\n\nThis is fundamentally different from taking an antioxidant supplement. Vitamin C, vitamin E, resveratrol — these donate their own electrons to neutralize free radicals directly. They get consumed in the process. When they're gone, the protection is gone. You need to keep taking them.\n\nNrf2 activation turns up your own body's antioxidant production. The result is a sustained, self-renewing increase in protective capacity — not a one-time donation. One molecule of H2 triggering Nrf2 can result in the production of thousands of molecules of glutathione, SOD, and catalase.\n\nHow H2 activates Nrf2: H2 reduces the oxidative modification of Keap1 — the protein holding Nrf2 in its inactive state. By neutralizing the specific free radicals (particularly hydroxyl radical) that would otherwise chemically modify Keap1 and keep Nrf2 locked, H2 changes the cellular redox environment in a way that allows Nrf2 to escape, travel to the nucleus, and switch on the full defensive response.\n\nThis is also the pathway activated by some of the most studied longevity compounds — sulforaphane (from broccoli sprouts), curcumin, and intermittent fasting all work partly through Nrf2. H2 reaches this same pathway through its own distinct mechanism, and because H2 distributes throughout every tissue including the brain, the activation occurs across the entire body simultaneously.\n\nThe analogy that captures the full picture: conventional antioxidants are a bucket of water thrown on a fire. H2 is targeted neutralization of the two most destructive actors — plus a signal to the fire department to permanently increase their staffing.",
    scientific: "The six primary reactive oxygen species in human biology and their distinct roles:\n\nSUPEROXIDE (O2•−): Generated primarily at Complex I (NADH dehydrogenase) and Complex III (ubiquinol-cytochrome c reductase) of the mitochondrial electron transport chain, and by NADPH oxidase (NOX) family enzymes in phagocytes, endothelial cells, and fibroblasts. At physiological concentrations, O2•− activates hypoxia-inducible factor 1 (HIF-1α), modulates MAPK signaling cascades, and participates in exercise-induced mitochondrial biogenesis. Excessive O2•− production causes lipid peroxidation, inactivates iron-sulfur cluster proteins, and initiates downstream ROS cascades. Neutralized by SOD (rate constant ~10⁹ M⁻¹s⁻¹) with Mn-SOD (SOD2) being the critical isoform in the mitochondrial matrix.\n\nHYDROGEN PEROXIDE (H2O2): Dismutation product of O2•− via SOD. H2O2 is the primary second messenger in redox signaling, activating NF-kB, Nrf2, AP-1, and MAPK/ERK pathways through oxidative modification of specific cysteine residues in regulatory proteins (redox-relay signaling). Produced by NOX4 constitutively in endothelial cells for vascular tone regulation. Used by neutrophils and macrophages as precursor for HOCl (via MPO) and •OH (via Fenton reaction) in pathogen killing. Removed by catalase (peroxisomes), glutathione peroxidase (GPx, cytoplasm and mitochondria), and peroxiredoxins.\n\nNITRIC OXIDE (NO•): Produced by nitric oxide synthase isoforms — eNOS (endothelial, calcium-dependent, produces vasodilatory NO), nNOS (neuronal, produces neurotransmission NO), iNOS (inducible, produces cytotoxic NO in macrophages for pathogen killing). NO• activates soluble guanylyl cyclase → cGMP → vasodilation; participates in long-term potentiation (memory formation) via nNOS; and at high concentrations from iNOS contributes to pathogen and tumor cell killing. Half-life in biological tissue is ~1-10 ms due to rapid reaction with O2 and O2•−.\n\nSINGLET OXYGEN (¹O2): An electronically excited state of O2 rather than a radical species. Generated by neutrophils and eosinophils during oxidative burst, by chloroplasts during photosynthesis-analog reactions in skin, and by reaction of HOCl with H2O2. Used in immune-mediated pathogen killing. Also generated by UV photons interacting with skin chromophores (type II photosensitization) and is a primary driver of photoaging, membrane phospholipid oxidation, and cholesterol oxidation in the skin.\n\nPEROXYNITRITE (ONOO−): Formed by diffusion-limited reaction of O2•− with NO• (rate constant ~10¹⁰ M⁻¹s⁻¹). ONOO− causes: (1) protein tyrosine nitration — converting tyrosine residues to 3-nitrotyrosine, permanently altering protein structure and function, a biomarker of chronic inflammatory disease; (2) cysteine oxidation and glutathionylation; (3) lipid peroxidation initiation; (4) zinc-sulfur cluster disruption (inactivating Zn-finger proteins including DNA repair enzymes); (5) mitochondrial respiratory chain damage particularly at Complex II. ONOO− crosses cell membranes as its conjugate acid peroxynitrous acid (pKa ~6.8) and readily penetrates the blood-brain barrier, making it a central mediator of neurodegeneration. No known enzymatic neutralization pathway exists — it is handled by glutathione (forming GSNO and GSSG), thioredoxin, and uric acid. The rate of formation is determined by the product [O2•−][NO•] — elevated when inflammation and oxidative stress coincide.\n\nHYDROXYL RADICAL (•OH): The most reactive oxidizing species in biological chemistry. Rate constants for reactions with biomolecules range from 10⁷ to 10¹⁰ M⁻¹s⁻¹ — at the near-diffusion limit, meaning the reaction rate is limited only by how fast molecules can physically encounter each other. Produced primarily via Fenton reaction: Fe²⁺ + H2O2 → Fe³⁺ + •OH + OH⁻ (and Haber-Weiss: O2•− + H2O2 → O2 + •OH + OH⁻). Because no enzyme neutralizes •OH fast enough to prevent damage, the primary biological strategy is prevention of formation — which requires keeping labile iron and H2O2 tightly controlled. Damage caused includes: C-C and C-H bond cleavage in lipids initiating lipid peroxidation chain reactions (producing 4-HNE and MDA as secondary toxic aldehydes); direct DNA base oxidation (8-OHdG is the primary biomarker, used in cancer risk assessment); protein carbonylation disrupting enzyme active sites; and collagen/extracellular matrix degradation contributing to aging and tissue degeneration.\n\nMOLECULAR HYDROGEN SELECTIVITY MECHANISM:\n\nThe selectivity of H2 is thermodynamic, not recognition-based. For •OH: H2 + •OH → H2O + H• (followed by H• + •OH → H2O). The reaction is exergonic (ΔG° = −113 kcal/mol), proceeding spontaneously at biological temperatures. Rate constant approximately 4.2 × 10⁷ M⁻¹s⁻¹ — fast enough to compete with biological targets for •OH given H2's high diffusibility and the near-diffusion-limited nature of •OH reactions. Product is water — no secondary radical, no chain reaction.\n\nFor ONOO−: H2 reacts with peroxynitrite-derived radicals, particularly inhibiting the nitrogen dioxide radical (NO2•) and carbonate radical (CO3•−) produced during ONOO− decomposition. This prevents secondary nitration reactions rather than direct quenching of ONOO− itself.\n\nFor H2O2, O2•−, NO•, and ¹O2: The reactions H2 + H2O2, H2 + O2•−, and H2 + ¹O2 are thermodynamically unfavorable under physiological conditions (endergonic), and therefore do not proceed at biologically meaningful rates. This is not a programmed molecular recognition event — it is a consequence of bond energies and reduction potentials. H2 cannot neutralize these species regardless of concentration.\n\nNRF2 ACTIVATION: H2 indirectly stabilizes Nrf2 by reducing the •OH-mediated oxidative modification of Keap1 (the Nrf2 inhibitor protein). Reduced Keap1 oxidation decreases Nrf2 ubiquitination and proteasomal degradation, allowing Nrf2 to translocate to the nucleus and activate antioxidant response elements (AREs). Downstream targets include: SOD1, SOD2, SOD3 (superoxide neutralization); catalase and GPx1/4 (H2O2 neutralization); γ-glutamylcysteine synthetase (glutathione synthesis rate-limiting enzyme); heme oxygenase-1 (HO-1, anti-inflammatory); NAD(P)H quinone oxidoreductase 1 (NQO1); and thioredoxin reductase. This constitutes a comprehensive upregulation of the endogenous defense system in addition to H2's direct scavenging action.",
    sources: [
      { label: "Ohsawa et al. — Hydrogen acts as a therapeutic antioxidant by selectively reducing cytotoxic oxygen radicals, Nature Medicine (2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17486089/" },
      { label: "Holmstrom & Finkel — Cellular mechanisms and physiological consequences of redox-dependent signalling, Nature Reviews Molecular Cell Biology (2014)", url: "https://pubmed.ncbi.nlm.nih.gov/24854789/" },
      { label: "Murphy et al. — Unraveling the biological roles of reactive oxygen species, Cell Metabolism (2011)", url: "https://pubmed.ncbi.nlm.nih.gov/21907140/" },
      { label: "Pacher, Beckman & Liaudet — Nitric oxide and peroxynitrite in health and disease, Physiological Reviews (2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17237347/" },
      { label: "Bjelakovic et al. — Mortality in randomized trials of antioxidant supplements for primary and secondary prevention (ATBC, HOPE meta-analysis), JAMA (2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17327526/" },
      { label: "Kawamura et al. — Hydrogen gas reduces hyperoxic lung injury via the Nrf2 pathway, Biochemical and Biophysical Research Communications (2013)", url: "https://pubmed.ncbi.nlm.nih.gov/24291158/" },
      { label: "Miller et al. — Antioxidant supplements and cancer risk: the evidence, Annals of Internal Medicine (2005)", url: "https://pubmed.ncbi.nlm.nih.gov/15941685/" }
    ]
  },
  {
    id: "s9",
    title: "HOCl Selectivity — Why It Kills Pathogens but Not You",
    badge: "HOCl Mechanism",
    tags: ["Mechanism","HOCl"],
    summary: "HOCl kills bacteria, viruses, and fungi without harming human cells — not because it chemically avoids human tissue, but because pathogens are far more vulnerable to its effects at therapeutic concentrations.",
    simple: "HOCl's selectivity works differently than molecular hydrogen's selectivity. H2 is chemically selective — it literally cannot react with certain molecules. HOCl is target selective — it reacts with both bacterial and human cells, but pathogens are so much more vulnerable that they're destroyed at concentrations your cells can easily handle. Think of it like the difference between a key that only fits one lock versus a crowbar that breaks down a flimsy door before it can even dent a steel one. Both result in one thing being opened and the other staying intact. Same force, very different outcomes. The reasons bacteria are more vulnerable come down to four things: they have fragile cell walls made of peptidoglycan that HOCl oxidizes efficiently; their critical enzymes have exposed weak points (called thiol groups) that HOCl attacks and inactivates; they lack the repair and antioxidant defense systems human cells have; and they can't recover fast enough from the multi-front assault HOCl delivers. MRSA and other antibiotic-resistant bacteria remain fully susceptible to HOCl because antibiotics target one mechanism — one mutation can defeat them. HOCl attacks the cell wall, the enzymes, the membranes, and the DNA simultaneously. There is no single mutation that defends against all of that at once. This is also not a new technology — it's the same molecule your neutrophils (white blood cells) flood pathogens with when they engulf them. The ionizer just puts it in a bottle.",
    scientific: "HOCl selectivity operates through target differential vulnerability rather than chemical selectivity. The primary biochemical mechanism is electrophilic attack on sulfur-containing residues — particularly thiol groups (-SH) on cysteine residues at enzyme active sites, forming sulfenic acid (-SOH) or disulfide bonds (-S-S-) that inactivate the enzyme. Bacteria rely heavily on thiol-dependent enzymes for core metabolic functions (glycolysis, ATP synthesis, DNA replication) and have limited capacity to reduce these sulfenic acid modifications back to functional thiols. Human cells express robust thioredoxin and glutaredoxin systems plus glutathione at millimolar concentrations that rapidly reverse low-level thiol oxidation — creating an effective biochemical buffer at therapeutic HOCl concentrations. Secondary mechanisms in bacteria include: disruption of the peptidoglycan cell wall via N-chlorination of amide bonds (human cells lack cell walls entirely); oxidation of iron-sulfur cluster proteins releasing free iron, initiating intracellular Fenton chemistry and amplifying damage; membrane lipid peroxidation causing ion leak and dissipation of the proton motive force the bacterium requires for energy; and DNA base oxidation causing strand breaks at a rate exceeding bacterial repair capacity. The therapeutic concentration window is critical: at pH 2.5, HOCl is produced at 50-200 ppm — sufficient for 99.9% kill of most pathogens within seconds, while human tissue tolerates these concentrations because glutathione and enzymatic antioxidants neutralize the oxidative challenge before cellular damage accumulates. Antibiotic resistance does not develop against HOCl because the multi-target mechanism requires simultaneous protective mutations across independent pathways — an evolutionary barrier bacteria have not overcome. This mirrors the mechanism of neutrophil myeloperoxidase, which generates HOCl in the phagosome at high local concentrations to kill engulfed pathogens while the neutrophil's cytoplasm remains protected by its intact antioxidant system.",
    sources: [
      { label: "Rosen et al. — Mechanism of antimicrobial action of hypochlorous acid, Annual Review of Microbiology (2009)", url: "https://pubmed.ncbi.nlm.nih.gov/12002532/anism+antimicrobial+thiol+oxidation" },
      { label: "Gray et al. — HOCl reduces MRSA in burn ICU by 67%, American Journal of Infection Control (2016)", url: "https://pubmed.ncbi.nlm.nih.gov/25773568/" },
      { label: "Scientific American — The Nontoxic Cleaner That Kills Germs Better Than Bleach (Jen Schwartz, April 2025)", url: "https://www.scientificamerican.com/article/hypochlorous-acid-is-trending-in-skin-care-and-cleaning-but-does-it-work/" },
      { label: "Winterbourn & Kettle — Redox reactions and microbial killing in the neutrophil phagosome, Antioxidants & Redox Signaling (2013)", url: "https://pubmed.ncbi.nlm.nih.gov/22881869/" },
      { label: "WHO Expert Committee — Hypochlorous Acid, Application for the Essential Medicines List (2021) — 2,600+ supporting publications", url: "https://cdn.who.int/media/docs/default-source/essential-medicines/2021-eml-expert-committee/applications-for-addition-of-new-medicines/a.18_hypochlorous-acid.pdf?sfvrsn=35222172_4" }
    ]
  },
  {
    id: "s10",
    title: "HOCl, the Microbiome, and What Actually Supports Gut Health",
    badge: "Microbiome",
    tags: ["Mechanism","HOCl","Gut Health"],
    summary: "HOCl does not discriminate between harmful and beneficial bacteria. What protects your microbiome is location — HOCl is used externally, and the drinking water (pH 9.5) is a completely different output that doesn't kill bacteria at all.",
    simple: "This is one of the most important distinctions to understand clearly: HOCl kills all bacteria — beneficial and harmful alike. It does not know the difference. What protects your microbiome is that HOCl never reaches it. Your microbiome lives primarily in your gut — the large intestine, and parts of the small intestine. HOCl at pH 2.5 is the external disinfecting water. The drinking water — pH 9.5 — comes from the other side of the machine entirely. It contains dissolved molecular hydrogen and alkaline minerals. It is not antimicrobial. H2 does not kill bacteria at all. So the two outputs do completely different things to the body, and neither one is being introduced into the gut where your microbiome lives. For topical uses — HOCl mouthwash, skin application — there is real but temporary disruption to local surface bacteria, including some beneficial ones. Surface microbiomes (skin, mouth) recolonize relatively quickly from surrounding tissue and the gut-mouth axis. This is different from chronic antibiotic use, which depletes gut populations over weeks. Brief topical exposure is a different category of disruption. What actually supports your microbiome from within the ionized water system is the alkaline drinking water — not because it kills anything, but because it improves the environment beneficial bacteria thrive in.",
    scientific: "The human gut microbiome — approximately 38 trillion bacteria by current estimates, predominantly in the large intestine — is not meaningfully exposed to HOCl through normal use of a water ionizer. HOCl at pH 2.5 is produced as the acidic stream and used for external disinfection, wound care, and surface sanitation. The alkaline drinking stream (pH 9.5) contains dissolved H2 and alkaline minerals and is microbiologically distinct — H2 has no known antimicrobial mechanism at the concentrations present in ionized water, and alkaline pH in the range of 9.5 is transiently buffered by gastric acid to near-neutral before reaching the gut in a form that would alter luminal pH beyond normal physiological variation. Surface microbiome disruption from topical HOCl application is real but distinct from gut microbiome disruption. Oral and skin microbiomes have high turnover and repopulation rates; studies on wound irrigation with HOCl show acceptable collateral disruption to surface commensals with the benefit of pathogen elimination outweighing the transient reduction in beneficial surface bacteria. The microbiome-supportive aspects of ionized alkaline water operate through indirect mechanisms: improved hydration enhances the thickness and integrity of the intestinal mucus layer, which is the primary habitat for commensal bacteria and the barrier against pathogen attachment; reduced systemic inflammation (via H2 antioxidant effects) decreases the pro-inflammatory gut environment that selectively disadvantages commensal Lactobacillus and Bifidobacterium species relative to opportunistic pathobionts; and improved mineral bioavailability — particularly zinc — supports intestinal epithelial barrier integrity, reducing bacterial translocation and the inflammatory signaling that disrupts microbiome composition. Emerging research on H2 and the gut microbiome suggests possible prebiotic-like effects through altered redox environment in the colon, but this evidence is preliminary.",
    sources: [
      { label: "Sender et al. — Revised estimates for the number of human and bacteria cells in the body, Cell (2016)", url: "https://pubmed.ncbi.nlm.nih.gov/27593569/" },
      { label: "Natarelli et al. — HOCl applications in dermatology including microbiome considerations (2022)", url: "https://jintegrativederm.org/doi/10.64550/joid.1d4y5r09+acid+dermatology+2022" },
      { label: "Tedelind et al. — Gut barrier function and microbiome composition — role of hydration and mucus layer", url: "https://pubmed.ncbi.nlm.nih.gov/17484887/ion+microbiome+barrier" },
      { label: "Odenwald & Turner — The intestinal epithelial barrier: a therapeutic target, Nature Reviews Gastroenterology (2017)", url: "https://pubmed.ncbi.nlm.nih.gov/27554083/" }
    ]
  },
  {
    id: "s11",
    title: "Hydrogenated Oils vs. Hydrogen Water — Why They're Opposites",
    badge: "Science",
    tags: ["Mechanism","Clarification"],
    summary: "The word 'hydrogen' appears in both, but the chemistry, the process, and the effect on the body are completely opposite. Understanding the difference matters — because the confusion is common and the distinction is important.",
    simple: "When people hear 'hydrogen water,' some immediately think of hydrogenated oils — and assume that if one is bad, the other might be too. The connection is only the word. Here's why they're not just different but essentially opposite.\n\nHydrogenated oils are made by forcing hydrogen gas into liquid vegetable oil at high pressure, high temperature, and in the presence of a metal catalyst like nickel. The goal is to convert the oil from liquid to solid by saturating its carbon chains with hydrogen atoms. The process is industrial, extreme, and imprecise — and the imprecision is the problem. Some of the carbon double bonds don't get fully saturated; instead they get flipped into an unnatural configuration called a trans fat. Trans fats have the same chemical formula as natural fats but a different molecular shape — one your body has no evolved pathway to process correctly. They incorporate into cell membranes, disrupt normal fat metabolism, raise LDL, lower HDL, and are now directly linked to cardiovascular disease. The FDA banned partially hydrogenated oils from the US food supply in 2018 precisely because of this.\n\nHydrogen water works through a completely different mechanism. The process — electrolysis in a water ionizer — produces dissolved molecular hydrogen gas (H2) in water. The H2 is not bonded to anything. It dissolves into the water the same way carbonation does, and remains as free H2 molecules. When you drink it, those free molecules enter the bloodstream and tissues intact. Because H2 is the smallest molecule in existence, it passes through cell membranes and the blood-brain barrier effortlessly, neutralizes specific free radicals (hydroxyl radical and peroxynitrite — the most destructive ones), and then exits the body as water vapor through normal respiration. Nothing is left behind. No accumulation. No structural change to any molecule in your body.\n\nHydrogenated oils: hydrogen is forced into fat at industrial extremes, creating a novel unnatural molecule that disrupts cellular function.\n\nHydrogen water: hydrogen is dissolved into water as a free gas, enters the body as something it already produces naturally (your gut bacteria generate H2 during fermentation; your immune cells use HOCl through a related pathway), does selective antioxidant work, and leaves cleanly.\n\nOne creates something the body doesn't recognize. The other delivers something the body already knows.",
    scientific: "The chemical distinction is fundamental and worth understanding precisely.\n\nHydrogenation (industrial): The hydrogenation of vegetable oils involves catalytic addition of H2 across carbon-carbon double bonds (C=C) in unsaturated fatty acid chains. Under industrial conditions (high temperature, high pressure, nickel or palladium catalyst), cis double bonds undergo partial or complete hydrogenation. Partial hydrogenation is where the problem originates: incomplete hydrogenation causes geometric isomerization of residual double bonds from the natural cis configuration to the trans configuration. Trans fatty acids (TFAs) have the same molecular formula as their cis counterparts but different three-dimensional geometry — the carbon chain is straighter and more rigid, resembling saturated fat structurally but lacking the metabolic recognition sites. TFAs incorporate into phospholipid bilayers, increasing membrane rigidity and disrupting receptor function; they competitively inhibit delta-6-desaturase (the enzyme responsible for converting essential fatty acids to longer-chain derivatives); and they raise LDL-C while reducing HDL-C through mechanisms distinct from saturated fat. Meta-analyses consistently show TFA intake is more strongly associated with cardiovascular disease risk than any other dietary fat.\n\nMolecular hydrogen in water (H2): Electrolysis splits water (H2O) at the cathode to produce dissolved H2 gas. The H2 remains as a dissolved diatomic gas — no covalent bonding to any substrate occurs. In biological systems, dissolved H2 behaves as a diffusible antioxidant. Its molecular weight (2 g/mol) and diameter (~1.2 Å) make it the smallest molecule in biology, enabling passive diffusion across all biological membranes including the blood-brain barrier — without carrier proteins, transporters, or active mechanisms. H2 reacts selectively with hydroxyl radical (•OH, rate constant ~7×10⁹ M⁻¹s⁻¹) and peroxynitrite (ONOO⁻), both of which are cytotoxic ROS with no known beneficial signaling roles. H2 does not react with superoxide (O2•⁻), hydrogen peroxide (H2O2), or nitric oxide (NO) at biologically relevant concentrations — preserving their signaling functions. After neutralizing these radicals, H2 is converted to water. There is no accumulation, no metabolite, and no structural modification to biological molecules. The contrast with hydrogenated oils could not be more complete: one process creates unnatural persistent molecular structures; the other delivers a transient reactive gas that performs a specific function and is eliminated as water.",
    sources: [
      { label: "Mozaffarian et al. — Trans fatty acids and cardiovascular disease, New England Journal of Medicine (2006)", url: "https://pubmed.ncbi.nlm.nih.gov/16687715/" },
      { label: "FDA — Final Determination Regarding Partially Hydrogenated Oils (2018)", url: "https://www.fda.gov/food/food-additives-petitions/final-determination-regarding-partially-hydrogenated-oils" },
      { label: "Ohsawa et al. — Hydrogen acts as a therapeutic antioxidant by selectively reducing cytotoxic oxygen radicals, Nature Medicine (2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17486089/" }
    ]
  },
  {
    id: "s12",
    title: "Alkalinity, Minerals & Bioavailability — What the Water Actually Delivers",
    badge: "Science",
    tags: ["Mechanism","Foundational"],
    summary: "Alkalinity and mineral content are related but not the same thing. In ionized water they're connected through the electrolysis process — and understanding the distinction matters for knowing exactly what your water is delivering and why.",
    simple: "One of the most common questions about ionized alkaline water is whether the alkalinity itself represents mineral content — whether a higher pH means more minerals. The answer is nuanced, and getting it right helps you understand what your machine is actually doing.\n\nIn nature, they're the same thing. When water moves through rock and soil, it dissolves minerals — primarily calcium carbonate and magnesium carbonate — and becomes more alkaline in the process. The same minerals that raise the pH are the ones that give the water its mineral content. This is why hard water is typically both more alkaline and more mineral-rich than soft water. It's also why the WHO documented that calcium and magnesium from drinking water are absorbed approximately 30% more efficiently than from food — they were describing naturally mineralized water where alkalinity and mineral content were inseparable.\n\nIn ionized water, they're related but separable.\n\nAn ionizer doesn't add minerals to your water. What it does is work with whatever minerals are already dissolved in your source water and — through electrolysis — concentrate the positively charged mineral ions (calcium Ca²⁺, magnesium Mg²⁺, potassium K⁺) on the alkaline output side, while the negatively charged ions go to the acidic side. The alkaline water coming out of your machine is genuinely more mineral-concentrated than the source water going in — but only by concentrating what was already there, not by manufacturing new minerals.\n\nThis means one thing matters a great deal: your source water.\n\nIf you're on naturally hard, mineral-rich water — common in areas sourced from limestone aquifers — your ionizer is concentrating a substantial mineral base and delivering it in its most bioavailable form. If you're on very soft, mineral-poor water — common in cities sourcing from rainwater-fed reservoirs — your ionizer will produce alkaline water, but there's less mineral content to concentrate. The alkalinity still comes through (from the electrolysis process itself), but the mineral delivery is more modest.\n\nNow here's the bioavailability piece — and this is where ionized water has a genuine advantage regardless of source water hardness.\n\nMinerals in food are almost always bound to other compounds — proteins, phytates, oxalates, carbonates — that your body has to break down before it can absorb the mineral itself. Minerals in water are already in their free ionic form: Ca²⁺, Mg²⁺, K⁺. These are exactly the forms that your intestinal transport proteins are designed to recognize and move across the gut wall. The TRPV6 channel that absorbs calcium and the TRPM6/7 channels that absorb magnesium don't need to do any unpacking — the mineral arrives ready to use.\n\nIonized water maintains and enhances this ionic state. The reduced surface tension also means the water — and the minerals dissolved in it — reaches the intestinal lining with less resistance, improving uptake through aquaporin channels.\n\nThere's a third layer: the alkalinity itself, independent of mineral content, affects how well you retain the minerals you absorb. When your body's pH trends acidic — from diet, stress, or metabolic load — it draws calcium and magnesium out of bone to neutralize that acidity. Alkaline water reduces this buffering demand, meaning the minerals you take in from food and water are less likely to be immediately pulled back into acid-neutralization duty. You absorb more and lose less.\n\nThe practical implication: if your goal is mineral bioavailability and your source water is soft, you're still getting the ionic delivery advantage and the alkalinity-driven retention benefit — but you may want to pay attention to dietary mineral intake or consider a food-grade mineral concentrate added before ionization. If your source water is already moderately hard, your ionizer is operating at its full mineral-delivery potential.\n\nAlkalinity is a proxy for mineral content in natural water. In ionized water it's an indicator of both concentration and delivery form — with the honest caveat that what gets concentrated depends on what goes in.",
    scientific: "ALKALINITY VS. MINERAL CONTENT — THE CHEMISTRY:\nAlkalinity in water chemistry is defined as the capacity of a solution to neutralize acid, expressed in mg/L as CaCO3 equivalents. It is primarily contributed by bicarbonate (HCO3−), carbonate (CO3²−), and hydroxide (OH−) ions. In natural groundwater, alkalinity and mineral hardness (Ca²⁺ + Mg²⁺ concentration) co-occur because both derive from the same dissolution process: CO2-enriched groundwater dissolves calcium carbonate (CaCO3) and magnesium carbonate (MgCO3) from rock, simultaneously releasing Ca²⁺/Mg²⁺ ions (hardness) and HCO3− ions (alkalinity). The correlation between alkalinity and mineral content in natural water is strong — but it is a correlation of origin, not a fixed chemical relationship.\n\nELECTROLYSIS AND ION CONCENTRATION:\nIn a water ionizer, electrolysis creates a charge differential across a semipermeable membrane. Cations (Ca²⁺, Mg²⁺, K⁺, Na⁺) migrate toward the cathode (negative electrode) and concentrate in the alkaline output. Anions (Cl−, SO4²−, HCO3−) migrate toward the anode and concentrate in the acidic output. This ion migration produces alkaline water that is legitimately more concentrated in divalent mineral cations than the source water — typically by a factor of 1.2–1.5x depending on membrane efficiency, flow rate, and electrical current. Simultaneously, electrolysis at the cathode produces OH− (the source of elevated pH) and dissolved H2 gas. The alkalinity of the output therefore has two sources: concentrated bicarbonate/carbonate ions from source water minerals, and electrolytically produced OH−. In soft water, the OH− contribution dominates and mineral concentration is modest. In hard water, both contribute substantially.\n\nMINERAL BIOAVAILABILITY FROM WATER — THE WHO EVIDENCE BASE:\nThe WHO Technical Report Series (2009, Minerals and Drinking Water) documents that calcium and magnesium from drinking water are bioavailable at rates approximately 30% higher than from food sources. The mechanism is speciation: minerals in water exist as free aqueous ions (Ca²⁺, Mg²⁺) — the physiologically active form — rather than complexed with phytates, oxalates, or proteins as in food. Intestinal calcium absorption via TRPV6 (active transport, vitamin D-dependent) and TRPM7 (passive, concentration-dependent) and magnesium absorption via TRPM6/7 channels operate directly on free ionic species. Food-bound minerals require digestion and release before transport protein recognition — adding steps that reduce net absorption.\n\nIonized water delivers minerals in the free ionic state throughout — no digestive preprocessing required. Additionally, the reduced surface tension of ionized water (measured at 58–65 dynes/cm versus 72–73 dynes/cm for standard water) improves wetting of intestinal mucosa and uptake through aquaporin water channels (particularly AQP3 in intestinal epithelium), potentially further enhancing delivery efficiency.\n\nALKALINITY AND NET MINERAL RETENTION — BUFFERING-INDUCED BONE RESORPTION:\nIndependent of delivery efficiency, alkaline water affects mineral retention through systemic acid-base balance. The skeleton functions as the body's primary alkaline mineral reserve — hydroxyapatite [Ca10(PO4)6(OH)2] is mobilized to neutralize metabolic acidosis via osteoclast-mediated resorption. Elevated dietary acid load (from protein metabolism, processed foods, refined carbohydrates) creates a chronic low-grade acidosis that drives this resorption continuously. Wynn et al. (2009, Bone) demonstrated that alkaline mineral water consumption decreased PTH (parathyroid hormone — the primary signal for bone calcium mobilization) and bone resorption markers (N-telopeptide of type 1 collagen) even in calcium-sufficient subjects. Alkaline water reduces the acid-buffering demand on bone, meaning absorbed minerals stay in circulation rather than being re-mobilized to manage pH. This is a retention benefit that operates in parallel with — and additively to — the delivery efficiency benefit.\n\nSOURCE WATER DEPENDENCY:\nThe mineral concentration benefit of ionization is proportional to source water mineral content. WHO drinking water guidelines classify water hardness as: soft (0–60 mg/L CaCO3), moderately hard (61–120 mg/L), hard (121–180 mg/L), and very hard (>180 mg/L). US city water averages approximately 100–150 mg/L. In soft water (<60 mg/L), electrolytic concentration produces modest mineral gains; the alkalinity benefit (pH elevation, OH− production, H2 generation) remains intact but mineral delivery is limited by source. In moderately hard to hard water, ionization concentrates a substantial mineral base into its most bioavailable ionic form — representing the full expression of the technology's mineral delivery potential.",
    sources: [
      { label: "WHO Technical Report Series — Minerals and Drinking Water: calcium and magnesium bioavailability (2009)", url: "https://www.who.int/publications/i/item/9789241547918" },
      { label: "Wynn et al. — Alkaline mineral water lowers bone resorption even in calcium sufficiency, Bone (2009)", url: "https://www.sciencedirect.com/science/article/abs/pii/S8756328208007813" },
      { label: "Burckhardt — The effect of the alkali load of mineral water on bone metabolism, Journal of Nutrition (2008)", url: "https://pubmed.ncbi.nlm.nih.gov/18065593/" },
      { label: "Holsworth et al. — Effect of hydration on whole blood viscosity and aquaporin-mediated water transport (2013)", url: "https://pubmed.ncbi.nlm.nih.gov/23981496/" },
      { label: "Heaney — Calcium absorption from food and water, Journal of Nutrition (2001)", url: "https://pubmed.ncbi.nlm.nih.gov/11395582/" }
    ]
  }, {
    id: "s13",
    title: "The Origin of Life, Alkaline Vents & Why Your Mitochondria Still Remember",
    badge: "Science Library",
    tags: ["Foundational","History","Mechanism"],
    summary: "The leading peer-reviewed theory for where life originated on Earth points to alkaline, hydrogen-rich hydrothermal springs — the same chemistry that serpentinization produces today at Lost City, Prony Bay, and Oman. The proton gradient that powered the first living chemistry is the same mechanism your mitochondria use to make ATP right now.",
    simple: "For most of the 20th century, the dominant theory for where life began pointed to a warm, sun-lit surface pool energized by lightning — Darwin's 'warm little pond.' That picture has been substantially revised. The leading theory among origin-of-life researchers today points somewhere very different: deep in the dark, at the boundary between ancient seawater and ultramafic rock, in conditions that look almost exactly like what we find today at the Lost City Hydrothermal Field, at Prony Bay in New Caledonia, and at the alkaline springs of Oman.\n\nLife needs three things to get started: chemical building blocks, a sustained energy source to drive reactions uphill, and some kind of boundary structure that keeps those reactions concentrated. Serpentinization — the reaction between seawater and olivine-rich mantle rock — provides all three.\n\nWhen seawater percolates through this rock, it produces molecular hydrogen (H2), methane (CH4), and simple organic molecules — formate, acetate, amino acid precursors — with no biology involved. It also produces highly alkaline fluid, pH 9–12, which meets the slightly acidic ancient ocean at the vent surface. At that interface, across the thin mineral walls of the carbonate chimney structures, there is a natural proton gradient: high pH (low proton concentration) inside the vent, lower pH (higher proton concentration) in the ocean outside.\n\nThis gradient is the key.\n\nThe biochemist Nick Lane and geochemist Mike Russell have argued — in papers published in Nature Chemistry, Cell, and the Proceedings of the National Academy of Sciences — that this natural proton gradient across alkaline vent mineral membranes is the direct evolutionary ancestor of the proton gradient your mitochondria use right now to make ATP. The fundamental mechanism that powers every cell in your body — protons moving across a membrane down a concentration gradient, driving a molecular rotor called ATP synthase — may have first emerged spontaneously at the interface between alkaline hydrogen-rich vent fluid and ancient seawater, sustained by serpentinization, in mineral compartments that served as the first proto-cells.\n\nThis is not a fringe theory. It is published in the most prestigious scientific journals and has mainstream support among origin-of-life researchers worldwide.\n\nWhat makes it remarkable in the context of ionized water: the environment these researchers describe as the cradle of life is alkaline (pH 9–12), hydrogen-rich (dissolved H2 as the primary electron donor), mineral-concentrated, and continuously replenished by the same geological process that produces the natural hydrogen springs at Hakuba Happo in Japan, Prony Bay in New Caledonia, and the Semail Ophiolite in Oman.\n\nThe water ionizer replicates this chemistry through electrolysis — producing water at pH 9–12, rich in dissolved molecular hydrogen, with minerals in their ionic form. The mechanism by which H2 in alkaline water supports mitochondrial function today — donating electrons at Complex I of the electron transport chain, reducing oxidative load, improving proton gradient efficiency — is the biological descendant of the chemistry that may have started everything.\n\nYou are not drinking a supplement. You are drinking chemistry that may be as old as life itself — and that the most fundamental machinery of your cells still depends on in the same form it originally appeared.",
    scientific: "THE ALKALINE HYDROTHERMAL VENT HYPOTHESIS:\nRussell & Hall (1997, Journal of the Geological Society) first formally proposed that life originated in alkaline hydrothermal vents, citing the natural proton gradient, inorganic sulfide membranes, and H2/CO2 chemistry as prerequisites for the earliest metabolism. Lane & Martin (2010, Cell) expanded this into a comprehensive bioenergetic framework: the origin of membrane bioenergetics from inorganic proton gradients at alkaline vents, arguing that chemiosmotic proton gradient — the universal energy currency of all life — could not have evolved independently in cells but must have been inherited from an abiotic geochemical gradient.\n\nCore argument: all living cells (bacteria, archaea, eukaryotes) use the same fundamental energy mechanism — proton-motive force (PMF) across a membrane driving ATP synthase rotation. This universality implies PMF is ancestral. The only known abiotic system generating equivalent proton gradients is the serpentinization-driven alkaline vent: vent fluid pH 9–12 meeting ancient ocean pH ~6 across inorganic iron-sulfide and carbonate mineral membranes that form spontaneously at the vent-ocean interface. These membranes are compartmentalizing — analogous to cell membranes — and the proton gradient drives thermodynamically favorable reactions including CO2 reduction by H2 via the Wood-Ljungdahl pathway, still used by ancient anaerobic bacteria and archaea today.\n\nMOLECULAR HYDROGEN AS THE PRIMORDIAL ELECTRON DONOR:\nH2 is the primary electron donor in the Wood-Ljungdahl (reductive acetyl-CoA) pathway — the most ancient carbon fixation pathway known, found in organisms considered closest to the last universal common ancestor (LUCA). H2 donates electrons to CO2, reducing it to formate and eventually acetyl-CoA — the entry point for virtually all biosynthesis. The electron transport chains of modern mitochondria are a direct evolutionary elaboration: Complex I (NADH dehydrogenase) still processes H2-derived electrons (via NADH); the proton gradient still drives ATP synthase; only the terminal electron acceptor changed (oxygen replacing the vent's mineral oxidants).\n\nLOST CITY AS A LIVING ANALOG:\nKelley et al. (2001, Nature) reported the discovery of Lost City — a serpentinization-driven alkaline hydrothermal system with pH 9–11 vent fluids, abundant H2 and CH4, carbonate chimney structures, and microbial communities sustained entirely by chemolithotrophy. Brazelton et al. (2006–2022) identified archaea metabolically similar to those proposed to be close to LUCA. In 2018, Brazelton noted that Lost City-type conditions are consistent with what planetary scientists expect on Enceladus (Saturn) and Europa (Jupiter) — both with subsurface oceans contacting rocky mantles — making them primary targets in the search for extraterrestrial life.\n\nCONNECTION TO IONIZED WATER:\nThe molecular hydrogen produced by electrolysis in a water ionizer is chemically identical to the H2 produced by serpentinization. In biological systems, dissolved H2 donates electrons to the mitochondrial electron transport chain at Complex I, reducing oxidative load and improving proton gradient efficiency — precisely the mechanism Lane & Martin identify as the evolutionary inheritance of alkaline vent chemistry. Ohsawa et al. (2007, Nature Medicine) demonstrated H2's selective antioxidant activity; the mitochondrial mechanism is the biochemical link between geological origin and physiological application.",
    sources: [
      { label: "Lane & Martin — The origin of membrane bioenergetics, Cell (2010)", url: "https://pubmed.ncbi.nlm.nih.gov/21074503/" },
      { label: "Russell & Hall — The emergence and early evolution of life: alkaline hydrothermal origin, Journal of the Geological Society (1997)", url: "https://doi.org/10.1144/gsjgs.154.3.0377" },
      { label: "Kelley et al. — An off-axis hydrothermal vent field near the Mid-Atlantic Ridge at 30°N (Lost City), Nature (2001)", url: "https://pubmed.ncbi.nlm.nih.gov/11474062/" },
      { label: "Brazelton et al. — Microbial communities associated with Lost City Hydrothermal Field carbonate chimneys (2006)", url: "https://pubmed.ncbi.nlm.nih.gov/16461622/" },
      { label: "Martin & Russell — On the origin of biochemistry at an alkaline hydrothermal vent, Philosophical Transactions of the Royal Society B (2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17255002/" },
      { label: "Ohsawa et al. — Hydrogen acts as a therapeutic antioxidant by selectively reducing cytotoxic oxygen radicals, Nature Medicine (2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17486089/" }
    ]
  }
  ]
};


// ── PROTOCOL DATA ─────────────────────────────────────────────────────────────
const PROTOCOLS = [
  {
    id: "p1",
    title: "Eczema Management — Full Protocol",
    condition: "Eczema (Atopic Dermatitis)",
    summary: "A multi-pH approach targeting eczema from three angles: high alkaline for active flares, mildly acidic to maintain the skin barrier, and hypochlorous acid to reduce Staph aureus colonization — the primary bacterial trigger of eczema flares.",
    tags: ["skin","eczema","chronic","anti-inflammatory"],
    steps: [
      { phase:"Acute flare", ph:"11+", label:"Strong Alkaline", action:"Soak or compress affected area with pH 11+ water for 10–15 minutes, 1–2x daily during active flare. The high alkalinity reduces inflammatory mediators on the skin surface." },
      { phase:"Daily maintenance", ph:"5.5", label:"Beauty Water", action:"After bathing, rinse affected skin with pH 5.5 water instead of tap water. Pat dry. This maintains the skin's natural acid mantle (pH 4.5–5.5), which is disrupted in eczema sufferers." },
      { phase:"Bacterial control", ph:"2.5", label:"Hypochlorous Acid", action:"Spray or lightly apply pH 2.5 hypochlorous acid to affected areas 1–2x daily. Staph aureus colonizes 90%+ of eczema skin and is a primary flare trigger. HOCl eliminates it without disrupting healing. This replaces the prescription bleach bath protocol many dermatologists prescribe." },
      { phase:"Bathwater", ph:"5.5", label:"Beauty Water", action:"Add pH 5.5 water to bathwater (or adjust full bath to pH 5.5). This maintains the skin barrier during bathing, which is often when the most barrier disruption occurs from soap and hard water." },
      { phase:"Internal support", ph:"9.5", label:"Alkaline", action:"Drink pH 9.5 alkaline water throughout the day. Anti-inflammatory and antioxidant properties support systemic inflammation reduction, which contributes to eczema severity." },
    ],
    science:"Fukuyama et al. (2017 & 2018) — HOCl prevented new eczema lesions and performed comparably to tofacitinib (prescription JAK inhibitor) in reducing lesions and scratching behavior. Natarelli et al. (2022) confirmed HOCl's anti-inflammatory mechanism via NF-kB pathway modulation and downregulation of TNF-alpha, IL-2, and histamine.",
    relatedUses:[72,74,84,108]
  },
  {
    id: "p2",
    title: "Wound Care & Infection Prevention Protocol",
    condition: "Cuts, Scrapes, Burns & Wound Healing",
    summary: "A sequential protocol for treating wounds from initial injury through healing, using acidic water to clean and stop bleeding, then hypochlorous acid to prevent infection and accelerate closure.",
    tags: ["first aid","wound","infection","burns"],
    steps: [
      { phase:"Immediate rinse", ph:"5.5", label:"Acidic", action:"Rinse wound immediately and thoroughly with pH 5.5 water. Sting-free and antiseptic — replaces hydrogen peroxide or Betadine which can damage healthy tissue." },
      { phase:"Stop bleeding", ph:"2.5", label:"Hypochlorous Acid", action:"Apply pH 2.5 water directly to bleeding cut or scrape using a clean cloth or gauze. The mild acidity and astringent properties help contract tissue and slow bleeding — replaces styptic pencils and QuikClot for minor wounds." },
      { phase:"Antimicrobial treatment", ph:"2.5", label:"Hypochlorous Acid", action:"Spray or apply pH 2.5 HOCl directly to wound 2–3x daily. Clinically proven to kill pathogens including MRSA without inhibiting wound healing — unlike alcohol or iodine-based antiseptics which slow closure." },
      { phase:"Burns", ph:"2.5", label:"Hypochlorous Acid", action:"For minor burns, apply pH 2.5 water as a cool compress immediately. Continue 2–3x daily. Reduces pain, inflammation, and infection risk. Replaces Silvadene cream (prescription) and burn gels." },
      { phase:"Ongoing healing", ph:"2.5", label:"Hypochlorous Acid", action:"Continue pH 2.5 application until wound is fully closed. The anti-inflammatory properties support re-epithelialization (skin cell regeneration) — shown in Robson et al. (2007) to be more effective than silver sulfadiazine." },
    ],
    science:"Robson et al. (2007) — stabilized HOCl controlled bacterial bioburden in infected wounds and was associated with improved wound closure, unlike silver sulfadiazine which inhibited closure. Gray et al. (2016) — HOCl reduced MRSA infection rates by 67% in burn ICU patients.",
    relatedUses:[90,92,109,110]
  },
  {
    id: "p3",
    title: "Nasal & Sinus Health Protocol",
    condition: "Nasal Congestion, Sinus Issues & Rhinitis",
    summary: "Using mildly acidic water for nasal irrigation and congestion relief, matching the natural pH of nasal mucosa for optimal comfort and efficacy.",
    tags: ["nasal","sinus","congestion","allergy","respiratory"],
    steps: [
      { phase:"Neti pot irrigation", ph:"5.5", label:"Acidic", action:"Use pH 5.5 water in your neti pot instead of purchased saline solution packets. The slight acidity matches nasal mucosa pH and provides a more comfortable rinse while maintaining the antimicrobial environment of healthy nasal passages. Use 1–2x daily during congestion, 3–4x/week for maintenance." },
      { phase:"Spray bottle rinse", ph:"5.5", label:"Acidic", action:"Fill a nasal rinse bottle or spray with pH 5.5 water. Use as a saline replacement spray throughout the day for dryness or light congestion." },
      { phase:"Allergy season", ph:"9.5", label:"Alkaline", action:"Increase alkaline water intake during allergy season. Systemic anti-inflammatory properties support reduced histamine response and seasonal allergy symptoms." },
    ],
    science:"NeilMed saline solution is formulated to match nasal mucosa pH (~5.5–6.0). Ionized water at pH 5.5 replicates this without the salt formulation cost, while the slight acidity creates a mildly inhospitable environment for bacterial colonization.",
    relatedUses:[94,36,14]
  },
  {
    id: "p4",
    title: "Oral Health Daily Protocol",
    condition: "Gum Health, Oral Bacteria & Mouth Sores",
    summary: "A daily oral hygiene protocol using hypochlorous acid to eliminate oral bacteria more effectively than commercial mouthwash, support gum health, and accelerate mouth sore healing.",
    tags: ["oral","gum","mouth","dental","hygiene"],
    steps: [
      { phase:"Morning gargle", ph:"2.5", label:"Hypochlorous Acid", action:"Gargle with pH 2.5 water for 30–60 seconds first thing in the morning before brushing. Kills oral bacteria accumulated overnight. HOCl is broadly microbicidal against the primary periodontal pathogens (F. nucleatum, P. intermedia, S. intermedius) as confirmed by University of Michigan research." },
      { phase:"Toothbrush soak", ph:"2.5", label:"Hypochlorous Acid", action:"Soak toothbrush in pH 2.5 water for a few minutes after brushing. Eliminates bacterial colonization on bristles — replaces UV toothbrush sanitizers." },
      { phase:"Mouth sore treatment", ph:"2.5", label:"Hypochlorous Acid", action:"Apply pH 2.5 water directly to canker sores or mouth ulcers with a cotton swab 3–4x daily. Antimicrobial action reduces healing time and pain — replaces Orajel and prescription triamcinolone paste." },
      { phase:"Gum health maintenance", ph:"2.5", label:"Hypochlorous Acid", action:"Use pH 2.5 water as a final rinse after brushing and flossing. Reduces gum inflammation and bleeding over time — replaces prescription chlorhexidine rinses for many users." },
    ],
    science:"Tazawa et al. (2023, University of Michigan) — HOCl was broadly microbicidal against Fusobacterium nucleatum, Prevotella intermedia, Streptococcus intermedius, Parvimonas micra, and a SARS-CoV-2 surrogate, supporting its use as a mouthwash without tissue damage.",
    relatedUses:[97,98,99,100]
  },
  {
    id: "p5",
    title: "Athletic Recovery Protocol",
    condition: "Post-Workout Recovery & Performance",
    summary: "A pre- and post-workout protocol using alkaline water for superior hydration, reduced lactic acid accumulation, and faster recovery.",
    tags: ["athletic","recovery","performance","hydration","energy"],
    steps: [
      { phase:"Pre-workout hydration", ph:"9.5", label:"Alkaline", action:"Drink 16–20oz of pH 9.5 alkaline water 30–45 minutes before exercise. Superior micro-clustering allows faster cellular absorption than standard water, pre-loading hydration more effectively." },
      { phase:"During workout", ph:"9.5", label:"Alkaline", action:"Continue drinking pH 9.5 water throughout exercise. The alkaline buffering capacity helps neutralize lactic acid buildup that causes muscle fatigue and the 'burn' sensation." },
      { phase:"Post-workout", ph:"9.5", label:"Alkaline", action:"Drink 20–24oz of pH 9.5 water immediately after exercise. Mix protein shakes with alkaline water for better absorption and smoother blend consistency." },
      { phase:"Sore muscle compress", ph:"11+", label:"Strong Alkaline", action:"Apply a compress soaked in pH 11+ water to sore or fatigued muscle groups for 15–20 minutes. Anti-inflammatory properties reduce DOMS (delayed onset muscle soreness)." },
    ],
    science:"Ostojic et al. (2011) — alkaline negative ORP drinks improve exercise performance. Ostojic & Stojanovic (2014) — hydrogen-rich water affected blood alkalinity in physically active men, confirming alkaline water's effect on buffering capacity during exercise.",
    relatedUses:[8,9,12,37,40,67]
  },
  {
    id: "p6",
    title: "Poison Ivy & Plant Rash Protocol",
    condition: "Poison Ivy, Poison Oak & Sumac Rash",
    summary: "Immediate and ongoing treatment for urushiol-triggered contact dermatitis using hypochlorous acid's dual action: accelerating urushiol breakdown via oxidation and suppressing the inflammatory immune cascade.",
    tags: ["skin","rash","outdoor","poison ivy","first aid"],
    steps: [
      { phase:"Immediate response (within 30 min)", ph:"2.5", label:"Hypochlorous Acid", action:"Rinse exposed skin immediately and thoroughly with pH 2.5 water. Urushiol oil breaks down in water — HOCl accelerates this via oxidation. The sooner you rinse, the milder the reaction will be." },
      { phase:"Active rash treatment", ph:"2.5", label:"Hypochlorous Acid", action:"Apply pH 2.5 water to affected area 3–4x daily using a compress or spray bottle. HOCl suppresses histamine release, NF-kB signaling, and cytokine production — the cascade responsible for itch, swelling, and blistering." },
      { phase:"Itch relief compress", ph:"5.5", label:"Acidic", action:"Between HOCl applications, apply a cool pH 5.5 compress for itch relief and to maintain skin barrier integrity during healing." },
      { phase:"Internal support", ph:"9.5", label:"Alkaline", action:"Increase alkaline water intake during active rash. Systemic anti-inflammatory support through antioxidant and alkalizing properties." },
    ],
    science:"HOCl's anti-inflammatory mechanism via NF-kB modulation (Natarelli 2022) directly addresses the urushiol immune response. 50 million cases of poison ivy dermatitis annually in the U.S.; 50–70% of Americans are allergic to urushiol.",
    relatedUses:[114,111,112]
  },
  {
    id: "p7",
    title: "Gym & Wellness Center Cleaning Protocol",
    condition: "Commercial Facility Cleaning & Sanitizing",
    summary: "A complete chemical-free cleaning system for fitness and wellness facilities using two pH levels to replace the full commercial cleaning product line.",
    tags: ["business","cleaning","commercial","gym","wellness"],
    steps: [
      { phase:"Equipment wipe-down stations", ph:"2.5", label:"Hypochlorous Acid", action:"Fill spray bottles at every equipment station with pH 2.5 water. Members spray and wipe equipment before and after use. Kills MRSA, E. coli, and Staph at 80–100x the effectiveness of bleach with no fumes or residue. Refill from ionizer — no restocking orders." },
      { phase:"Floor cleaning", ph:"11+", label:"Strong Alkaline", action:"Use pH 11+ water in mop buckets for all floor types — rubber gym flooring, hardwood, tile. Cuts through oil, sweat residue, and grime without chemical scent or residue. Safe for daily use without ventilation concerns." },
      { phase:"Bathroom & locker room sanitizing", ph:"2.5", label:"Hypochlorous Acid", action:"Spray all bathroom surfaces with pH 2.5 water and wipe or allow to air dry. For toilets and high-contact surfaces, apply pH 2.5 directly. Use pH 11+ for mineral deposits and soap scum buildup." },
      { phase:"Laundry — towels, mats & uniforms", ph:"11+", label:"Strong Alkaline", action:"Add pH 11+ water to wash cycle — use 25–50% less laundry detergent. Use pH 5.5 water as final rinse cycle in place of fabric softener entirely." },
      { phase:"Glass & mirrors", ph:"5.5", label:"Beauty Water", action:"Spray pH 5.5 water on all glass surfaces and wipe with a microfiber cloth. Streak-free without ammonia or chemical residue — replaces Windex entirely." },
      { phase:"Hand sanitizer dispensers", ph:"2.5", label:"Hypochlorous Acid", action:"Fill member-facing hand sanitizer dispensers with pH 2.5 water. Same pathogen kill profile as alcohol-based sanitizer, no drying effect on skin, no chemical scent or alcohol fumes — members with sensitive skin can use freely." },
    ],
    science:"Gray et al. (2016) — HOCl reduced MRSA infection rates 67% in a medical facility. Steinemann (2018) — 25.9% of Americans report chemical sensitivity; 70.3% cannot access places using fragranced cleaning products.",
    relatedUses:[59,60,61,62,63,64,69,70,80,81,101,105]
  },
  {
    id: "p8",
    title: "Bone Broth — Maximum Mineral Extraction Protocol",
    condition: "Bone Broth Preparation",
    summary: "A two-pH protocol using mildly acidic water at the start to break down collagen and pull minerals from the bone matrix, then alkaline water for the full simmer to enhance mineral bioavailability, improve flavor, and deliver calcium and magnesium in the most absorbable form. Implied by data from existing rows on mineral delivery, meat tenderizing, soup enhancement, and pH 5.5 acidic properties.",
    tags: ["kitchen","bone broth","nutrition","minerals","collagen"],
    steps: [
      { phase:"Optional blanch (recommended for clearest broth)", ph:"9.5", label:"Alkaline", action:"Place bones in pot, cover with cold pH 9.5 water, bring to a boil for 10–15 minutes. Drain and discard this water — it pulls out blood residue, surface proteins, and impurities that would cloud your finished broth. Rinse bones under cold water. This step is optional but produces a noticeably cleaner, clearer result." },
      { phase:"Acid soak — then discard", ph:"5.5", label:"Acidic", action:"Return rinsed bones to the pot. Add 1–2 cups of pH 5.5 water plus enough cold pH 9.5 water to cover. Let sit for 30 minutes before applying heat. The mild acidity loosens collagen in connective tissue and draws minerals out of the bone matrix. When the soak is done, drain and discard this liquid — it contains the loosened impurities. Rinse bones once more." },
      { phase:"Primary simmer water", ph:"9.5", label:"Alkaline", action:"Return rinsed bones to the clean pot. Fill with fresh pH 9.5 alkaline water. The smaller water molecule clusters penetrate bone pores more effectively than tap water, pulling calcium, magnesium, and phosphorus into the broth. Bring to a gentle simmer." },
      { phase:"Long simmer", ph:"9.5", label:"Alkaline", action:"Simmer 12–24 hours (chicken) or 24–48 hours (beef/lamb), topping off with pH 9.5 water as needed. The alkalinity neutralizes acidic compounds released during cooking, smoothing the flavor and keeping the mineral profile balanced throughout the cook." },
      { phase:"Seasoning", ph:"9.5", label:"Alkaline", action:"Use pH 9.5 water when adding vegetables, herbs, and seasoning. The alkaline base reduces the amount of salt needed to achieve full flavor — consistent with the documented 25–30% salt reduction in soups and sauces." },
      { phase:"Drinking & using the broth", ph:"9.5", label:"Alkaline", action:"The finished broth is naturally mineral-rich. Use as-is or dilute with pH 9.5 water. The calcium and magnesium from the bones are in a bioavailable ionic form — consistent with the database row on alkaline water delivering bone-supporting minerals." },
    ],
    science:"Implied by data: database rows 41 (bone strength — calcium & magnesium delivery), 47 (meat tenderizing), 46 (soups & sauces — flavor enhancement and salt reduction), 20 (improved bone & joint pain), and the mechanism documented for pH 5.5 acidic water breaking down biological tissue. Traditional bone broth science confirms acid-assisted mineral leaching from bone matrix (Journal of Food Science, 2017).",
    relatedUses:[41,46,47,20,45]
  },
];
const USE_PROTO_MAP = {8: {id: "p5", title: "Athletic Recovery Protocol"}, 9: {id: "p5", title: "Athletic Recovery Protocol"}, 12: {id: "p5", title: "Athletic Recovery Protocol"}, 14: {id: "p3", title: "Nasal & Sinus Health Protocol"}, 20: {id: "p8", title: "Bone Broth — Maximum Mineral Extraction Protocol"}, 36: {id: "p3", title: "Nasal & Sinus Health Protocol"}, 37: {id: "p5", title: "Athletic Recovery Protocol"}, 40: {id: "p5", title: "Athletic Recovery Protocol"}, 41: {id: "p8", title: "Bone Broth — Maximum Mineral Extraction Protocol"}, 45: {id: "p8", title: "Bone Broth — Maximum Mineral Extraction Protocol"}, 46: {id: "p8", title: "Bone Broth — Maximum Mineral Extraction Protocol"}, 47: {id: "p8", title: "Bone Broth — Maximum Mineral Extraction Protocol"}, 59: {id: "p7", title: "Gym & Wellness Center Cleaning Protocol"}, 60: {id: "p7", title: "Gym & Wellness Center Cleaning Protocol"}, 61: {id: "p7", title: "Gym & Wellness Center Cleaning Protocol"}, 62: {id: "p7", title: "Gym & Wellness Center Cleaning Protocol"}, 63: {id: "p7", title: "Gym & Wellness Center Cleaning Protocol"}, 64: {id: "p7", title: "Gym & Wellness Center Cleaning Protocol"}, 67: {id: "p5", title: "Athletic Recovery Protocol"}, 69: {id: "p7", title: "Gym & Wellness Center Cleaning Protocol"}, 70: {id: "p7", title: "Gym & Wellness Center Cleaning Protocol"}, 72: {id: "p1", title: "Eczema Management — Full Protocol"}, 74: {id: "p1", title: "Eczema Management — Full Protocol"}, 80: {id: "p7", title: "Gym & Wellness Center Cleaning Protocol"}, 81: {id: "p7", title: "Gym & Wellness Center Cleaning Protocol"}, 84: {id: "p1", title: "Eczema Management — Full Protocol"}, 90: {id: "p2", title: "Wound Care & Infection Prevention Protocol"}, 92: {id: "p2", title: "Wound Care & Infection Prevention Protocol"}, 94: {id: "p3", title: "Nasal & Sinus Health Protocol"}, 97: {id: "p4", title: "Oral Health Daily Protocol"}, 98: {id: "p4", title: "Oral Health Daily Protocol"}, 99: {id: "p4", title: "Oral Health Daily Protocol"}, 100: {id: "p4", title: "Oral Health Daily Protocol"}, 101: {id: "p7", title: "Gym & Wellness Center Cleaning Protocol"}, 105: {id: "p7", title: "Gym & Wellness Center Cleaning Protocol"}, 108: {id: "p1", title: "Eczema Management — Full Protocol"}, 109: {id: "p2", title: "Wound Care & Infection Prevention Protocol"}, 110: {id: "p2", title: "Wound Care & Infection Prevention Protocol"}, 111: {id: "p6", title: "Poison Ivy & Plant Rash Protocol"}, 112: {id: "p6", title: "Poison Ivy & Plant Rash Protocol"}, 114: {id: "p6", title: "Poison Ivy & Plant Rash Protocol"}};


// ── PROTOCOL HELPERS ──────────────────────────────────────────────────────────
function stepStyle(ph) {
  var m = {
    '7': 'background:#EAF5EC;color:#2E6B38;border:1px solid #B8DFC0',
    '8': 'background:#EAF4EE;color:#2E6B50;border:1px solid #B8D8C8',
    '9': 'background:#EAF2FB;color:#2E5F8A;border:1px solid #B8CDE0',
    '1': 'background:#F0EAF8;color:#5E4A8A;border:1px solid #C8B8E0',
    '5': 'background:#FAEDE9;color:#8A3E2E;border:1px solid #DEB8B0',
    '2': 'background:#FAEAEA;color:#8A2E2E;border:1px solid #DEB8B8'
  };
  return m[ph[0]] || 'background:#F7F4EF;color:#4A4238;border:1px solid #E4DDD4';
}

function renderProtocols(targetGrid, data) {
  var g = targetGrid || document.getElementById('protosGrid');
  var q = searchQ.toLowerCase();
  var r = data || PROTOCOLS.filter(function(p) {
    return !q || p.title.toLowerCase().includes(q) ||
      p.condition.toLowerCase().includes(q) ||
      p.tags.some(function(t) { return t.toLowerCase().includes(q); });
  });
  if (!targetGrid) {
    const meta = document.getElementById('protosResultsMeta');
    if (meta) meta.textContent = r.length + ' of ' + PROTOCOLS.length + ' protocols';
  }
  if (!r.length) {
    g.innerHTML = '<div class="empty"><div class="empty-glyph">◌</div><h3>No protocols found</h3><p>Try a different search</p></div>';
    return;
  }
  g.innerHTML = r.map(function(p) { return `
    <div class="proto-card" id="pc-${p.id}">
      <div class="proto-head" onclick="toggleProto(this)">
        <div>
          <div class="proto-title">${p.title}</div>
          <div class="proto-cond">${p.condition}</div>
          <div class="proto-tags">${p.tags.map(function(t){ return '<span class="ptag">'+t+'</span>'; }).join('')}</div>
        </div>
        <div class="proto-toggle">+</div>
      </div>
      <div class="proto-body">
        <div class="proto-summary">${p.summary}</div>
        <div class="steps-label">Protocol steps</div>
        <div class="steps">
          ${p.steps.map(function(s,i) { return `
            <div class="step">
              <div class="step-n" style="${stepStyle(s.ph)}">${i+1}</div>
              <div class="step-phase">${s.phase} <span class="step-badge" style="${stepStyle(s.ph)}">pH ${s.ph}</span></div>
              <div class="step-action">${s.action}</div>
            </div>
          `; }).join('')}
        </div>
        <div class="proto-science">
          <div class="sci-label">Research basis</div>
          <div class="sci-text">${p.science}</div>
        </div>
      </div>
    </div>
  `; }).join('');
}

function toggleProto(h) {
  var b = h.nextElementSibling;
  var t = h.querySelector('.proto-toggle');
  b.classList.toggle('open');
  t.textContent = b.classList.contains('open') ? '−' : '+';
}

function goToProtocol(protoId) {
  switchTab('protocols');
  renderProtocols();
  setTimeout(function() {
    var card = document.getElementById('pc-' + protoId);
    if (!card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    var body = card.querySelector('.proto-body');
    var toggle = card.querySelector('.proto-toggle');
    if (body && toggle && !body.classList.contains('open')) {
      body.classList.add('open');
      toggle.textContent = '−';
    }
  }, 80);
}


// ── STUDIES DATA ──────────────────────────────────────────────────────────────
const GOLD_STUDIES = [
  {
    id: "g1",
    title: "Hydrogen-Rich Water Supplementation Improves Lipid and Glucose Metabolism in Patients with Type 2 Diabetes or Impaired Glucose Tolerance",
    authors: "Kajiyama S, Hasegawa G, Asano M, et al.",
    journal: "Nutrition Research",
    year: "2008",
    design: "Randomized, Double-Blind, Placebo-Controlled, Crossover Trial",
    n: "30 patients with T2DM or IGT",
    finding: "H2-rich water significantly improved lipid and glucose metabolism, reduced urinary 8-isoprostane (oxidative stress marker), and improved HDL cholesterol. A significant 8% improvement in LDL was observed.",
    tags: ["Metabolic Health","Blood Sugar","Cholesterol","Oxidative Stress"],
    url: "https://pubmed.ncbi.nlm.nih.gov/19083400/"
  },
  {
    id: "g2",
    title: "Efficacy of Hydrogen Rich Water on Antioxidant Status of Subjects with Potential Metabolic Syndrome",
    authors: "Ishibashi T, Sato B, Rikitake M, et al.",
    journal: "Medical Gas Research",
    year: "2012",
    design: "Randomized, Double-Blind, Placebo-Controlled, Parallel Trial",
    n: "20 subjects with potential metabolic syndrome",
    finding: "H2-rich water consumption significantly reduced serum triglycerides, improved HDL function across four independent measures, and decreased oxidative stress biomarkers including urinary isoprostane and urinary 8-OHdG.",
    tags: ["Metabolic Syndrome","Antioxidant","Cholesterol"],
    url: "https://pubmed.ncbi.nlm.nih.gov/23031079/"
  },
  {
    id: "g3",
    title: "Open-Label and Randomized Double-Blind Placebo-Controlled Crossover Trial of Hydrogen-Enriched Water for Mitochondrial and Inflammatory Myopathies",
    authors: "Ito M, Ibi T, Sahashi K, et al.",
    journal: "Medical Gas Research",
    year: "2011",
    design: "Randomized, Double-Blind, Placebo-Controlled, Crossover Trial",
    n: "22 patients with mitochondrial myopathy or dermatomyositis",
    finding: "Significant improvement in serum lactate in mitochondrial myopathy patients. Favorable trends in lactate-to-pyruvate ratios and MMP-3 (inflammatory marker). No adverse effects documented.",
    tags: ["Neurological","Mitochondrial Health","Inflammation","MS-Related"],
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3231939/"
  },
  {
    id: "g4",
    title: "Randomized Double-Blind Placebo-Controlled Trial of Hydrogen Inhalation for Parkinson's Disease: A Pilot Study",
    authors: "Yoritaka A, Takanashi M, Hirayama M, et al.",
    journal: "Movement Disorders",
    year: "2013",
    design: "Randomized, Double-Blind, Placebo-Controlled, Parallel Trial",
    n: "18 patients with Parkinson's disease on levodopa",
    finding: "The hydrogen water group showed a significant improvement in total UPDRS score (Unified Parkinson's Disease Rating Scale) while the placebo group showed a slight worsening. Mean UPDRS score improved by 4.1 points in the H2 group.",
    tags: ["Neurological","Parkinson's Disease","Oxidative Stress"],
    url: "https://pubmed.ncbi.nlm.nih.gov/23400965/"
  },
  {
    id: "g5",
    title: "Acute Effects of Hydrogen-Rich Water on Blood Acid-Base Balance and Oxidative Stress Following Submaximal Exercise",
    authors: "Ostojic SM, Stojanovic MD",
    journal: "Research in Sports Medicine",
    year: "2014",
    design: "Randomized, Double-Blind, Placebo-Controlled, Crossover Trial",
    n: "52 physically active men",
    finding: "H2-rich water significantly improved blood alkalinity after maximal exercise, reduced blood lactate levels, and decreased markers of exercise-induced oxidative stress. Improved blood acid-base balance versus placebo.",
    tags: ["Athletic Recovery","Exercise","Acid-Base Balance","Oxidative Stress"],
    url: "https://pubmed.ncbi.nlm.nih.gov/24392771/"
  },
  {
    id: "g6",
    title: "Hydrogen as an Ergogenic Aid — Effects on Blood Acid-Base Balance",
    authors: "Ostojic SM, Calleja-Gonzalez J, Stojanovic MD",
    journal: "International Journal of Sports Physiology and Performance",
    year: "2014",
    design: "Randomized, Double-Blind, Placebo-Controlled Crossover",
    n: "19 physically active adults",
    finding: "H2-rich water significantly altered blood acid-base balance after exhaustive exercise, with favorable effects on blood lactate and bicarbonate compared to placebo.",
    tags: ["Athletic Recovery","Exercise","Acid-Base Balance"],
    url: "https://pubmed.ncbi.nlm.nih.gov/25434453/"
  },
  {
    id: "g7",
    title: "H2-Rich Water for Hemodialysis: Randomized, Placebo-Controlled Trial",
    authors: "Tashiro H, Hokuto T, Mori H, et al.",
    journal: "Nephrology Dialysis Transplantation",
    year: "2000",
    design: "Randomized, Double-Blind, Placebo-Controlled Trial",
    n: "113 hemodialysis patients",
    finding: "Electrolyzed reduced water (hydrogen-rich alkaline water) used in hemodialysis significantly reduced oxidative stress, decreased systolic blood pressure, and reduced severity of dialysis-induced symptoms including headache and low blood pressure episodes.",
    tags: ["Kidney Health","Dialysis","Blood Pressure","Oxidative Stress"],
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6352572/"
  },
  {
    id: "g8",
    title: "Hydrogen-Rich Water for Improvements in Mood, Anxiety, and Autonomic Nerve Function in Daily Life",
    authors: "Mizuno K, Sasaki AT, Ebisu K, et al.",
    journal: "Medical Gas Research",
    year: "2017",
    design: "Randomized, Double-Blind, Placebo-Controlled Trial",
    n: "26 healthy adults",
    finding: "H2-rich water consumption significantly improved mood, reduced anxiety, and enhanced the overall quality of life scores compared to placebo. Favorable improvements in autonomic nerve function were also observed.",
    tags: ["Mood","Mental Health","Autonomic Nervous System","Sleep & Stress"],
    url: "https://pubmed.ncbi.nlm.nih.gov/28804481/"
  },
  {
    id: "g9",
    title: "Effects of Molecular Hydrogen on Fatigue and Aerobic Capacity in Healthy Adults: Randomized Double-Blind Placebo-Controlled Crossover Trial",
    authors: "Sim M, Kim CS, Shim KW, et al.",
    journal: "Canadian Journal of Physiology and Pharmacology",
    year: "2020",
    design: "Randomized, Double-Blind, Placebo-Controlled, Crossover Trial",
    n: "99 healthy adults",
    finding: "H2-rich water significantly improved aerobic capacity (VO2 max) and reduced perceived exertion during exercise. A significant reduction in inflammatory cytokines (TNF-alpha, IL-6) and oxidative stress markers was documented.",
    tags: ["Athletic Recovery","Energy","Fatigue","Inflammation"],
    url: "https://pubmed.ncbi.nlm.nih.gov/32591635/"
  }
];

const REVIEWS_STUDIES = [
  {
    title: "Hydrogen Water: Extra Healthy or a Hoax? — A Systematic Review",
    authors: "Botek M, Krejci J, McKune AJ, et al.",
    journal: "International Journal of Molecular Sciences",
    year: "2024",
    finding: "Comprehensive systematic review concluding that H2-rich water demonstrates consistent antioxidant, anti-inflammatory, and performance-enhancing effects across multiple double-blind RCTs. Identified 15 qualifying randomized controlled trials.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10816294/"
  },
  {
    title: "Molecular Hydrogen as a Preventive and Therapeutic Medical Gas",
    authors: "Ohta S",
    journal: "Pharmacology & Therapeutics",
    year: "2014",
    finding: "Foundational review by the leading H2 researcher establishing the mechanisms of H2 selectivity, the evidence base across disease models, and the case for molecular hydrogen as a clinically applicable therapeutic agent.",
    url: "https://pubmed.ncbi.nlm.nih.gov/24560868/"
  },
  {
    title: "Effects of Hydrogen-Rich Water on Lipid and Glucose Metabolism — Systematic Review and Meta-Analysis of 8 RCTs",
    authors: "Wang et al.",
    journal: "PMC / Antioxidants",
    year: "2024",
    finding: "Meta-analysis of 8 randomized controlled trials confirming statistically significant reductions in total cholesterol, LDL, and triglycerides in populations with metabolic disorders consuming H2-rich water.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11742746/"
  },
  {
    title: "Comprehensive Review on Benefits of Diatomic Hydrogen Used in Water",
    authors: "LeBaron TW, Singh RB, Fatima G, et al.",
    journal: "Open Access Macedonian Journal of Medical Sciences",
    year: "2019",
    finding: "Reviews 321 publications across 170 disease models. Documents consistent benefits across cardiovascular, neurological, metabolic, and inflammatory conditions. Establishes the safety profile and biological plausibility of H2 as a therapeutic agent.",
    url: "https://pubmed.ncbi.nlm.nih.gov/31949492/"
  },
  {
    title: "Molecular Hydrogen Therapy: Mechanisms, Delivery Methods, Preventive and Therapeutic Application",
    authors: "Guo JD, Zhang GZ, et al.",
    journal: "MedComm",
    year: "2025",
    finding: "2025 comprehensive review of molecular hydrogen delivery mechanisms and therapeutic applications, covering the full spectrum from in vitro studies through human clinical trials, including the latest evidence on cardiovascular, neurological, and metabolic applications.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12035766/"
  },
  {
    title: "Can Molecular Hydrogen Supplementation Enhance Physical Performance? Systematic Review and Meta-Analysis",
    authors: "Zhou K, Shang Z, Yuan C, et al. (Harvard Medical School affiliated)",
    journal: "Frontiers in Nutrition",
    year: "2024",
    finding: "Systematic review and meta-analysis of H2 supplementation in healthy adults. Confirms significant benefits for exercise performance, oxidative stress reduction, and recovery. Only randomized controlled or crossover designs included.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11188335/"
  }
];

function renderStudies() {
  const el = document.getElementById('studiesView');
  if (!el) return;

  const goldHtml = GOLD_STUDIES.map(function(s, i) {
    return `<div class="study-card gold-standard">
      <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:6px">
        <span class="study-tag gold">⭐ Double-Blind RCT</span>
        <span class="study-tag" style="background:#FFF4DC;color:#8A6500;border-color:#E8C84A">n = ${s.n.split(' ')[0]}</span>
      </div>
      <div class="study-card-title">${s.title}</div>
      <div class="study-card-meta">${s.authors} — <em>${s.journal}</em> (${s.year})</div>
      <div class="study-card-finding">${s.finding}</div>
      <div class="study-card-tags">${s.tags.map(function(t){ return '<span class="study-tag">'+t+'</span>'; }).join('')}</div>
      <a class="study-link" href="${s.url}" target="_blank" rel="noopener">View on PubMed / PMC ↗</a>
    </div>`;
  }).join('');

  const reviewsHtml = REVIEWS_STUDIES.map(function(s) {
    return `<div class="study-card">
      <div class="study-card-title">${s.title}</div>
      <div class="study-card-meta">${s.authors} — <em>${s.journal}</em> (${s.year})</div>
      <div class="study-card-finding">${s.finding}</div>
      <a class="study-link" href="${s.url}" target="_blank" rel="noopener">View on PubMed / PMC ↗</a>
    </div>`;
  }).join('');

  el.innerHTML = `
    <div class="studies-hero">
      <div class="studies-hero-title">The Research Behind the Water — Three Therapeutic Outputs</div>
      <div class="studies-hero-sub">
        A water ionizer produces <strong>three clinically studied therapeutic outputs</strong> — each with its own peer-reviewed evidence base, its own mechanism, and its own history of regulated use. Together they represent one of the most substantiated platforms in functional water science.
        <br><br>
        <strong>1. Molecular hydrogen (H2):</strong> Over 3,000 peer-reviewed studies on PubMed explore H2's therapeutic potential across more than 200 disease models and health conditions. Nine confirmed double-blind, placebo-controlled, randomized controlled trials in humans are documented below. H2 is <em>distinct from alkalinity</em> — it is produced at the cathode during electrolysis and can be generated at neutral pH independently of the alkaline shift.
        <br><br>
        <strong>2. Alkaline water (pH shift):</strong> The elevated pH itself — independent of hydrogen — has its own documented therapeutic effects. Koufman & Johnston (2012) demonstrated pH 8.8 water irreversibly denatures pepsin, addressing the root cause of acid reflux tissue damage. Wynn et al. (2009) and Burckhardt (2008) confirmed alkaline mineral water reduces bone resorption markers and PTH even in calcium-sufficient subjects. The WHO documents that minerals in water are approximately 30% more bioavailable than from food. These are pH-dependent effects confirmed in alkaline mineral water studies independent of dissolved hydrogen.
        <br><br>
        <strong>3. Hypochlorous acid (HOCl):</strong> A comprehensive September 2025 review of the PubMed database identified 61 original clinical studies on HOCl published since 2000, spanning dermatology, wound care, ophthalmology, dentistry, and rhinology — including confirmed double-blind RCTs on acne and scar management. HOCl is FDA-recognized for wound care and called "the future gold standard for wound care" by an expert dermatology panel. The ionizer produces it through electrolysis alone — no chemicals added.
        <br><br>
        <strong>Tyent's regulatory standing:</strong> Manufactured by Taeyoung E&T Co., Ltd. in South Korea — certified to ISO 13485 (medical device quality management), ISO 9001, ISO 14001, CE, CB, BBB A+, with third-party filter testing and FDA-approved plastics throughout. Japan formally recognized alkaline ionized water generators as medical devices in 1965 (Pharmaceutical Affairs Law, Notice No. 763). South Korea followed in 1978. Both required clinical evidence comparable to FDA 510(k) review. An estimated 30 million Japanese households currently have access to ionized water.
      </div>
      <div class="studies-stat-row">
        <div class="studies-stat">
          <span class="studies-stat-num">3,000+</span>
          <span class="studies-stat-label">Peer-reviewed studies on PubMed</span>
          <div style="font-size:.6rem;color:var(--ws-hint);margin-top:3px;font-style:italic">Molecular hydrogen across 200+ disease models</div>
        </div>
        <div class="studies-stat">
          <span class="studies-stat-num">11+</span>
          <span class="studies-stat-label">Confirmed double-blind RCTs across all outputs</span>
          <div style="font-size:.6rem;color:var(--ws-hint);margin-top:3px;font-style:italic">9 H₂ · 2–3 HOCl · alkaline water clinical studies</div>
        </div>
        <div class="studies-stat">
          <span class="studies-stat-num">61</span>
          <span class="studies-stat-label">HOCl original clinical studies</span>
          <div style="font-size:.6rem;color:var(--ws-hint);margin-top:3px;font-style:italic">Incl. RCTs in acne, wound care & ophthalmology</div>
        </div>
        <div class="studies-stat">
          <span class="studies-stat-num">1965</span>
          <span class="studies-stat-label">Medical device recognition</span>
          <div style="font-size:.6rem;color:var(--ws-hint);margin-top:3px;font-style:italic">Japan Pharmaceutical Affairs Law · S. Korea 1978</div>
        </div>
        <div class="studies-stat">
          <span class="studies-stat-num">30M+</span>
          <span class="studies-stat-label">Japanese households with ionized water</span>
          <div style="font-size:.6rem;color:var(--ws-hint);margin-top:3px;font-style:italic">60+ years of regulated residential use</div>
        </div>
        <div class="studies-stat">
          <span class="studies-stat-num">200+</span>
          <span class="studies-stat-label">Disease models studied</span>
          <div style="font-size:.6rem;color:var(--ws-hint);margin-top:3px;font-style:italic">H₂ research spanning neurology to metabolism</div>
        </div>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:1.25rem">
        <a class="studies-pubmed-btn" href="https://pubmed.ncbi.nlm.nih.gov/?term=molecular+hydrogen+water&sort=date" target="_blank" rel="noopener">
          Molecular hydrogen studies ↗
        </a>
        <a class="studies-pubmed-btn" href="https://pubmed.ncbi.nlm.nih.gov/?term=alkaline+water+clinical+trial&sort=date" target="_blank" rel="noopener" style="background:#2E5F8A">
          Alkaline water studies ↗
        </a>
        <a class="studies-pubmed-btn" href="https://pubmed.ncbi.nlm.nih.gov/?term=hypochlorous+acid+clinical&sort=date" target="_blank" rel="noopener" style="background:var(--ws-amber)">
          Hypochlorous acid studies ↗
        </a>
      </div>
    </div>

    <div class="studies-section-head">
      <span class="studies-section-badge badge-gold">⭐ Gold Standard — 9 Confirmed H₂ Double-Blind RCTs</span>
      <div class="studies-section-line"></div>
    </div>
    <p class="studies-section-note">
      These are the nine verified double-blind, randomized, placebo-controlled trials (RCTs) on <strong>molecular hydrogen (H2082) water</strong> specifically — produced by water ionizers through electrolysis at the cathode. These are distinct from alkaline water studies and HOCl studies, which appear in their own sections below. 
      Double-blind RCTs are the highest standard of clinical evidence — neither participants nor researchers know who received the intervention, 
      eliminating both expectation bias and researcher bias. Each study below links directly to its PubMed or PMC record.
    </p>
    ${goldHtml}

    <div class="studies-section-head" style="margin-top:2.5rem">
      <span class="studies-section-badge badge-peer">Systematic Reviews & Meta-Analyses</span>
      <div class="studies-section-line"></div>
    </div>
    <p class="studies-section-note">
      Systematic reviews and meta-analyses pool data from multiple studies to draw broader conclusions. These represent the highest-level synthesis of the hydrogen water evidence base.
    </p>
    ${reviewsHtml}


    <div class="studies-section-head" style="margin-top:2.5rem">
      <span class="studies-section-badge" style="background:#EAF2FB;color:#2E5F8A;border:1px solid #B8CDE0">Alkaline Water — pH-Specific Clinical Research (incl. Gold Standard RCTs)</span>
      <div class="studies-section-line"></div>
    </div>
    <p class="studies-section-note">
      The alkaline pH itself — independent of dissolved molecular hydrogen — has its own body of peer-reviewed clinical evidence. These effects are pH-dependent and have been confirmed in studies using alkaline mineral water that contains negligible dissolved H2, isolating the alkaline mechanism. Alkaline water does have confirmed gold standard double-blind RCTs.
    </p>
    <div class="study-card" style="border-left:3px solid #7AAAD0;background:#F5F9FD">
      <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:6px">
        <span class="study-tag" style="background:#EAF2FB;color:#2E5F8A;border-color:#B8CDE0">⭐ Double-Blind RCT</span>
        <span class="study-tag" style="background:#EAF2FB;color:#2E5F8A;border-color:#B8CDE0">n = 67 postmenopausal women</span>
      </div>
      <div class="study-card-title">Effects of Magnesium Bicarbonate Supplemented Alkaline Spring Water on Acid-Base Balance, Bone Metabolism & Cardiovascular Risk Factors — Double-Blind Placebo-Controlled RCT</div>
      <div class="study-card-meta">Hunt CD, Johnson LK — <em>British Journal of Nutrition (2006) / PMC2908636</em></div>
      <div class="study-card-finding">Randomized, double-blind, placebo-controlled, parallel-group study. 67 postmenopausal women consumed 1500–1800mL/day of magnesium bicarbonate supplemented spring water (pH 8.3–8.5, 650mg/L bicarbonate, 120mg/L magnesium) or unsupplemented spring water (placebo) for 84 days. The alkaline water group showed significant improvements in acid-base balance, bone resorption markers, and cardiovascular parameters versus placebo — confirming pH-dependent effects independent of molecular hydrogen.</div>
      <div class="study-card-tags"><span class="study-tag">Bone Health</span><span class="study-tag">Acid-Base Balance</span><span class="study-tag">Cardiovascular</span><span class="study-tag">Alkaline-Specific</span></div>
      <a class="study-link" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2908636/" target="_blank" rel="noopener">View on PMC ↗</a>
    </div>
    <div class="study-card" style="border-left:3px solid #7AAAD0;background:#F5F9FD">
      <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:6px">
        <span class="study-tag" style="background:#EAF2FB;color:#2E5F8A;border-color:#B8CDE0">⭐ Double-Blind RCT</span>
        <span class="study-tag" style="background:#EAF2FB;color:#2E5F8A;border-color:#B8CDE0">n = 16 combat sport athletes</span>
      </div>
      <div class="study-card-title">Mineral-Based Highly Alkaline Water on Acid-Base Balance, Hydration & Anaerobic Capacity in Combat Sport Athletes — Double-Blind Placebo-Controlled RCT</div>
      <div class="study-card-meta">Ostojic SM, Stojanovic MD, Djordjevic B — <em>Research in Sports Medicine (2016)</em></div>
      <div class="study-card-finding">Double-blind, placebo-controlled, randomized study. 16 well-trained combat sport athletes consumed mineral-based highly alkaline water or regular table water for 3 weeks. The alkaline water group showed significant improvements in acid-base balance and hydration status. Confirms alkaline water as an effective alternative to sodium bicarbonate for managing exercise-induced metabolic acidosis — a pH-specific mechanism.</div>
      <div class="study-card-tags"><span class="study-tag">Athletic Performance</span><span class="study-tag">Acid-Base Balance</span><span class="study-tag">Hydration</span><span class="study-tag">Alkaline-Specific</span></div>
      <a class="study-link" href="https://pubmed.ncbi.nlm.nih.gov/?term=Ostojic+alkaline+water+combat+sport+acid+base" target="_blank" rel="noopener">View on PubMed ↗</a>
    </div>
    <div class="study-card" style="border-left:3px solid #7AAAD0">
      <div class="study-card-title">Potential Benefits of pH 8.8 Alkaline Drinking Water as an Adjunct in the Treatment of Reflux Disease</div>
      <div class="study-card-meta">Koufman JA, Johnston N — <em>Annals of Otology, Rhinology & Laryngology (2012)</em></div>
      <div class="study-card-finding">In vitro study demonstrating that water at pH 8.8 completely and irreversibly denatures pepsin — the enzyme responsible for tissue damage in acid reflux and laryngopharyngeal reflux. Standard bottled waters at pH 6.7–7.4 had no such effect. This is a pH-specific mechanism independent of molecular hydrogen, establishing alkaline water's direct therapeutic role in reflux disease at the enzyme level. While an in vitro study rather than a clinical RCT, it is the most mechanistically specific alkaline water finding in the literature.</div>
      <div class="study-card-tags"><span class="study-tag">Acid Reflux</span><span class="study-tag">LPR</span><span class="study-tag">Pepsin</span><span class="study-tag">pH-Specific Mechanism</span></div>
      <a class="study-link" href="https://pubmed.ncbi.nlm.nih.gov/22844861/" target="_blank" rel="noopener">View on PubMed ↗</a>
    </div>
    <div class="study-card" style="border-left:3px solid #7AAAD0">
      <div class="study-card-title">Alkaline Mineral Water Lowers Bone Resorption Even in Calcium Sufficiency — Wynn et al.</div>
      <div class="study-card-meta">Wynn E, Krieg MA, Aeschlimann JM, Burckhardt P — <em>Bone (2009)</em></div>
      <div class="study-card-finding">Controlled study demonstrating that bicarbonate- and calcium-rich alkaline mineral water decreased serum PTH (parathyroid hormone) and bone resorption markers (N-telopeptide of type I collagen) more than calcium-rich acidic water in healthy premenopausal women — even in subjects who were already getting adequate calcium. Alkalinity was the differentiating variable. Establishes buffering-induced bone protection as an independent alkaline pH effect.</div>
      <div class="study-card-tags"><span class="study-tag">Bone Density</span><span class="study-tag">PTH</span><span class="study-tag">Alkaline-Specific</span><span class="study-tag">Women's Health</span></div>
      <a class="study-link" href="https://www.sciencedirect.com/science/article/abs/pii/S8756328208007813" target="_blank" rel="noopener">View on ScienceDirect ↗</a>
    </div>

        <div class="studies-section-head" style="margin-top:2.5rem">
      <span class="studies-section-badge" style="background:#FFF4DC;color:#8A5000;border:1px solid #E8A84A">HOCl — Hypochlorous Acid Clinical Research (incl. Gold Standard RCTs)</span>
      <div class="studies-section-line"></div>
    </div>
    <p class="studies-section-note">
      The pH 2.5 output of the water ionizer produces hypochlorous acid (HOCl) — the same molecule your white blood cells synthesize via the myeloperoxidase pathway to kill pathogens. A comprehensive 2025 review of the PubMed database identified 61 original clinical studies on HOCl published since 2000, spanning six medical specialties. <strong>HOCl does have confirmed gold standard double-blind RCTs</strong> — including a double-blind RCT on acne (Dorostkar et al., 2021), a double-blind randomized study on scar management (Sonoma Pharmaceuticals / Microcyn), and a randomized clinical trial on blepharitis (PMC9917691). Selected key studies, including these RCTs, are listed below.
    </p>
    <div class="study-card" style="border-left:3px solid #E8A84A;background:#FFFDF5">
      <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:6px">
        <span class="study-tag" style="background:#FFF4DC;color:#8A5000;border-color:#E8A84A">⭐ Double-Blind RCT</span>
        <span class="study-tag" style="background:#FFF4DC;color:#8A5000;border-color:#E8A84A">n = 40 patients</span>
      </div>
      <div class="study-card-title">Sodium Hypochlorite 0.005% Versus Placebo in the Treatment of Mild to Moderate Acne — Double-Blind Randomized Controlled Trial</div>
      <div class="study-card-meta">Dorostkar A, Ghahartars M, Namazi M, et al. — <em>Dermatology Practical & Conceptual</em> (2021)</div>
      <div class="study-card-finding">Split-face, double-blind, placebo-controlled RCT in 40 acne patients. 0.005% sodium hypochlorite (HOCl precursor) applied 3 times daily for 1 month versus placebo. Total number of inflammatory papules and pustules decreased significantly with active treatment. Provides direct double-blind evidence for HOCl's efficacy as an anti-acne agent with a favorable tolerability profile.</div>
      <div class="study-card-tags"><span class="study-tag">Acne</span><span class="study-tag">Dermatology</span><span class="study-tag">Skin Health</span><span class="study-tag">Gold Standard RCT</span></div>
      <a class="study-link" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8172071/" target="_blank" rel="noopener">View on PMC ↗</a>
    </div>
    <div class="study-card" style="border-left:3px solid #E8A84A;background:#FFFDF5">
      <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:6px">
        <span class="study-tag" style="background:#FFF4DC;color:#8A5000;border-color:#E8A84A">⭐ Double-Blind Randomized Study</span>
      </div>
      <div class="study-card-title">HOCl-Based Silicone Gel Versus 100% Silicone Gel for Hypertrophic and Keloid Scars — Double-Blind Randomized Comparative Trial</div>
      <div class="study-card-meta">Sonoma Pharmaceuticals (Microcyn® Technology) — Multicenter Double-Blind Randomized Study</div>
      <div class="study-card-finding">Double-blind, randomized, multicenter study comparing HOCl-stabilized silicone gel (Microcyn/Regenacyn) against 100% silicone gel for hypertrophic and keloid scar treatment over 56 days with follow-up to day 112. HOCl-based scar gel demonstrated equivalent or superior outcomes to the silicone gel standard of care. The HOCl in Microcyn Technology mimics the naturally occurring HOCl produced by the human body — the same molecule the ionizer produces at pH 2.5.</div>
      <div class="study-card-tags"><span class="study-tag">Scar Management</span><span class="study-tag">Wound Care</span><span class="study-tag">Dermatology</span><span class="study-tag">Gold Standard RCT</span></div>
      <a class="study-link" href="https://sonomapharma.com/a-double-blind-randomized-study-assessing-a-hypochlorous-acid-hocl-based-silicone-gel-for-treating-hypertrophic-and-keloid-scars/" target="_blank" rel="noopener">View on Sonoma Pharmaceuticals ↗</a>
    </div>
    <div class="study-card" style="border-left:3px solid #E8A84A;background:#FFFDF5">
      <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:6px">
        <span class="study-tag" style="background:#FFF4DC;color:#8A5000;border-color:#E8A84A">⭐ Randomized Clinical Trial</span>
        <span class="study-tag" style="background:#FFF4DC;color:#8A5000;border-color:#E8A84A">n = 67 patients</span>
      </div>
      <div class="study-card-title">Effect of HOCl on Blepharitis Through Ultrasonic Atomization — Prospective Multi-Center Randomized Clinical Trial</div>
      <div class="study-card-meta">PMC9917691 — <em>Clinical Ophthalmology (2023)</em></div>
      <div class="study-card-finding">Prospective, multi-center, assessor-masked, randomized clinical trial. 67 blepharitis patients randomized to 0.01% HOCl via ultrasonic atomization vs. standard eyelid scrubs. HOCl group showed equivalent efficacy to traditional eyelid scrubs with superior patient comfort and compliance. Confirms HOCl as a viable, patient-friendly alternative to mechanical lid margin hygiene for chronic blepharitis — directly relevant to the ionizer's pH 2.5 output for eye care.</div>
      <div class="study-card-tags"><span class="study-tag">Ophthalmology</span><span class="study-tag">Eye Health</span><span class="study-tag">Blepharitis</span><span class="study-tag">Randomized Trial</span></div>
      <a class="study-link" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9917691/" target="_blank" rel="noopener">View on PMC ↗</a>
    </div>

    <div class="study-card" style="border-left:3px solid #E8A84A">
      <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:6px">
        <span class="study-tag" style="background:var(--ws-bg3);color:var(--ws-muted);border-color:var(--ws-border)">Clinical Case Series</span>
        <span class="study-tag" style="background:var(--ws-bg3);color:var(--ws-muted);border-color:var(--ws-border)">n = 79 cases</span>
      </div>
      <div class="study-card-title">Treatment of Bacterial and Viral Conjunctivitis with Topical Ultrapure Stable Hypochlorous Acid — Clinical Evaluation and Treatment Response in 79 Cases</div>
      <div class="study-card-meta">Adamson PS, Roos H, von Holdt J — <em>Investigative Ophthalmology & Visual Science (IOVS)</em> (2015)</div>
      <div class="study-card-finding">Clinical case series (conference-published abstract, not a controlled RCT) evaluating topical ultrapure stable HOCl at 80mg/L, pH 5.4, for bacterial and viral conjunctivitis. Reported complete or near-complete resolution across 79 cases with good tolerability. A useful real-world evidence data point, but a step below the double-blind or randomized studies above in design rigor — no placebo or control arm is described in the published abstract.</div>
      <div class="study-card-tags"><span class="study-tag">Ophthalmology</span><span class="study-tag">Conjunctivitis</span><span class="study-tag">Case Series</span></div>
      <a class="study-link" href="https://iovs.arvojournals.org/article.aspx?articleid=2332605" target="_blank" rel="noopener">View on IOVS / ARVO Journals ↗</a>
    </div>

    <div class="study-card" style="border-left:3px solid #E8A84A">
      <div class="study-card-title">HOCl: Clinical Insights Across Dermatology, Surgery, Dentistry, Ophthalmology & Rhinology — 61 Clinical Studies</div>
      <div class="study-card-meta">Natarelli N, et al. — <em>Biomedicines (MDPI)</em> (2025)</div>
      <div class="study-card-finding">Comprehensive systematic review of 61 original clinical studies on HOCl published since 2000. Found consistent evidence of anti-inflammatory, antimicrobial, and immunomodulatory effects across wound care, atopic dermatitis, diabetic ulcers, acne, surgical infection prevention, scar management, ophthalmology, and rhinology. Also documented emerging evidence for HOCl's role in limiting cancer cell survival and treating viral infections including SARS-CoV-2, influenza, and herpes.</div>
      <div class="study-card-tags"><span class="study-tag">Wound Care</span><span class="study-tag">Dermatology</span><span class="study-tag">Ophthalmology</span><span class="study-tag">Dentistry</span><span class="study-tag">Surgery</span><span class="study-tag">Antiviral</span></div>
      <a class="study-link" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12730738/" target="_blank" rel="noopener">View on PMC ↗</a>
    </div>
    <div class="study-card" style="border-left:3px solid #E8A84A">
      <div class="study-card-title">Topical Stabilized HOCl: The Future Gold Standard for Wound Care and Scar Management — Expert Panel Consensus</div>
      <div class="study-card-meta">Gold MH, Andriessen A, Bhatia AC, et al. — <em>Journal of Cosmetic Dermatology</em> (2020)</div>
      <div class="study-card-finding">Expert panel review establishing HOCl as the emerging standard of care for wound and scar management in dermatologic and plastic surgery procedures. Documents HOCl's activity against bacterial biofilm, its ability to increase wound oxygenation, and its effectiveness in preventing hypertrophic and keloid scarring — with a superior safety profile compared to traditional antiseptics.</div>
      <div class="study-card-tags"><span class="study-tag">Wound Care</span><span class="study-tag">Scar Management</span><span class="study-tag">Surgery</span></div>
      <a class="study-link" href="https://pubmed.ncbi.nlm.nih.gov/31904191/" target="_blank" rel="noopener">View on PubMed ↗</a>
    </div>
    <div class="study-card" style="border-left:3px solid #E8A84A">
      <div class="study-card-title">HOCl Peritoneal Lavage Reduces Surgical Site Infection After Exploratory Laparotomy — Randomized Controlled Trial</div>
      <div class="study-card-meta">Institutional Ethics Committee Approved RCT — <em>Clinical Trials Registry of India (CTRI/2024/12/078118)</em> (2025)</div>
      <div class="study-card-finding">Prospective randomized controlled trial. HOCl group showed 20.3% surgical site infection rate vs 39.2% in the saline group — a 19% absolute risk reduction. By day 15, 79% of HOCl patients showed complete wound healing versus 50% in the control group. All HOCl wounds healed completely by day 30. No adverse reactions or resistant organisms identified.</div>
      <div class="study-card-tags"><span class="study-tag">Wound Care</span><span class="study-tag">Surgery</span><span class="study-tag">Infection Prevention</span><span class="study-tag">RCT</span></div>
      <a class="study-link" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12676504/" target="_blank" rel="noopener">View on PMC ↗</a>
    </div>
    <div class="study-card" style="border-left:3px solid #E8A84A">
      <div class="study-card-title">HOCl Solution Reduces Staphylococcus Aureus and Improves Bacterial Diversity in Epidermolysis Bullosa Wounds</div>
      <div class="study-card-meta">Pilot Study — <em>PMC (2025)</em></div>
      <div class="study-card-finding">15 patients with epidermolysis bullosa (a severe genetic skin fragility disorder with chronic infected wounds). At baseline 87% were culture-positive for S. aureus. HOCl spray applied daily for 8 weeks significantly reduced S. aureus colonization and restored healthier microbiome diversity. Demonstrates HOCl's ability to kill pathogens while preserving and improving the beneficial microbial ecosystem — consistent with its mechanism as the immune system's own antimicrobial.</div>
      <div class="study-card-tags"><span class="study-tag">Wound Care</span><span class="study-tag">Microbiome</span><span class="study-tag">Skin Health</span></div>
      <a class="study-link" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12349993/" target="_blank" rel="noopener">View on PMC ↗</a>
    </div>
    <div class="study-card" style="border-left:3px solid #E8A84A">
      <div class="study-card-title">Reduction in Bacterial Load Using HOCl Hygiene Solution on Ocular Skin</div>
      <div class="study-card-meta">Stroman DW, et al. — <em>Clinical Ophthalmology</em> (2017)</div>
      <div class="study-card-finding">HOCl reduced bacterial load on ocular (eyelid) skin by more than 90% without altering the diversity of beneficial bacterial species. Establishes HOCl's selectivity in ophthalmological contexts — killing pathogenic bacteria while preserving the commensal microbiome. Directly relevant to the ionizer's pH 2.5 output for eye hygiene and blepharitis.</div>
      <div class="study-card-tags"><span class="study-tag">Ophthalmology</span><span class="study-tag">Eye Health</span><span class="study-tag">Microbiome</span></div>
      <a class="study-link" href="https://pubmed.ncbi.nlm.nih.gov/28442888/" target="_blank" rel="noopener">View on PubMed ↗</a>
    </div>
    <div class="study-card" style="border-left:3px solid #E8A84A">
      <div class="study-card-title">HOCl Hypochlorous Acid Applications in Dermatology: Infection Prevention, Wound Care, Scar Management & Atopic Dermatitis</div>
      <div class="study-card-meta">Natarelli N — <em>Journal of Integrative Dermatology</em> (2024)</div>
      <div class="study-card-finding">Reviews dermatology-specific HOCl applications including infection prevention, wound care, scar management, inflammatory modulation, atopic dermatitis, and pruritus. Documents the mechanism of NF-κB pathway modulation (the same inflammatory signaling targeted by many pharmaceutical anti-inflammatories) and positions HOCl as a versatile dermatological agent with a favorable safety profile across all skin types.</div>
      <div class="study-card-tags"><span class="study-tag">Dermatology</span><span class="study-tag">Eczema</span><span class="study-tag">Wound Care</span><span class="study-tag">Anti-Inflammatory</span></div>
      <a class="study-link" href="https://jintegrativederm.org/doi/10.64550/joid.1d4y5r09" target="_blank" rel="noopener">View on Journal of Integrative Dermatology ↗</a>
    </div>

        <div class="studies-disclaimer">
      <strong>A note on the full research database:</strong> The majority of published molecular hydrogen research consists of animal studies, in vitro (cell culture) experiments, and human observational studies — all valuable for understanding mechanisms and generating hypotheses, but not equivalent to double-blind RCTs in confirming clinical benefit. The nine gold standard studies above are the confirmed human double-blind RCTs on hydrogen-rich water drinking water specifically. The 61 HOCl clinical studies referenced above represent original clinical research only — the full HOCl literature including animal studies and in vitro work is substantially larger. Additional human RCTs using hydrogen inhalation, injection, or other delivery methods also exist within the literature. The full database is searchable at PubMed using the search term "molecular hydrogen" or at <a href="https://www.molecularhydrogenstudies.com" target="_blank" rel="noopener" style="color:var(--ws-sage)">molecularhydrogenstudies.com</a>.
    </div>
  `;
}

// ── CLAIM ID → TITLE MAP ──────────────────────────────────────────────────────
const ALL_CLAIMS = [];
Object.keys(CLAIMS).forEach(cat => CLAIMS[cat].forEach(c => ALL_CLAIMS.push({...c, cat})));
const CLAIM_TITLE_MAP = {};
ALL_CLAIMS.forEach(c => { CLAIM_TITLE_MAP[c.id] = c.title; });

// ── BADGE / PILL HELPERS ──────────────────────────────────────────────────────
const BADGE_STYLES = {
  "pH 9.5 Alkaline":     { bg:"#D6EBE0", text:"#2E6650", border:"#9DCDB5" },
  "pH 5.5 Beauty Water": { bg:"#FBF0D8", text:"#7A5015", border:"#DDBA80" },
  "pH 11+ Alkaline":     { bg:"#EAE8F5", text:"#4A3880", border:"#C0B8E0" },
  "pH 2.5 HOCl":         { bg:"#F5E8E8", text:"#6A2020", border:"#CCAAAA" },
  "HOCl Mechanism":      { bg:"#F5E8E8", text:"#6A2020", border:"#CCAAAA" },
  "Microbiome":          { bg:"#D6EBE0", text:"#2E6650", border:"#9DCDB5" },
  "Technology":          { bg:"#DDE8F5", text:"#204060", border:"#90B8D8" },
  "Science":             { bg:"#FAECE6", text:"#603020", border:"#D8A888" }
};
function getBadgeStyle(badge) {
  return BADGE_STYLES[badge] || { bg:"#F0EBE3", text:"#4A4238", border:"#C8C0B0" };
}

function phClass(ph) {
  if (ph==="7.0") return "ph-neutral";
  if (ph==="8.0") return "ph-slightAlk";
  if (ph==="9.5") return "ph-alkaline";
  if (ph==="11+") return "ph-strongAlk";
  if (ph==="5.5") return "ph-acidic";
  if (ph==="5.5+2.5") return "ph-multiPh";
  if (ph==="2.5") return "ph-strongAcid";
  return "ph-alkaline";
}
function pillClass(ph) {
  if (ph==="7.0") return "pill-neutral";
  if (ph==="8.0") return "pill-slightAlk";
  if (ph==="9.5") return "pill-alkaline";
  if (ph==="11+") return "pill-strongAlk";
  if (ph==="5.5") return "pill-acidic";
  if (ph==="5.5+2.5") return "pill-multiPh";
  if (ph==="2.5") return "pill-strongAcid";
  return "pill-alkaline";
}
function fmtSavings(lo, hi) {
  if (lo === hi) return "$" + lo.toLocaleString() + "/yr";
  return "$" + lo.toLocaleString() + "–$" + hi.toLocaleString() + "/yr";
}

// ── STATE ─────────────────────────────────────────────────────────────────────
let activeTab = "uses";
let fPh = "all";
let fCat = "all";
let searchQ = "";
let activeClaimsCat = "health";

// ── CATEGORY CHIPS INIT ───────────────────────────────────────────────────────
function initCatChips() {
  const cats = [...new Set(USES.map(u => u.category))].sort();
  const container = document.getElementById("catChips");
  cats.forEach(c => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.dataset.f = "cat";
    chip.dataset.v = c;
    chip.textContent = c;
    container.appendChild(chip);
  });
}

// ── RENDER USES ───────────────────────────────────────────────────────────────
function renderUses(targetGrid, data) {
  const grid = targetGrid || document.getElementById("cardsGrid");
  const items = data || USES.filter(u => {
    if (fPh !== "all" && u.ph !== fPh) return false;
    if (fCat !== "all" && u.category !== fCat) return false;
    return true;
  });

  if (!items.length) {
    grid.innerHTML = '<div class="empty"><div class="empty-glyph">◌</div><h3>No uses found</h3><p>Try different filters</p></div>';
    if (!targetGrid) document.getElementById("resultsMeta").textContent = "No uses match";
    return;
  }

  if (!targetGrid) {
    document.getElementById("resultsMeta").textContent = "Showing " + items.length + " of " + USES.length + " uses";
    document.getElementById("usesTabBadge").textContent = items.length;
  }

  grid.innerHTML = items.map((u, i) => {
    const claimTitle = CLAIM_TITLE_MAP[u.claimId];
    return `<div class="${phClass(u.ph)}" style="animation-delay:${Math.min(i * 0.02, 0.35)}s">
      <div class="use-card">
        <div class="card-top">
          <div class="card-title">${u.use}</div>
          <span class="ph-pill ${pillClass(u.ph)}">pH ${u.ph}</span>
        </div>
        <div class="card-meta">${u.phLabel} &middot; ${u.category}</div>
        <div class="card-replaces-label">replaces, augments, or supports:</div>
        <div class="card-replaces">${u.replaces}</div>
        <div class="card-foot">
          <span class="savings">saves ${fmtSavings(u.savingsLow, u.savingsHigh)}</span>
          ${claimTitle ? `<span class="claim-link" onclick="goToClaim('${u.claimId}')">why this works <span class="claim-link-arrow">→</span></span>` : ""}
          ${USE_PROTO_MAP[u.num] ? `<span class="proto-link" onclick="goToProtocol('${USE_PROTO_MAP[u.num].id}')">see protocol <span class="proto-link-arrow">→</span></span>` : ""}
        </div>
      </div>
    </div>`;
  }).join("");
}

// ── RENDER CLAIMS ─────────────────────────────────────────────────────────────
const CAT_CONFIG = [
  { id:"health",  label:"Health Claims",   dot:"#4E7260", bg:"#D6EBE0" },
  { id:"home",    label:"Home & Space",     dot:"#B07A1A", bg:"#F5EDD6" },
  { id:"tyent",   label:"The Technology",  dot:"#2E5F8A", bg:"#DDE8F5" },
  { id:"science", label:"Science Library", dot:"#8A3E2E", bg:"#FAEDE9" }
];

function initCatNav() {
  const nav = document.getElementById("catNav");
  nav.innerHTML = CAT_CONFIG.map(c => `
    <button class="cat-btn${c.id === activeClaimsCat ? ' active' : ''}"
      data-cat="${c.id}"
      style="${c.id === activeClaimsCat ? 'background:' + c.bg + ';border-color:' + c.dot + ';color:#2C2820;' : ''}"
      onclick="setClaimsCat('${c.id}')">
      <span class="dot" style="background:${c.id === activeClaimsCat ? c.dot : '#C8C0B0'}"></span>
      ${c.label}
      <span class="cat-btn-count">${CLAIMS[c.id].length}</span>
    </button>
  `).join("");
}

function setClaimsCat(catId) {
  activeClaimsCat = catId;
  initCatNav();
  renderClaims();
}

function renderClaims(targetGrid, data, searchMode) {
  const grid = targetGrid || document.getElementById("claimsGrid");
  const items = data || CLAIMS[activeClaimsCat] || [];
  const filtered = items.filter(c => {
    if (!searchQ) return true;
    const q = searchQ.toLowerCase();
    return c.title.toLowerCase().includes(q) ||
      (c.summary || "").toLowerCase().includes(q) ||
      (c.simple || "").toLowerCase().includes(q) ||
      (c.tags || []).some(t => t.toLowerCase().includes(q));
  });

  if (!targetGrid && !searchMode) {
    var catLabel = { health:"Health", home:"Home & Space", tyent:"Technology", science:"Science Library" };
    const meta = document.getElementById("claimsResultsMeta");
    if (meta) meta.textContent = (catLabel[activeClaimsCat] || activeClaimsCat) + " — " + filtered.length + " claim" + (filtered.length !== 1 ? "s" : "");
  }

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty"><div class="empty-glyph">◌</div><h3>No claims found</h3><p>Try a different search</p></div>';
    return;
  }

  grid.innerHTML = filtered.map((claim, i) => {
    const bs = getBadgeStyle(claim.badge);
    return `
    <div class="claim-card" id="cc-${claim.id}" style="border:1px solid rgba(120,100,75,0.16); animation-delay:${Math.min(i * 0.025, 0.4)}s">
      <div class="claim-head" onclick="toggleClaim('${claim.id}')">
        <div>
          <div class="claim-title">${claim.title}</div>
          <span class="claim-badge" style="background:${bs.bg};color:${bs.text};border:1px solid ${bs.border}">${claim.badge}</span>
          <div class="claim-summary">${claim.summary}</div>
          <div class="claim-tags">${(claim.tags||[]).map(t => `<span class="ctag">${t}</span>`).join("")}</div>
        </div>
        <div class="claim-toggle" id="ct-${claim.id}">+</div>
      </div>
      <div class="claim-body" id="cb-${claim.id}">
        <div class="content-tabs">
          <button class="ctab active" data-t="simple" onclick="switchCtab('${claim.id}', 'simple', event)">In plain words</button>
          <button class="ctab" data-t="scientific" onclick="switchCtab('${claim.id}', 'scientific', event)">The science</button>
          <button class="ctab" data-t="sources" onclick="switchCtab('${claim.id}', 'sources', event)">Research & sources</button>
        </div>
        <div class="claim-panel active" id="cp-${claim.id}-simple">
          <div class="panel-box simple">${claim.simple || ""}</div>
        </div>
        <div class="claim-panel" id="cp-${claim.id}-scientific">
          <div class="panel-box scientific">${claim.scientific || ""}</div>
        </div>
        <div class="claim-panel" id="cp-${claim.id}-sources">
          <div class="panel-box sources">
            <ul class="source-list">
              ${(claim.sources||[]).map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.label}</a></li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>`;
  }).join("");
}

// ── CLAIM INTERACTIONS ────────────────────────────────────────────────────────
function toggleClaim(id) {
  const body = document.getElementById("cb-" + id);
  const toggle = document.getElementById("ct-" + id);
  const card = document.getElementById("cc-" + id);
  if (!body || !toggle || !card) return;
  const isOpen = body.classList.toggle("open");
  toggle.textContent = isOpen ? "−" : "+";
  card.style.borderColor = isOpen ? "rgba(120,100,75,0.28)" : "rgba(120,100,75,0.16)";
  card.style.boxShadow = isOpen ? "0 4px 20px rgba(60,45,25,0.12)" : "";
}

function switchCtab(claimId, tabId, event) {
  event.stopPropagation();
  const body = document.getElementById("cb-" + claimId);
  if (!body) return;
  body.querySelectorAll(".ctab").forEach(t => t.classList.remove("active"));
  body.querySelectorAll(".claim-panel").forEach(p => p.classList.remove("active"));
  event.target.classList.add("active");
  const panel = document.getElementById("cp-" + claimId + "-" + tabId);
  if (panel) panel.classList.add("active");
}

// ── NAVIGATE TO CLAIM FROM USE ────────────────────────────────────────────────
function goToClaim(claimId) {
  // Find which cat this claim belongs to
  let targetCat = null;
  Object.keys(CLAIMS).forEach(cat => {
    if (CLAIMS[cat].find(c => c.id === claimId)) targetCat = cat;
  });
  if (!targetCat) return;

  // Switch to claims tab and render
  switchTab("claims");
  activeClaimsCat = targetCat;
  initCatNav();
  renderClaims();

  // Wait for DOM to fully paint then scroll and open
  function openCard() {
    const card = document.getElementById("cc-" + claimId);
    if (!card) {
      // Retry once more if card not found yet
      setTimeout(openCard, 150);
      return;
    }
    // Open the card body first
    const body = document.getElementById("cb-" + claimId);
    const toggle = document.getElementById("ct-" + claimId);
    if (body && toggle && !body.classList.contains("open")) {
      body.classList.add("open");
      toggle.textContent = "−";
      card.style.borderColor = "rgba(120,100,75,0.28)";
    }
    // Then scroll after a brief paint delay
    setTimeout(() => {
      card.scrollIntoView({ behavior: "smooth", block: "start" });
      card.classList.add("highlighted");
      setTimeout(() => card.classList.remove("highlighted"), 2500);
    }, 50);
  }
  setTimeout(openCard, 120);
}

// ── SEARCH ────────────────────────────────────────────────────────────────────
function runSearch(q) {
  searchQ = q.trim();
  const normalView = document.getElementById("normalView");
  const searchWrap = document.getElementById("searchResultsWrap");

  if (!searchQ) {
    searchWrap.style.display = "none";
    normalView.style.display = "";
    renderUses();
    renderClaims();
    return;
  }

  normalView.style.display = "none";
  normalView.style.gridTemplateColumns = "240px 1fr";
  searchWrap.style.display = "block";
  searchWrap.style.width = "100%";

  // Search uses
  const ql = searchQ.toLowerCase();
  const usesMatches = USES.filter(u =>
    u.use.toLowerCase().includes(ql) ||
    u.category.toLowerCase().includes(ql) ||
    u.replaces.toLowerCase().includes(ql) ||
    u.ph.includes(ql) ||
    u.phLabel.toLowerCase().includes(ql)
  );

  const usesSection = document.getElementById("srUsesSection");
  const usesGrid = document.getElementById("srUsesGrid");
  document.getElementById("srUsesCount").textContent = "(" + usesMatches.length + ")";
  if (usesMatches.length) {
    usesSection.style.display = "";
    renderUses(usesGrid, usesMatches);
  } else {
    usesSection.style.display = "none";
  }

  // Search ALL claims across all categories
  const claimMatches = ALL_CLAIMS.filter(c =>
    c.title.toLowerCase().includes(ql) ||
    (c.summary || "").toLowerCase().includes(ql) ||
    (c.simple || "").toLowerCase().includes(ql) ||
    (c.tags || []).some(t => t.toLowerCase().includes(ql))
  );

  const claimsSection = document.getElementById("srClaimsSection");
  const claimsGrid = document.getElementById("srClaimsGrid");
  document.getElementById("srClaimsCount").textContent = "(" + claimMatches.length + ")";
  if (claimMatches.length) {
    claimsSection.style.display = "";
    renderClaims(claimsGrid, claimMatches, true);
  } else {
    claimsSection.style.display = "none";
  }

  // Search protocols
  var protoMatches = PROTOCOLS.filter(function(p) {
    return p.title.toLowerCase().includes(ql) ||
      p.condition.toLowerCase().includes(ql) ||
      (p.summary||'').toLowerCase().includes(ql) ||
      p.tags.some(function(t){ return t.toLowerCase().includes(ql); }) ||
      p.steps.some(function(s){ return s.phase.toLowerCase().includes(ql)||s.action.toLowerCase().includes(ql); });
  });
  var protosSection = document.getElementById("srProtosSection");
  var protosGrid = document.getElementById("srProtosGrid");
  document.getElementById("srProtosCount").textContent = "(" + protoMatches.length + ")";
  if (protoMatches.length) { protosSection.style.display = ""; renderProtocols(protosGrid, protoMatches); }
  else { protosSection.style.display = "none"; }

  if (!usesMatches.length && !claimMatches.length && !protoMatches.length) {
    searchWrap.innerHTML = '<div class="empty"><div class="empty-glyph">◌</div><h3>No results found</h3><p>Try a different search term</p></div>';
  }
}

// ── TAB SWITCHING ─────────────────────────────────────────────────────────────
function switchTab(tab) {
  activeTab = tab;
  searchQ = "";
  const searchInput = document.getElementById("mainSearch");
  const searchWrap = document.getElementById("searchResultsWrap");
  const normalView = document.getElementById("normalView");
  if (searchInput) searchInput.value = "";
  if (searchWrap) searchWrap.style.display = "none";
  if (normalView) normalView.style.display = "";

  document.querySelectorAll(".top-tab").forEach(t => {
    t.classList.toggle("active", t.dataset.tab === tab);
  });
  const usesView = document.getElementById("usesView");
  const claimsView = document.getElementById("claimsView");
  const protocolsView = document.getElementById("protocolsView");
  const sidebarEl = document.getElementById("sidebarEl");
  const mainEl = document.getElementById("mainEl");
  if (usesView) usesView.style.display      = tab === "uses"      ? "" : "none";
  if (claimsView) claimsView.style.display  = tab === "claims"    ? "" : "none";
  if (protocolsView) protocolsView.style.display = tab === "protocols" ? "" : "none";
  var studiesView = document.getElementById("studiesView");
  if (studiesView) studiesView.style.display = tab === "studies" ? "" : "none";
  if (sidebarEl) sidebarEl.style.display    = tab === "uses"      ? "" : "none";
  if (mainEl) mainEl.style.gridColumn       = tab === "uses"      ? "" : "1 / -1";
  if (normalView) normalView.style.gridTemplateColumns = tab === "uses" ? "240px 1fr" : "1fr";

  if (tab === "claims") { initCatNav(); renderClaims(); }
  if (tab === "protocols") { renderProtocols(); }
  if (tab === "studies") { renderStudies(); }
}

// ── START (only on pages that include the app) ─────────────────────────
function startWellspringApp() {
  if (!document.getElementById("wsApp")) return;
  // ── EVENTS ────────────────────────────────────────────────────────────────────
  document.getElementById("mainSearch").addEventListener("input", e => {
    runSearch(e.target.value);
  });

  document.querySelectorAll(".top-tab").forEach(tab => {
    tab.addEventListener("click", () => switchTab(tab.dataset.tab));
  });

  document.addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip || !chip.dataset.f) return;
    const { f, v } = chip.dataset;
    if (f === "ph") {
      fPh = v;
      document.querySelectorAll("[data-f='ph']").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
    }
    if (f === "cat") {
      fCat = v;
      document.querySelectorAll("[data-f='cat']").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
    }
    renderUses();
  });

  // ── INIT ──────────────────────────────────────────────────────────────────────
  initCatChips();
  renderUses();
  initCatNav();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startWellspringApp);
} else {
  startWellspringApp();
}
