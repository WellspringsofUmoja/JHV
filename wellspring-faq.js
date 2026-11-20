/* =========================================================
   wellspring-faq.js — Gather by the Wellspring FAQ (in-page version)
   Built from the standalone FAQ app so it lives directly inside a page.
   It only starts if the page has <div id="wsFaq">.

   TO ADD A QUESTION: copy one { id, category, q, a } block in the
   list below, give it a new id number, and pick one of the
   category ids from WS_FAQ_CATEGORIES.
   ========================================================= */

var WS_FAQ_CATEGORIES = [
  { id: "all",     label: "All FAQs" },
  { id: "basics",  label: "The Basics" },
  { id: "using",   label: "Using the Water" },
  { id: "health",  label: "Health & Medical" },
  { id: "tyent",   label: "Tyent Specific" },
  { id: "fiction", label: "Fact or Fiction" },
  { id: "versus",  label: "Tyent vs. Kangen" }
];

var WS_FAQS = [
  // ── BASICS ──────────────────────────────────────────────────────────────────
  {
    id: 1,
    category: "basics",
    q: "What is a water ionizer?",
    a: "A water ionizer is a device that separates tap water into alkaline and acidic streams of ionized water using the process of electrolysis. Water ionizers deliver an electrical charge to your water using a series of positively and negatively charged electrodes. The water containing the alkaline minerals and negatively charged ions are drawn to one outlet, and the water containing acidic minerals and positively charged ions are drawn to another — creating the alkaline and acidic ionized streams."
  },
  {
    id: 2,
    category: "basics",
    q: "How does a water ionizer work?",
    a: "Water ionizers deliver an electrical charge to your water using a series of positively and negatively charged electrodes. The water containing the alkaline minerals and negatively charged ions are drawn to one outlet on the unit, and the water containing acidic minerals and positively charged ions are drawn to another — creating the alkaline and acidic ionized streams."
  },
  {
    id: 3,
    category: "basics",
    q: "How can ionized water help improve my health?",
    a: "Ionized alkaline water contains negatively charged ions and alkaline minerals that reduce cell-damaging free radicals in your body, helping to restore and maintain a healthy pH balance. The antioxidant properties of the water are absorbed by cells quickly, making it more effective than many supplement alternatives."
  },
  {
    id: 4,
    category: "basics",
    q: "Are there any side effects from drinking ionized water?",
    a: "When first drinking ionized water, you may notice some symptoms of detox as the water pulls toxins from your system. Headaches, mild cold-like symptoms, and more frequent trips to the bathroom are not uncommon when you first start — after that, the only real side effects people notice are increased energy, improved immune system function, and overall better health."
  },
  {
    id: 5,
    category: "basics",
    q: "What is ORP?",
    a: "ORP stands for 'Oxidation Reduction Potential' — it refers to a substance's ability to reduce oxidation. In ionized water, ORP refers to the level of negative and positive ions available in the water. The higher the negative number, the stronger the antioxidant power. Most tap and bottled water has a positive ORP, meaning it has no antioxidant potential. Tyent ionized water can reach ORP as strong as -800 mV."
  },
  {
    id: 6,
    category: "basics",
    q: "How long after I start drinking ionized water will I start noticing results?",
    a: "Most people start noticing results within the first day or so after they start drinking the water. The first thing most people notice is an increase in energy levels — both mental and physical. A headache or feeling like you're coming down with a cold are actually signs that the water is working — these are common symptoms of detox and are some of the ways your body deals with releasing excess toxins."
  },
  {
    id: 7,
    category: "basics",
    q: "Won't the alkalinity of the water just be neutralized when it hits the acids in my stomach?",
    a: "Yes it will — and drinking ionized alkaline water can also neutralize some of the acids in your stomach. However, the greatest benefits of the water come from the antioxidant properties, which are absorbed by the cells very quickly before the water even reaches the stomach in full."
  },
  {
    id: 8,
    category: "basics",
    q: "Why does it matter how many pH levels I can get?",
    a: "The ability to produce multiple pH levels with a water ionizer increases the number of uses and lets you get the most out of your investment. Pets and small children should typically only be given water at the lower pH levels. 9.5 pH is most often recommended for drinking by adults. Stronger alkaline levels can be used to remove dirt and pesticides from produce, and having access to acidic pH levels provides water that can be used as a skin toner, mouthwash, household cleaner, and for treating minor cuts, scrapes, burns, and insect bites."
  },
  {
    id: 9,
    category: "basics",
    q: "If I'm not supposed to drink really strong alkaline water, why do I need a water ionizer that can make water that strong?",
    a: "Higher pH levels are used for removing dirt, pesticides, and preservatives on the surface of fresh produce. They can also enhance the flavor of foods like tomatoes and strawberries, make better teas and coffee, and replace chemical cleaners used to remove stains from carpet and upholstery — without leaving behind chemical residues."
  },
  {
    id: 10,
    category: "basics",
    q: "If I can't drink alkaline water close to meals or with medications, won't I still need to buy bottled water?",
    a: "No — Tyent water ionizers have an H2O setting that filters the water but does not ionize it or significantly change the alkalinity. This setting was included specifically for use at mealtimes, when taking prescription medications, or for mixing baby formula."
  },
  {
    id: 11,
    category: "basics",
    q: "If ionized alkaline water is so good for me, why would I want to have acidic water too?",
    a: "Acidic water can be used to treat common skin conditions like athlete's foot, eczema, acne, and bed sores. It's also effective for treating mouth ulcers, bleeding gums, and as a first aid treatment for minor cuts, scrapes, burns, and insect bites and stings. At the strongest levels it can be used to disinfect surfaces — many companies are now turning to acidic ionized water as an alternative to chemical disinfectants."
  },
  {
    id: 12,
    category: "basics",
    q: "If I get a water ionizer will I need a plumber to install it?",
    a: "If you can connect a DVD player to a TV then you can probably install a water ionizer yourself. Countertop installations only require replacing the aerator on your faucet with the diverter provided, connecting two hoses to the machine, and plugging it in. Under-counter installations are a little more involved but most people can do this without any prior plumbing experience."
  },
  {
    id: 13,
    category: "basics",
    q: "Is this water ionizer thing just a fad?",
    a: "No. Ionized water has been used to treat numerous diseases in medical facilities all across Asia for decades. In the United States there are a growing number of health care professionals, particularly those with patients suffering from age-related diseases, who have been using and recommending ionized water for many years. Ionized water has also grown in popularity with athletes because of the water's ability to better hydrate the body, replenish electrolytes, and reduce acids produced by extreme muscle exertion."
  },
  {
    id: 14,
    category: "basics",
    q: "Why is ionized water better than bottled water?",
    a: "Ionized water is full of antioxidants and microclustered for better absorption by your body, better hydration, and elimination of acidic waste and toxins. Most bottled water is slightly acidic and poorly absorbed. Fresh ionized water from a home ionizer will always have stronger antioxidant properties than bottled alkaline water, and you won't be contributing to plastic bottle waste."
  },
  {
    id: 15,
    category: "basics",
    q: "Is it okay to give ionized water to my children?",
    a: "Yes, but smaller children only need the lower levels of alkaline water. When they are sick or dehydrated from illness or excess physical activity, a few ounces of stronger alkaline water will help too."
  },
  {
    id: 16,
    category: "basics",
    q: "Is it okay to give ionized water to my pets?",
    a: "Yes — but most pets only need the lower level of alkaline water, and you don't want to give it to them at or near mealtimes. If your pet is sick or old and suffering from a chronic illness, giving them some alkaline water at the stronger levels every day can be beneficial as well."
  },
  {
    id: 17,
    category: "basics",
    q: "How long do the filters last?",
    a: "In most cases the filters in your Tyent water ionizer will last six to nine months — it varies based on how much you use the unit and the quality of your source water, but six to nine months is the average."
  },
  {
    id: 18,
    category: "basics",
    q: "Is financing available?",
    a: "Yes — Tyent has a lease program and works with a company that helps find financing for qualified buyers. Finance options are available through MedLoan Finance — contact your dedicated account representative about availability and requirements."
  },
  {
    id: 19,
    category: "basics",
    q: "Is there anyone who shouldn't drink ionized water?",
    a: "Yes — anyone who is being treated for chronic or severe kidney problems or on dialysis should not drink ionized water."
  },
  {
    id: 20,
    category: "basics",
    q: "I've got a pull-out sprayer type of faucet, can I still hook up a water ionizer?",
    a: "You can, but you will need a special adapter to make the connection. Most home improvement stores carry the part you need — just take the faucet diverter that came with your water ionizer along with the brand and model of your faucet to your local home improvement store. Alternatively, you can connect your water ionizer directly to the cold water line under the sink."
  },

  // ── USING THE WATER ──────────────────────────────────────────────────────────
  {
    id: 21,
    category: "using",
    q: "How much ionized water should I drink?",
    a: "At the very least you should be drinking eight 8-ounce glasses of water a day. Some recommend drinking half your body weight in ounces per day. On average, about two liters per day is recommended. The body is made up of about 70% water, so the more you drink the better."
  },
  {
    id: 22,
    category: "using",
    q: "Can I take my prescription medication with ionized water?",
    a: "No — you should only use water at the H2O setting of your water ionizer when taking prescription medications. You should also allow a 45-minute window both before and after taking prescription medications. Ionized water is very effectively absorbed by the body and can interfere with the speed at which prescription medications are released into your system."
  },
  {
    id: 23,
    category: "using",
    q: "Can I take my vitamins and nutritional supplements with ionized water?",
    a: "Yes — taking most supplements with ionized water will help your body absorb them better so you get more out of them. Some people claim to have reduced the dosage of nutritional supplements because they seem to work better with ionized water. Note: Stand-alone Niacin supplements of 75mg or more should only be taken with water at the H2O setting."
  },
  {
    id: 24,
    category: "using",
    q: "If I make coffee or cook with ionized alkaline water, will my coffee be alkaline?",
    a: "No. The benefit of making coffee with ionized water is the water's ability to draw the flavor from the coffee grounds more effectively while neutralizing some of the acidity. Your coffee will likely have a bolder, smoother flavor — many people find they need to use less coffee when using ionized water — but in the end, your coffee will still be acidic."
  },
  {
    id: 25,
    category: "using",
    q: "What happens if I accidentally drink water from one of the acidic levels?",
    a: "You'll probably notice the difference in taste right away and won't drink too much. Even if you do drink a full bottle of acidic water, it is chemical free and will cause less damage than drinking an eight-ounce glass of soda."
  },
  {
    id: 26,
    category: "using",
    q: "Can I drink alkaline water close to meals or with medications?",
    a: "It's best not to drink alkaline water within 30 minutes before or after a meal, and 45 minutes before or after taking prescription medications. Tyent ionizers have an H2O setting that produces filtered, non-ionized water specifically for these situations."
  },
  {
    id: 27,
    category: "using",
    q: "Can I drink water that comes from the drain hose?",
    a: "Yes and no. When your Tyent water ionizer is set to produce acidic water, the water that comes from the drain hose is alkaline and, depending on the pH level, it can be saved for drinking. When your ionizer is set to produce alkaline water, the drain hose water will be acidic and should not be used for drinking — but it is ideal for watering plants or cleaning around the house."
  },
  {
    id: 28,
    category: "using",
    q: "What should I do with the water that comes out of the drain hose?",
    a: "The water from the drain hose can be collected and used for watering plants or put into a spray bottle for quick cleanups around the house. It can also be used as a skin toner for the face and body, and is effective as a hair rinse — making hair softer, smoother, shinier, and more manageable."
  },
  {
    id: 29,
    category: "using",
    q: "I have an elderly relative on a lot of medications — is it safe for her to drink ionized water?",
    a: "Yes — just be sure not to let her have ionized water 45 minutes before or after she takes prescription medication."
  },
  {
    id: 30,
    category: "using",
    q: "How long will ionized water last if I store it in a bottle?",
    a: "If the bottle is well insulated, the properties of the water can last up to several weeks. However, every time you open the bottle you are exposing the water to free radicals and it will begin to lose its alkalinity and ORP. In a regular BPA-free plastic bottle kept out of heat and light, it can take up to 7 days for the water to lose its alkalinity. The water has the strongest benefits when it has just been produced by your Tyent water ionizer."
  },
  {
    id: 31,
    category: "using",
    q: "Can I drink ionized water all day?",
    a: "Yes — except at or near mealtimes or when taking prescription medication. By drinking ionized alkaline water throughout the day you are providing your body with consistent hydration and a steady supply of antioxidants."
  },
  {
    id: 32,
    category: "using",
    q: "What pH level should I be drinking?",
    a: "When you first start drinking ionized water, begin at around an 8.5 pH. After a few days, once any detox symptoms have passed, move up to the 9.0 pH level. Give your body a few days to adjust, then move up to the 9.5 pH level — which you can drink at any time except at or near mealtime or when taking prescription medications."
  },
  {
    id: 33,
    category: "using",
    q: "How often will I need to test my water ionizer to make sure it's still working properly?",
    a: "It's a good idea to test the pH of your water ionizer at least once a year. If you're in a hard water area, you may want to test it before each filter change. The most common reason you'd see any loss of performance would be due to scale buildup on the electrodes — which can be easily removed by running a cleaning cartridge."
  },
  {
    id: 34,
    category: "using",
    q: "Why is ionized water better than distilled water?",
    a: "Distilled water pulls essential minerals out of the body, while ionized water helps put essential minerals found in tap water back into the body. Ionized water also offers an abundant supply of antioxidants to remove toxins and reduce acidity. Distilled water itself is not only acidic but is not well absorbed by the body."
  },
  {
    id: 35,
    category: "using",
    q: "Why should I pay so much for a water ionizer when I can just get a good water filtration system?",
    a: "A water filter removes common contaminants from the water, making it safer to drink. A water ionizer removes contaminants, microclusters the water molecules for better absorption, and creates negative ions — powerful antioxidants that reduce acidic waste and toxins in the body. A water ionizer also allows you to create water at multiple pH levels for a variety of uses, not just drinking."
  },
  {
    id: 36,
    category: "using",
    q: "Isn't eating an alkaline diet good enough?",
    a: "Eating an alkaline diet is a good start, but drinking ionized alkaline water actively supports and amplifies the effect. By eating an alkaline diet you're reducing the acids building up in your body. By drinking ionized alkaline water you are actively flushing excess acidic waste and toxins from your body. They work together just like diet and exercise."
  },
  {
    id: 37,
    category: "using",
    q: "Isn't water from a reverse osmosis filter better for you?",
    a: "No. Water from reverse osmosis systems is acidic and has no mineral content. The positive electrical charge, acidity, and unstructured water molecules are poorly absorbed by the body and do not offer the antioxidant properties or immune system support you get with ionized alkaline water. Many also believe that reverse osmosis water draws minerals from the body."
  },
  {
    id: 38,
    category: "using",
    q: "Why should I buy a water ionizer when I can just buy bottled alkaline water?",
    a: "In the long run, producing your own ionized alkaline water is more affordable — and you can use it for everything, not just drinking. Fresh ionized alkaline water from your own ionizer will always have stronger antioxidant properties than bottled alkaline water, and you won't be contributing to plastic waste. You can also use it for cooking, cleaning, and enhancing the flavor of foods."
  },
  {
    id: 39,
    category: "using",
    q: "Why should I buy a water ionizer when I can just buy alkaline drops?",
    a: "Alkaline drops have limits on how much you can use throughout the day, and you still have to rely on bottled water as a base. With a water ionizer you can produce as much water as you want — there is no limit to how much you can drink, giving your body a steady stream of alkaline antioxidant water all day long."
  },
  {
    id: 40,
    category: "using",
    q: "Aren't water ionizers just for people with health problems?",
    a: "No. While water ionizers are considered medical devices in many countries and are widely used to treat a number of diseases, they are also used to boost the immune system, reduce cellular damage that results in premature aging, and prevent buildup of acidic waste that stresses the circulatory system. Even professional athletes and people in overall good health notice a difference in their mental and physical energy levels and overall sense of wellbeing."
  },
  {
    id: 41,
    category: "using",
    q: "I have a healthy diet and exercise regularly — why should I get a water ionizer?",
    a: "You live a healthy lifestyle so that you can enjoy a healthier, longer life. A water ionizer lets you take that to the next level — more effective elimination of free radicals your body produces simply by digesting food, and the acids produced by muscles when you exercise. It also gives you healthier options for skin and hair care, healthy alternatives to chemical cleaners, and the ability to clean produce and enhance the flavor of your favorite healthy foods."
  },

  // ── HEALTH & MEDICAL ─────────────────────────────────────────────────────────
  {
    id: 42,
    category: "health",
    q: "Can ionized alkaline water cure my diabetes?",
    a: "Ionized water doesn't 'cure' diabetes, but it helps rid the body of toxins which cause poor organ function that can result in diseases like adult onset diabetes. As toxins are eliminated and pH balance is restored to healthier levels, many people find that they are no longer dependent on insulin, and some have reported that their physicians no longer see symptoms of diabetes during routine checkups."
  },
  {
    id: 43,
    category: "health",
    q: "Can ionized alkaline water cure my high blood pressure and cholesterol?",
    a: "Drinking ionized water helps clear the body of acids and toxins that are most often the cause of high blood pressure and unhealthy cholesterol levels. Many people who drink ionized alkaline water on a regular basis find that they have a reduced need for prescription medications to control their high blood pressure and cholesterol levels — or they are able to stop taking medications for this altogether."
  },
  {
    id: 44,
    category: "health",
    q: "Will I lose weight if I start drinking ionized water?",
    a: "Because ionized water hydrates the body better than tap or bottled water, people who have excess fluid retention will often lose weight within the first few days. Ionized water also helps hydrate stored fat cells so that more active people and those working to lose weight are able to burn fat more effectively."
  },
  {
    id: 45,
    category: "health",
    q: "Does ionized water cure cancer?",
    a: "Ionized water has been used in conjunction with both traditional and alternative cancer treatments because of its ability to help rid the body of toxins that encourage further development of the disease. It helps improve the health of cells and organ function, which can help the body fight the disease more effectively. Ionized water has been used in cancer treatment programs in Asia for decades."
  },
  {
    id: 46,
    category: "health",
    q: "Do I need to get pH test strips to make sure the water is working in my body?",
    a: "No. Most people feel a difference within the first day or two after they start drinking the water. pH test strips aren't necessary unless you want to closely monitor readings at a given time. You're not drinking ionized water to achieve a color on a test strip — you're drinking it to feel better. You don't need a test strip to tell you whether or not you feel healthier and more energetic."
  },

  // ── TYENT SPECIFIC ──────────────────────────────────────────────────────────
  {
    id: 47,
    category: "tyent",
    q: "What kind of maintenance does a Tyent water ionizer require?",
    a: "The only maintenance required is changing the filters and running a cleaning cartridge once or twice a year. Keeping the exterior of your Tyent water ionizer clean only requires a soft damp cloth."
  },
  {
    id: 48,
    category: "tyent",
    q: "What's in Tyent's filters?",
    a: "The first filter is primarily activated carbon for removing chlorine and other common contaminants. The second filter uses three types of ceramics for further contaminant removal and to precondition the water for ionization."
  },
  {
    id: 49,
    category: "tyent",
    q: "What contaminants do Tyent filters remove?",
    a: "Tyent filters remove contaminants including lead, chlorine, volatile organic compounds (VOCs), bacteria, and other common contaminants found in source water."
  },
  {
    id: 50,
    category: "tyent",
    q: "Why should I buy a Tyent water ionizer when there are so many others out there?",
    a: "Tyent water ionizers are the easiest to use, easiest to adjust, and offer the most flexibility to customize based on your daily usage. They are reliable, long-lasting, and have a strong reputation for customer service and overall customer satisfaction. The company stands behind the products with a lifetime warranty covering both parts and labor for as long as you own them."
  },
  {
    id: 51,
    category: "tyent",
    q: "Why should I buy an electric water ionizer instead of a non-electric one?",
    a: "Non-electric water ionizers do not create the same level of antioxidants in the water as an electric water ionizer. They do not give you the option to produce multiple levels of alkaline and acidic water for multiple uses, and they do not have a 'purified only' option for producing water that can be used at mealtimes or when taking prescription medications."
  },
  {
    id: 52,
    category: "tyent",
    q: "What makes Tyent's plate design better than competitors?",
    a: "Tyent uses hybrid plates that offer the durability of solid plates with the correct placement of electrolysis distribution vents for maximum electrical conductivity without sacrificing surface area. Tyent is the only water ionizer company in the United States using this highly conductive hybrid plate design. With 9 of the largest plates in the industry and up to 375 watts of power, Tyent produces the strongest ORP and widest pH range available."
  },
  {
    id: 53,
    category: "tyent",
    q: "What does Tyent's lifetime warranty actually cover?",
    a: "Tyent's Lifetime Warranty does not contain the word 'limited' because there are no limits. It covers both parts and labor for as long as you own the product, with no stipulations, no fine print, and no restrictions based on water type or usage volume. The only thing not covered is intentional or accidental physical damage from dropping the unit."
  },
  {
    id: 54,
    category: "tyent",
    q: "What certifications does Tyent have?",
    a: "Tyent water ionizers are certified as medical devices by the Korean Food and Drug Administration (KFDA) and are used by hundreds of doctors in Asia. The manufacturing facility is both ISO 9001 and ISO 14001 certified. Tyent USA products are also both CSA and UL approved for electrical safety."
  },
  {
    id: 55,
    category: "tyent",
    q: "What is 'Super Water' and can only Tyent make it?",
    a: "Tyent coined the term 'Super Water' — ionized water with a pH range of 2.5 to 12.0 that can be used for both cleaning and killing bacteria. Tyent is still the only machine with large enough plates and enough power to produce super water without chemicals in most source water areas. At pH 2.5, the water produces hypochlorous acid (HOCl) — 80-100x more effective than bleach as a disinfectant."
  },
  {
    id: 56,
    category: "tyent",
    q: "What is the PAST cleaning system?",
    a: "PAST stands for Polarity Anti Scale Technology — one of the most advanced cleaning systems in the industry. This automated cleaning cycle is triggered by both a timer and an internal sensor to ensure minimal mineral scale buildup on the electrodes, protecting long-term performance without any manual effort."
  },
  {
    id: 57,
    category: "tyent",
    q: "What is SMPS PLUS power and why does it matter?",
    a: "SMPS PLUS (Switched Managed Power Supply) is the same power technology used in flat panel televisions, laptop computers, and other modern electronics. It is reliable, does not get hot like old transformer power systems, and delivers the precise amount of electrical current based on user selection — ensuring efficient ionization at every pH setting."
  },

  // ── FACT OR FICTION ──────────────────────────────────────────────────────────
  {
    id: 58,
    category: "fiction",
    q: "Can a water ionizer really ionize water and separate it into alkaline and acidic streams? I've heard it's not possible.",
    a: "Yes — as long as the water has sufficient mineral content, Tyent water ionizers do this very effectively. Claims that water ionizers can't ionize the water are based on using water with low or no mineral content. If your source water doesn't have enough minerals to properly ionize, Tyent has a special filter that adds alkaline minerals to the water so it can be ionized."
  },
  {
    id: 59,
    category: "fiction",
    q: "Is it true that the plates in most water ionizers can melt?",
    a: "The plates used in any water ionizer can theoretically melt — but no water ionizer sold for in-home use is capable of generating enough heat to melt titanium. This claim is based on misunderstanding of the technology and the temperatures involved."
  },
  {
    id: 60,
    category: "fiction",
    q: "Is it true that people have gotten titanium poisoning from some water ionizers?",
    a: "So far no one has been able to confirm this rumor as being true. What has been confirmed are cases of titanium poisoning associated with poor quality dental and orthopedic implants — not water ionizers."
  },
  {
    id: 61,
    category: "fiction",
    q: "Is it true that ionized water is just hype and there are no real benefits?",
    a: "No. Much of the research on the benefits of ionized alkaline water has been done in Asia — primarily because water ionizers are so widely used there by medical professionals. Their research has shown numerous health benefits that support the claims made by water ionizer users here in the United States. Over 3,000 peer-reviewed studies have been published on molecular hydrogen."
  },
  {
    id: 62,
    category: "fiction",
    q: "Is it true that drinking ionized water isn't any different from drinking regular tap or bottled water?",
    a: "No. Research using control groups has consistently shown a difference between groups getting ionized alkaline water and those getting tap or bottled water. The difference is so noticeable that regular ionized water drinkers who stop drinking it notice a difference in their physical and mental energy levels after just a couple of days on bottled water."
  },

  // ── TYENT VS. KANGEN ─────────────────────────────────────────────────────────
  {
    id: 63,
    category: "versus",
    q: "What is the main difference between the Tyent ACE-13 and the Enagic K8 Kangen machine?",
    a: "The ACE-13 and K8 are both high-end water ionizers, but they differ significantly in hardware, chemistry, and price. The ACE-13 has 13 hybrid plates (solid/mesh combined) with 385 square inches of total surface area, produces a pH range of 1.7-12.5 and ORP up to -1150 mV, and generates over 1.8 ppm of molecular hydrogen — all without any chemical additives. The K8 has 8 solid plates, a pH range of 2.5-11.5, ORP up to -850 mV, and requires chemical additives to reach its extreme pH levels. The ACE-13 is also approximately $2,600 less expensive and carries a lifetime warranty versus the K8's 5-year limited warranty."
  },
  {
    id: 64,
    category: "versus",
    q: "Does the Kangen K8 use chemical additives? Why does that matter?",
    a: "Yes — and this is one of the most important differences that Kangen distributors rarely raise upfront. To produce pH 2.5 strong acidic water, the K8 requires an injection of sodium hypochlorite — liquid bleach — through a port on the side of the unit. To boost the alkaline side, Kangen also supports injection of glycerophosphoric acid calcium, a synthetic compound. There is also a third chemical you don't get a choice about: calcium sulphite is built into the filter itself, and all water produced by the machine passes through it. The Tyent ACE-13 produces its full pH range of 1.7 to 12.5 through electrolysis alone — no chemical additives at any setting. What goes in is tap water. What comes out is water and electrolysis. Nothing else."
  },
  {
    id: 65,
    category: "versus",
    q: "What is the difference between a transformer power supply (Kangen) and SMPS Plus (Tyent)?",
    a: "Kangen machines use an electronic circuit linked to a transformer — a fixed-ratio power conversion technology that cannot adjust voltage output. Transformers are the same technology used in older electronics and are prone to overheating. Tyent uses a Switch Mode Power Supply (SMPS Plus) that switches power on and off at very high frequency and adjusts the duty cycle to regulate output precisely. The practical results: more efficient power delivery to the plates, adjustable voltage to match different source water conditions (the ACE-13 has 99 presets per level), far less heat generated, and consistent ionization regardless of incoming water quality. The K8 produces its pH range within fixed parameters — the ACE-13 can be tuned to your specific source water because the power supply can actually adjust."
  },
  {
    id: 66,
    category: "versus",
    q: "How do the plates compare between Tyent ACE-13 and Kangen K8?",
    a: "The K8 has 8 solid platinum-dipped titanium plates. The ACE-13 has 13 Solid/Mesh Hybrid plates — dipped and baked multiple times in platinum — with 385 square inches of total surface area. The hybrid design is exclusive to Tyent in the US market: solid plates are durable but surface-limited; mesh plates have more surface area but are fragile; the hybrid combines the durability of solid plates with the surface area of mesh plates without the tradeoff. More plate surface area means stronger ionization, higher ORP, and more dissolved molecular hydrogen per liter."
  },
  {
    id: 67,
    category: "versus",
    q: "How does molecular hydrogen output compare between the two machines?",
    a: "The Kangen K8 produces up to approximately 1.0 ppm of dissolved molecular hydrogen in independent testing. The Tyent ACE-13 produces over 1.8 ppm — nearly double. This matters because the therapeutic threshold for molecular hydrogen begins at 0.5 ppm, and higher concentrations mean more antioxidant activity per liter consumed. The difference comes down to plate surface area and power supply: more plates at higher wattage dissolves more H2 into the water during electrolysis."
  },
  {
    id: 68,
    category: "versus",
    q: "How does the price of the Tyent ACE-13 compare to the Kangen K8?",
    a: "The Tyent ACE-13 is currently priced at $3,395 directly from Tyent, publicly listed, with a 75-day in-home trial. The Kangen K8 runs $5,980 or more through distributors, with no public price list. Independent analysts estimate that 30-40% of each Kangen machine's retail price goes to distributor commissions across Enagic's 8-tier MLM structure. The ACE-13 costs roughly $2,600 less, performs better on all technical specifications, and the price difference is not a hardware difference — it reflects Kangen's distribution model."
  },
  {
    id: 69,
    category: "versus",
    q: "How do the warranties compare between Tyent and Kangen?",
    a: "The Tyent ACE-13 comes with a Platinum Lifetime Warranty — parts and labor, no time limit, no conditions. The Kangen K8 comes with a 5-year limited warranty. Importantly, to remain eligible for Kangen warranty service, Enagic requires maintenance on the water cell at least twice a year using a cleaning cartridge not included with the machine. Miss the maintenance schedule and the warranty can be denied. Tyent's lifetime warranty has no such requirements — it covers the machine for as long as you own it, period."
  },
  {
    id: 70,
    category: "versus",
    q: "How does filtration compare between Tyent ACE-13 and Kangen K8?",
    a: "The K8 uses a single carbon block filter — effective for chlorine and heavy metals but limited on fluoride and chloramine removal. The Tyent ACE-13 uses dual ultra-filters at .01 micron, capable of removing over 200 contaminants. Better filtration before ionization means cleaner source water entering the electrolysis chamber — which produces cleaner, purer ionized water on both the alkaline and acidic outputs."
  },
  {
    id: 71,
    category: "versus",
    q: "Is Kangen an MLM? How is Tyent structured differently?",
    a: "Enagic, the company behind Kangen water machines, operates through an 8-tier MLM (multi-level marketing) distribution structure. Independent analysts estimate 30-40% of each machine's retail price goes to distributor commissions across those tiers — which is a significant reason the K8 costs nearly $6,000 for hardware that, technically speaking, is outperformed by the $3,395 Tyent ACE-13. Tyent is not an MLM. It sells directly and through authorized dealers at publicly listed prices. There is no multi-tier commission structure built into the price of the machine."
  },
  {
    id: 72,
    category: "versus",
    q: "If Kangen is more expensive and less powerful, why is it so well known?",
    a: "Kangen has been in the market longer and has built significant brand recognition through its MLM distribution model — that structure incentivizes a large network of passionate distributors to actively promote the product. The machines are well-built and do produce real ionized water with genuine health benefits. The issue is not that Kangen doesn't work — it's that the price premium is largely a function of the distribution model rather than the hardware, and the technical specifications are meaningfully outperformed by Tyent at a lower price point. Tyent has less name recognition because it sells direct rather than through a commission-incentivized network."
  },
  {
    id: 73,
    category: "basics",
    q: "Are hydrogen and alkalinity the same thing? Is one more important than the other?",
    a: "Great question — and no, they are not the same process. They happen simultaneously through electrolysis but are two distinct outcomes of the same event. When water passes through the ionizer's electrolysis chamber, electrical current splits water molecules across two electrode chambers separated by a membrane. At the negative electrode (cathode) — where the alkaline drinking water comes out — water molecules gain electrons, H2 gas is produced (the hydrogen benefit), and OH- hydroxide ions accumulate (the alkalinity). At the positive electrode (anode) — where the acidic water comes out — water molecules lose electrons, oxygen is produced, and H+ ions accumulate (the acidity). So hydrogen gas and alkalinity are both produced at the cathode side — born together from the same reaction, but chemically independent of each other. The key difference is how long they last. H2 is a dissolved gas — neutral, nonpolar, small. It has no chemical bond to the water holding it there. It off-gasses freely over time through any opening or even through container walls. OH- hydroxide ions are different — they are ionically present in the water as actual charged particles dissolved in solution. They do not off-gas. They persist until something neutralizes them, like CO2 from air forming carbonic acid, or contact with an acidic environment like your stomach. Think of it this way: H2 is a guest that wandered in and leaves through any open window. OH- is a resident — it is actually in the water chemistry until something chemically displaces it. What this means in practice: fresh from the machine, both hydrogen and alkalinity are present at full benefit. After an hour or two open, hydrogen is largely gone but alkalinity is mostly intact. After days sealed in glass, hydrogen is gone and alkalinity is gradually drifting toward neutral as CO2 slowly acidifies it. This is why the claims for each are honestly different — hydrogen benefit requires freshness, while alkalinity benefit has more staying power."
  },
];


/* ===== Everything below runs the FAQ ===== */
function startWellspringFaq() {
  var root = document.getElementById("wsFaq");
  if (!root) return;

  var state = { cat: "all", q: "", openId: null };

  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  function highlight(text, query) {
    var safe = esc(text);
    if (!query) return safe;
    var pattern = esc(query).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safe.replace(new RegExp("(" + pattern + ")", "gi"), "<mark>$1</mark>");
  }
  function countIn(catId) {
    if (catId === "all") return WS_FAQS.length;
    return WS_FAQS.filter(function (f) { return f.category === catId; }).length;
  }
  function filtered() {
    var q = state.q.toLowerCase().trim();
    return WS_FAQS.filter(function (f) {
      var inCat = state.cat === "all" || f.category === state.cat;
      var hit = !q || f.q.toLowerCase().indexOf(q) > -1 || f.a.toLowerCase().indexOf(q) > -1;
      return inCat && hit;
    });
  }

  // The parts that never change are built once, so typing in the
  // search box never loses its place.
  root.innerHTML =
    '<div class="faq-head">' +
      '<p class="faq-eyebrow">Gather by the Wellspring</p>' +
      '<div class="faq-title-row">' +
        '<h3 class="faq-title">Frequently Asked Questions</h3>' +
        '<span class="faq-total">' + WS_FAQS.length + ' questions</span>' +
      '</div>' +
      '<label class="faq-search">' +
        '<span class="faq-search-icon" aria-hidden="true">⌕</span>' +
        '<input type="search" placeholder="Search any question or keyword…" aria-label="Search the FAQ">' +
      '</label>' +
    '</div>' +
    '<div class="faq-body">' +
      '<div class="faq-cats" role="group" aria-label="FAQ categories"></div>' +
      '<div class="faq-bar"><span class="faq-bar-label"></span><span class="faq-bar-count"></span></div>' +
      '<div class="faq-list"></div>' +
      '<p class="faq-source"><strong>Source:</strong> All questions and answers are drawn from the Tyent USA Dealer Guide and the Gather by the Wellspring reference materials. The FDA has not evaluated or approved ionized water for the treatment of any disease or health condition.</p>' +
    '</div>';

  var search = root.querySelector(".faq-search input");
  var catsEl = root.querySelector(".faq-cats");
  var barLabel = root.querySelector(".faq-bar-label");
  var barCount = root.querySelector(".faq-bar-count");
  var list = root.querySelector(".faq-list");

  function renderCats() {
    catsEl.innerHTML = WS_FAQ_CATEGORIES.map(function (c) {
      var on = state.cat === c.id;
      return '<button type="button" class="faq-cat cat-' + c.id + (on ? ' is-active' : '') + '" data-cat="' + c.id + '" aria-pressed="' + on + '">' +
        '<span class="faq-dot"></span>' + esc(c.label) +
        '<span class="faq-cat-count">' + countIn(c.id) + '</span></button>';
    }).join("");
  }

  function renderList() {
    var items = filtered();
    var q = state.q.trim();
    var cat = WS_FAQ_CATEGORIES.filter(function (c) { return c.id === state.cat; })[0];
    barLabel.textContent = cat ? cat.label : "";
    barCount.textContent = items.length + " of " + countIn(state.cat) + " shown";

    if (!items.length) {
      list.innerHTML = '<p class="faq-empty">No questions match your search.</p>';
      return;
    }
    list.innerHTML = items.map(function (f) {
      var open = state.openId === f.id;
      return '<div class="faq-item' + (open ? ' is-open' : '') + '">' +
        '<button type="button" class="faq-q" data-id="' + f.id + '" aria-expanded="' + open + '">' +
          '<span class="faq-sign" aria-hidden="true">' + (open ? '−' : '+') + '</span>' +
          '<span class="faq-q-text">' + highlight(f.q, q) + '</span>' +
        '</button>' +
        (open ? '<div class="faq-a"><div class="faq-a-inner">' + highlight(f.a, q) + '</div></div>' : '') +
      '</div>';
    }).join("");
  }

  catsEl.addEventListener("click", function (e) {
    var b = e.target.closest(".faq-cat");
    if (!b) return;
    state.cat = b.getAttribute("data-cat");
    state.openId = null;
    renderCats();
    renderList();
  });

  list.addEventListener("click", function (e) {
    var b = e.target.closest(".faq-q");
    if (!b) return;
    var id = Number(b.getAttribute("data-id"));
    state.openId = state.openId === id ? null : id;
    renderList();
    var again = list.querySelector('.faq-q[data-id="' + id + '"]');
    if (again) again.focus({ preventScroll: true });
  });

  search.addEventListener("input", function () {
    state.q = search.value;
    state.openId = null;
    renderList();
  });

  renderCats();
  renderList();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startWellspringFaq);
} else {
  startWellspringFaq();
}
