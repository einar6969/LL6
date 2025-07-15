export interface PreExaminationPageTranslations {
  hero: {
    title: string;
    subtitle: string;
  };
  intro: {
    paragraph1: string;
    goalTitle: string;
    goalDescription: string;
    paragraph2: string;
  };
  notice: {
    title: string;
    description: string;
  };
  examination: {
    title: string;
    subtitle: string;
    steps: string[];
  };
  afterExamination: {
    title: string;
    description: string;
  };
  procedureTypes: {
    title: string;
    subtitle: string;
    types: {
      title: string;
      description: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export const isPreExaminationPageTranslations: PreExaminationPageTranslations = {
  hero: {
    title: 'Forskoðun fyrir sjónlagsaðgerð',
    subtitle: 'Forskoðun er fyrsta og mikilvægasta skrefið á leiðinni til betri sjónar.'
  },
  intro: {
    paragraph1: 'Starfsfólk okkar hefur áralanga reynslu af því að meta sjónlag og veita ráðgjöf um aðgerð í samræmi við ástand augna og aðra heilsufarslega þætti. Í þverfaglegu teyminu okkar starfa sjóntækjafræðingar, hjúkrunarfræðingar og augnlæknar sem vinna saman að því að tryggja þér upplýsta og örugga ákvörðun.',
    goalTitle: 'Markmið forskoðunar',
    goalDescription: 'Markmið forskoðunar er að komast að því hvort þú getir farið í sjónlagsaðgerð, og ef svo er, hvaða aðgerð hentar best. Um 80% þeirra sem koma í forskoðun geta farið í aðgerð.',
    paragraph2: 'Við vinnum einnig náið með augnhjúkrunarfræðingi frá Táralind ef þörf er á að gera tárafilmu og augnhvarma tilbúna fyrir aðgerð.'
  },
  notice: {
    title: 'Mikilvægt',
    description: 'Þú þarft að vera án snertilinsa í að minnsta kosti eina viku fyrir forskoðun.'
  },
  examination: {
    title: 'Hvað gerist í forskoðuninni?',
    subtitle: 'Forskoðunin er mjög ítarleg og felur í sér eftirfarandi:',
    steps: [
      'Mæling á sjónlagi með sjónlagsmæli til að fá grófa hugmynd um sjónskerpu og brotthætti.',
      'Gleraunastyrkur er mældur og borinn saman við raunmælingar.',
      'Heilsufarssaga og augnsaga er könnuð, m.a. ofnæmi og aðrir þættir sem geta haft áhrif á aðgerð.',
      'Augnþrýstingur er mældur.',
      'Hornhimnan er skoðuð með sérstöku mælitæki (t.d. CSO eða Nidek) og landslagsmynd af yfirborði hennar útbúin.',
      'Sjáöldur eru mæld með millimetramáli og ríkjandi auga ákvarðað.',
      'Sjáöldur eru víkkaðar með sérstökum augndropum.',
      'Augun eru skoðuð í smásjá (raufarlampa) af augnlækni.',
      'Augnbotnarnir eru skoðaðir með myndatöku og sneiðmyndatöku (t.d. OCT-skimun).'
    ]
  },
  afterExamination: {
    title: 'Að lokinni forskoðun',
    description: 'Að skoðun lokinni fer sérfræðingur ítarlega yfir niðurstöðurnar með þér. Þá er tekin ákvörðun um hvort þú sért góður kandídat fyrir aðgerð — og ef svo er, hver aðgerðartegund hentar þér best.'
  },
  procedureTypes: {
    title: 'Hvaða sjónlagsaðgerðir eru í boði?',
    subtitle: 'Við bjóðum upp á þrjár aðgerðartegundir. Hvaða aðgerð hentar best fer eftir aldri og sjónlagi:',
    types: [
      {
        title: 'Laseraðgerð',
        description: 'Hentar flestum undir miðjum aldri.'
      },
      {
        title: 'Linsuígræðsla',
        description: 'Fyrir þá sem passa hvorki í laseraðgerð né augasteinsaðgerð.'
      },
      {
        title: 'Augasteinsaðgerð',
        description: 'Valin af þeim sem eru komnir með lesgleraugsþörf eða önnur einkenni aldurstengdra breytinga.'
      }
    ]
  },
  cta: {
    title: 'Tilbúinn að taka næsta skref?',
    subtitle: 'Pantaðu forskoðun í dag og komdu að því hvort sjónlagsaðgerð sé réttur kostur fyrir þig.',
    button: 'Bóka forskoðun'
  }
};