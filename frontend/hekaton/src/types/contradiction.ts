export type Severity = 'critical' | 'important' | 'minor';

export interface Contradiction {
  id: number;
  severity: Severity;
  title: string;
  documentAExcerpt: string;
  documentBExcerpt: string;
  documentAHighlightStart: number;
  documentAHighlightEnd: number;
  documentBHighlightStart: number;
  documentBHighlightEnd: number;
  explanation: string;
  suggestedQuestions: string[];
}

export interface AnalysisResult {
  documentAName: string;
  documentBName: string;
  documentAText: string;
  documentBText: string;
  contradictions: Contradiction[];
}

// Mock data for development
export const mockAnalysis: AnalysisResult = {
  documentAName: "Carlo Lunati - Sworn Declaration",
  documentBName: "Louis Huang - Sworn Declaration",
  documentAText: `I, Carlo Lunati, make this declaration in support of the opposition against trademark application No. 40202219876A for "EL REY" filed by Louis Huang.\n\nI am the founder and owner of REX Gourmet Burgers, which I established in Melbourne, Australia in 2012. The REX brand has been continuously used in Australia since its inception and has built significant goodwill and reputation.\n\nRegarding the meeting on April 1, 2022, I met with Mr. Huang at the Fullerton Hotel in Singapore for breakfast. We discussed the possibility of expanding REX into the Asian market. I never agreed to Huang executing the lease agreement for the premises at Clarke Quay. I explicitly told him that any expansion would need to go through proper legal channels and board approval.\n\nI have never abandoned my business interests in the Asian market. While I focused primarily on the Australian operations between 2019-2021 due to COVID-19 restrictions, I maintained active plans for Asian expansion. I had preliminary discussions with potential partners in Tokyo and Hong Kong during this period.\n\nMr. Huang was employed as a regional consultant, not as a partner or franchisee. His role was limited to market research and identifying potential locations. He had no authority to enter into binding agreements on behalf of REX or to register any trademarks.\n\nThe trademark "EL REY" is confusingly similar to "REX" and was filed in bad faith by Mr. Huang, who was aware of my prior rights and ongoing business plans.`,
  documentBText: `I, Louis Huang, make this declaration in response to the opposition filed by Carlo Lunati against my trademark application No. 40202219876A for "EL REY".\n\nI am an experienced food and beverage entrepreneur based in Singapore. I have been operating restaurants in Southeast Asia since 2008 and have extensive knowledge of the local market.\n\nRegarding the meeting on April 1, 2022, I met with Mr. Lunati at the Fullerton Hotel in Singapore for breakfast. During this meeting, Lunati authorized me to secure the premises at Clarke Quay for the new restaurant venture. He was enthusiastic about the location and told me to "move quickly before someone else takes it." He verbally agreed that I would manage the Singapore operations independently.\n\nMr. Lunati had effectively abandoned his business interests in the Asian market. Between 2019-2022, he made no efforts to expand into Asia, did not register any trademarks in the region, and did not maintain any business presence. His focus was entirely on his Australian operations.\n\nI was engaged as a business partner for the Asian expansion, not merely a consultant. Our agreement included profit sharing arrangements and I invested significant personal capital into developing the Singapore market, including SGD 250,000 in renovation costs and SGD 80,000 in initial marketing.\n\nThe trademark "EL REY" is a distinct brand that I developed independently for the Singapore market. It is not confusingly similar to "REX" and was filed in good faith based on my own creative efforts and investment.`,
  contradictions: [
    {
      id: 1,
      severity: 'critical',
      title: 'Authorization to execute lease agreement',
      documentAExcerpt: 'I never agreed to Huang executing the lease agreement for the premises at Clarke Quay. I explicitly told him that any expansion would need to go through proper legal channels and board approval.',
      documentBExcerpt: 'Lunati authorized me to secure the premises at Clarke Quay for the new restaurant venture. He was enthusiastic about the location and told me to "move quickly before someone else takes it."',
      documentAHighlightStart: 487,
      documentAHighlightEnd: 695,
      documentBHighlightStart: 368,
      documentBHighlightEnd: 570,
      explanation: 'This is a direct factual contradiction about a key event — whether Lunati authorized Huang to secure the Clarke Quay premises. Lunati explicitly denies giving authorization, while Huang claims enthusiastic verbal approval. This goes to the core of the dispute regarding Huang\'s authority to act.',
      suggestedQuestions: [
        'Were there any witnesses present at the April 1 breakfast meeting?',
        'Do you have any written communication (emails, texts) from before or after the meeting discussing the lease?',
        'When exactly was the lease agreement signed relative to the April 1 meeting?',
      ],
    },
    {
      id: 2,
      severity: 'critical',
      title: 'Nature of business relationship',
      documentAExcerpt: 'Mr. Huang was employed as a regional consultant, not as a partner or franchisee. His role was limited to market research and identifying potential locations.',
      documentBExcerpt: 'I was engaged as a business partner for the Asian expansion, not merely a consultant. Our agreement included profit sharing arrangements and I invested significant personal capital.',
      documentAHighlightStart: 858,
      documentAHighlightEnd: 1020,
      documentBHighlightStart: 750,
      documentBHighlightEnd: 940,
      explanation: 'Fundamental disagreement about the nature of the business relationship. Lunati describes Huang as a limited consultant; Huang claims partnership with profit sharing. This directly affects whether Huang had standing to register the trademark and whether his actions were authorized.',
      suggestedQuestions: [
        'Is there a written contract defining the terms of your engagement?',
        'Can you provide evidence of the profit sharing arrangement?',
        'Were there any formal employment or consultancy agreements signed?',
      ],
    },
    {
      id: 3,
      severity: 'important',
      title: 'Abandonment of Asian market interests',
      documentAExcerpt: 'I have never abandoned my business interests in the Asian market. While I focused primarily on the Australian operations between 2019-2021 due to COVID-19 restrictions, I maintained active plans for Asian expansion.',
      documentBExcerpt: 'Mr. Lunati had effectively abandoned his business interests in the Asian market. Between 2019-2022, he made no efforts to expand into Asia, did not register any trademarks in the region.',
      documentAHighlightStart: 696,
      documentAHighlightEnd: 857,
      documentBHighlightStart: 571,
      documentBHighlightEnd: 749,
      explanation: 'Lunati claims he maintained active plans despite COVID restrictions (2019-2021), while Huang claims complete abandonment over a wider period (2019-2022). The timeline discrepancy is notable — Lunati narrows the inactive period while Huang expands it. This affects whether Lunati can claim prior rights in the Asian market.',
      suggestedQuestions: [
        'Can you provide documentation of the "preliminary discussions" with partners in Tokyo and Hong Kong?',
        'Were any trademark applications filed in Asian jurisdictions before 2022?',
      ],
    },
    {
      id: 4,
      severity: 'important',
      title: 'Good faith vs. bad faith trademark filing',
      documentAExcerpt: 'The trademark "EL REY" is confusingly similar to "REX" and was filed in bad faith by Mr. Huang, who was aware of my prior rights and ongoing business plans.',
      documentBExcerpt: 'The trademark "EL REY" is a distinct brand that I developed independently for the Singapore market. It is not confusingly similar to "REX" and was filed in good faith.',
      documentAHighlightStart: 1021,
      documentAHighlightEnd: 1180,
      documentBHighlightStart: 941,
      documentBHighlightEnd: 1120,
      explanation: 'Direct contradiction on whether "EL REY" was filed in good or bad faith, and whether it is confusingly similar to "REX". Both are legal conclusions rather than pure facts, but the underlying factual claims about Huang\'s knowledge and independence are contradictory.',
      suggestedQuestions: [
        'When did you first conceive of the "EL REY" brand name?',
        'Can you provide evidence of independent creative development of the brand?',
      ],
    },
    {
      id: 5,
      severity: 'minor',
      title: 'Scope of Huang\'s authority',
      documentAExcerpt: 'He had no authority to enter into binding agreements on behalf of REX or to register any trademarks.',
      documentBExcerpt: 'He verbally agreed that I would manage the Singapore operations independently.',
      documentAHighlightStart: 1021,
      documentAHighlightEnd: 1100,
      documentBHighlightStart: 520,
      documentBHighlightEnd: 590,
      explanation: 'This is a secondary contradiction stemming from the core dispute about the relationship. Lunati says no authority was granted; Huang claims independent management authority was verbally agreed. This is less significant as a standalone point but reinforces the pattern of contradictions.',
      suggestedQuestions: [
        'Was the scope of authority ever documented in writing?',
      ],
    },
  ],
};
