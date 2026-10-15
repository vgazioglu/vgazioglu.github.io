export interface TimelineItem {
  id: number;
  period: string;
  category: 'network' | 'media' | 'telecom' | 'academy';
  title: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  image?: string;
  video?: string;
  highlights?: {
    tr: string[];
    en: string[];
  };
}

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    period: "1987 — 1988",
    category: "academy",
    title: {
      tr: "Öğrenim Dönemi",
      en: "Education Period"
    },
    description: {
      tr: "1987-1988 döneminde öğrenim görmekte olduğu Erzurum Lisesi'nde, geleceğin bilim insanlarını ve araştırmacılarını yetiştirmek amacıyla TÜBİTAK tarafından yapılan yarışmada, Fizik alanında ödül kazandı.",
      en: "While at Erzurum High School in 1987-1988, he achieved recognition in a nationwide physics competition held by TUBITAK to educate the future scientists and researchers."
    },
    image: "/images/volkanggg_html_ef41b6db9031c058.jpg",
    highlights: {
      tr: ["TÜBİTAK Fizik Ödülü", "Erzurum Lisesi"],
      en: ["TUBITAK Physics Award", "Erzurum High School"]
    }
  },
  {
    id: 2,
    period: "1989",
    category: "academy",
    title: {
      tr: "Üniversite",
      en: "University"
    },
    description: {
      tr: "Liseden sonra girdiği üniversite sınavında yüzde 1'lik derece ile Ege Üniversitesi Bilgisayar Mühendisliği'ni kazandı (1989).",
      en: "After high school, being within the top 1 percentile in the nationwide university entrance exam, he enrolled in Ege University Computer Engineering Department (1989)."
    },
    image: "/images/ataturk.jpg",
    highlights: {
      tr: ["%1 Derece", "Ege Üniversitesi Bilgisayar Mühendisliği"],
      en: ["Top 1% Percentile", "Ege University Computer Engineering"]
    }
  },
  {
    id: 3,
    period: "1990 — 1992",
    category: "network",
    title: {
      tr: "Internet Öncesi",
      en: "Pre Internet"
    },
    description: {
      tr: "Öğrenciliği sırasında IBM mainframe bilgisayarları üzerinde uzmanlaşan Gazioğlu, Internet öncesi küresel akademik ağ olan BITNET'te uzun bir süre araştırmalar ve ağ çalışmaları yaptı.",
      en: "Specializing on IBM mainframe computers during his university education, Gazioglu actively worked and researched on BITNET, the pre-Internet academic network."
    },
    image: "/images/ege_dunya_bilgisayar_agina_baglaniyor1.jpg",
    highlights: {
      tr: ["IBM Mainframe", "BITNET Ağı"],
      en: ["IBM Mainframe", "BITNET Network"]
    }
  },
  {
    id: 4,
    period: "1993",
    category: "academy",
    title: {
      tr: "Staj & Endüstriyel Dönüşüm",
      en: "Internship & Digital Transformation"
    },
    description: {
      tr: "1993 yılında Türkiye'nin en büyük ikinci modernizasyon projesi olan Erdemir KAP'ta staj yaptı. Burada Japon ve Amerikalı şirketlerce gerçekleştirilen endüstriyel dijital dönüşüm projesini yakından inceledi. Avrupa Topluluğu MedCampus kapsamında düzenlenen yaz okulu sırasında İzmir Çeşme ile İtalya Lecce arasında 64KB hat üzerinden bilgisayarla uzaktan eğitim denemesi çalışmasında bulundu.",
      en: "In 1993, he interned at Erdemir KAP, Turkey's second largest industrial modernization project. He closely inspected industrial digital transformation implemented by Japanese and American enterprises. During the European Community MedCampus summer school, he took part in an experimental remote e-learning setup between Izmir-Cesme and Lecce-Italy over a 64Kbps connection."
    },
    image: "/images/erdemir.jpg",
    highlights: {
      tr: ["Erdemir KAP Modernizasyon", "MedCampus Çeşme - İtalya 64KB"],
      en: ["Erdemir KAP Modernization", "MedCampus Cesme - Italy 64Kbps"]
    }
  },
  {
    id: 5,
    period: "1994",
    category: "media",
    title: {
      tr: "Lisans Tezi & Yapay Zeka",
      en: "Thesis & Artificial Intelligence"
    },
    description: {
      tr: "1994 yılında Prolog ile Yapay Zeka alanında projeli lisans tezi vererek mezun oldu. Proje, o yıllarda liselerde uygulanan kredili eğitim sistemine göre öğrenim gören öğrencilere, üniversite sınav tercihlerinde akıllı rehberlik ediyordu.",
      en: "In 1994, he graduated by presenting an applied bachelor's thesis in the field of Artificial Intelligence developed with Prolog. The project guided high school students in their university preferences under the newly implemented credit system."
    },
    image: "/images/volkang_html_567fd1f8e41ae06b.jpg",
    highlights: {
      tr: ["Prolog Programlama", "Yapay Zeka Karar Destek"],
      en: ["Prolog Programming", "AI Decision Support"]
    }
  },
  {
    id: 6,
    period: "1994 — 1995",
    category: "network",
    title: {
      tr: "Modem Çağı & EgeNet",
      en: "Modem Era & EgeNet"
    },
    description: {
      tr: "Henüz öğrenciyken üniversitenin BAUM adlı merkezinde 'Ağ Yöneticisi' olarak çalışmaya başladı. Üniversitenin vakıf şirketine bağlı EgeNet üzerinden Türkiye'de ilk Internet servisinin verilmesi çalışmasını yürüttü. Üniversitenin halen yürürlükte olan 'Kampüs Bilgi Sistemi'ni (CWIS) kurdu ve operasyonunu yönetti. 1995 Türkiye Genel Seçimleri'nde TRT İzmir ofisinde kurulan seçim bilgi sisteminin yöneticiliğini yaptı.",
      en: "While still a student, he began working as 'Network Administrator' at the university's BAUM computation center. Through EgeNet, he spearheaded Turkey's very first dial-up public Internet service. He established the university's Campus Wide Information System (CWIS) and directed the election information system at TRT Izmir office during the 1995 General Elections."
    },
    image: "/images/volkanggg_html_ff8993902a7f4040.png",
    highlights: {
      tr: ["Türkiye'de İlk İnternet Servisi", "CWIS Kurucusu", "TRT Seçim Sistemi"],
      en: ["First Internet ISP in Turkey", "CWIS Founder", "TRT Election System"]
    }
  },
  {
    id: 7,
    period: "1995",
    category: "academy",
    title: {
      tr: "Sivil Toplum & 1. İnternet Konferansı",
      en: "Civil Society & 1st Internet Conference"
    },
    description: {
      tr: "Türkiye'de İnternet ile ilgili grupları bir araya getirerek İnternet'i tüm boyutlarıyla tanıtmak, geliştirmek, tartışmak ve toplumun dikkatini bu yöne çekmek amacıyla 17-18 Kasım 1995 tarihlerinde Bilkent Üniversitesi'nce düzenlenen 1. Türkiye'de İnternet Konferansı'nın kurucu yürütme kurulu üyeliğini yaptı.",
      en: "To bring together Internet pioneer groups, introduce the Internet to Turkish society in all its dimensions, and spark nationwide awareness, he served as a founding organizing committee member of the 1st Internet Conference in Turkey, organized at Bilkent University on November 17-18, 1995."
    },
    image: "/images/volkanggg_html_e15742ed8061a355.jpg",
    highlights: {
      tr: ["1. İnternet Konferansı Kurucusu", "Bilkent Üniversitesi"],
      en: ["1st Turkish Internet Conference Founder", "Bilkent University"]
    }
  },
  {
    id: 8,
    period: "1995 — 1997",
    category: "academy",
    title: {
      tr: "Askeri Bilgisayar Güvenliği",
      en: "Military Computer Security"
    },
    description: {
      tr: "1995 yılında Kara Harp Okulu (Milli Savunma Üniversitesi) 'Askeri Bilgisayar Güvenliği Çalışma Grubu' üyeliğine seçilen Gazioğlu, 1997 yılında Ankara KHO'nda düzenlenen 'Savunma Sanayindeki Teknolojik Gelişmeler Sempozyumu'nda 'Internet Güvenliği' konulu sunum yaptı.",
      en: "Selected as a member of the 'Military Computer Security Working Group' at the Turkish Military Academy in 1995, Gazioglu delivered an invited presentation on 'Internet Security' at the Symposium on Technological Developments in Defense Industry held at Ankara Military Academy in 1997."
    },
    image: "/images/ETzWyODWoAAOC-71.jpeg",
    highlights: {
      tr: ["Kara Harp Okulu Çalışma Grubu", "İnternet Güvenliği Bildirisi"],
      en: ["Military Academy Working Group", "Internet Security Paper"]
    }
  },
  {
    id: 9,
    period: "1996 — 1998",
    category: "media",
    title: {
      tr: "Teknoloji Medyası & Köşe Yazarlığı",
      en: "Tech Media & Columnist"
    },
    description: {
      tr: "Internet'in teknolojik yönünün yanısıra; sosyal, kültürel, ekonomik, güvenlik ve hukuksal etkileri üzerinde kamuoyunu bilgilendirebilmek amacıyla BThaber Gazetesi'nde 'AÇIK ve NET' adlı köşede yazmaya başladı. Bu köşenin adını daha sonra sadece yeniliklere odaklandığı 'internext' olarak değiştirdi. Aynı grubun web yayını olan BTnet'te ise 'Internet'ten' adlı köşeyi yazdı.",
      en: "To enlighten the public on the societal, cultural, economic, legal and security implications of the Internet, he authored the column 'AÇIK ve NET' in BThaber Newspaper, later renamed 'internext' to focus solely on emerging innovations. He also wrote the 'Internet'ten' column for BTnet."
    },
    image: "/images/volkang_html_c77202861fe1c527.png",
    highlights: {
      tr: ["BThaber 'AÇIK ve NET'", "internext", "BTnet 'Internet'ten'"],
      en: ["BThaber Columnist", "internext", "Early Digital Journalism"]
    }
  },
  {
    id: 10,
    period: "1996 — 1997",
    category: "network",
    title: {
      tr: "ISS Çağı & ISPRO",
      en: "ISP Era & ISPRO"
    },
    description: {
      tr: "Üniversitede yaşanan vizyon kaybı nedeniyle özel sektörden gelen teklifi değerlendiren Gazioğlu, Türkiye'nin ilk özel ISS'lerinden (İnternet Servis Sağlayıcı) birisi olan ISPRO'nun kuruculuğunu yaptı. İnternet Servis Sağlayıcıları Derneği'nin (TİSSAD) kurucu çalışma grubunda bulundu.",
      en: "Venturing into the private sector, Gazioglu co-founded ISPRO, one of Turkey's earliest private Internet Service Providers (ISPs), and took an active role in the founding working committee of TISSAD (Internet Service Providers Association)."
    },
    image: "/images/Netship_MANUAL_P1.jpg",
    highlights: {
      tr: ["ISPRO Kurucusu", "TİSSAD Kurucu Çalışma Grubu"],
      en: ["ISPRO Co-Founder", "TISSAD Founding Committee"]
    }
  },
  {
    id: 11,
    period: "1997",
    category: "network",
    title: {
      tr: "İlk Yerli Arama Motoru: TTT",
      en: "First Search Engine: TTT"
    },
    description: {
      tr: "Burada ilk yerli arama motorunu (TTT – Tüm Türkiye Tarayıcısı) Google'dan bir yıl önce hizmete sundu. Türkçe web sayfalarını dizinleyen ve arama yapılmasını sağlayan bu öncü proje, Türk internet tarihinin kilometre taşlarındandır.",
      en: "Here, he launched Turkey's first domestic search engine (TTT - Tum Turkiye Tarayicisi), one year prior to Google's official founding. Indexing Turkish web pages, it was a pioneering milestone in the history of Turkish digital infrastructure."
    },
    image: "/images/ttt.png",
    highlights: {
      tr: ["Google'dan 1 Yıl Önce (1997)", "Tüm Türkiye Tarayıcısı (TTT)"],
      en: ["1 Year Before Google (1997)", "First National Search Crawler"]
    }
  },
  {
    id: 12,
    period: "1996 — 1998",
    category: "network",
    title: {
      tr: "Ağ Donanımı: NetSHIP",
      en: "Network Appliance: NetSHIP"
    },
    description: {
      tr: "1996 yılında kurumların Internet'e çevirmeli ve kiralık hatlar üzerinden bağlanabilmelerini sağlayan NetSHIP adlı ağ cihazını geliştirdi. Ürün; yönlendirici (router), e-posta, dosya ve WWW sunucusu ile proxy ve güvenlik duvarı (firewall) hizmetlerini hepsi bir arada olarak sunuyordu.",
      en: "In 1996, he developed the NetSHIP network appliance, enabling enterprises to connect to the Internet over dial-up and leased lines. The device packed an all-in-one router, mail server, file/WWW server, proxy, and enterprise firewall."
    },
    image: "/images/volkanggg_html_9068da56dd4fc603.jpg",
    highlights: {
      tr: ["Donanım & Yazılım Entegrasyonu", "Router / Firewall / Mail"],
      en: ["Hardware & Appliance Design", "All-in-One Router / Security"]
    }
  },
  {
    id: 13,
    period: "1998 — 2000",
    category: "academy",
    title: {
      tr: "Askerlik & Genelkurmay Başkanlığı",
      en: "Military Service & General Staff"
    },
    description: {
      tr: "1998-2000 yılları arasında askerlik görevini yedek subay olarak Genelkurmay Başkanlığı'nda, Ulaştırma Koordinasyon Merkezi'nde 'Kurye Planlama Subayı' olarak ifa etti. Burada, silahlı kuvvetlerin kritik ulaştırma faaliyetlerini yürütürken, yenilikçi lojistik ve bilgi projeleri gerçekleştirdi.",
      en: "Between 1998-2000, he served his mandatory military service as a reserve officer at the Turkish Armed Forces General Staff, Transportation Coordination Center, as 'Courier Planning Officer', managing strategic communications logistics."
    },
    image: "/images/askerlik.jpg",
    highlights: {
      tr: ["Genelkurmay Başkanlığı", "Kurye Planlama Subayı"],
      en: ["General Staff HQ", "Strategic Logistics & Security"]
    }
  },
  {
    id: 14,
    period: "2000",
    category: "media",
    title: {
      tr: "Dışa Bağımlılık & Milli Teknoloji",
      en: "National Tech & Independence"
    },
    description: {
      tr: "'Bilişim' kavramının, ülkemizde faaliyet gösteren yabancı şirketlerin lehine olacak şekilde istismar edildiğini, milli teknolojiye, yerli girişimciye ve özgür yazılıma arka çıkılmadığını, haber ve yorumlar üzerinde baskı oluşturulduğunu gözlemledi. Bu duruma ilkeli bir duruş sergileyerek bağımsız medyasını kurmaya karar verdi.",
      en: "Witnessing how 'informatics' was monopolized to serve foreign corporations rather than domestic engineers, open source software, or local entrepreneurs, Gazioglu took a principled stand and decided to build an independent media platform."
    },
    image: "/images/disa.png",
    highlights: {
      tr: ["Milli Teknoloji Duruşu", "Özgür Yazılım Savunuculuğu"],
      en: ["Tech Sovereignty", "Open Source Advocacy"]
    }
  },
  {
    id: 15,
    period: "2001 — 2004",
    category: "media",
    title: {
      tr: "Bilişim Cumhuriyeti (BC)",
      en: "Bilisim Cumhuriyeti Portal"
    },
    description: {
      tr: "Bunun üzerine Bilişim Cumhuriyeti'ni kuran Gazioğlu; sansürsüz, dünyanın çeşitli ülkelerinden haberci ve yazar kadrosuyla bilişim haber ve düşüncelerine yer verdi. Kısaca BC adıyla anılan portalın haberleri ve araştırmaları yurt dışı kaynaklarda dahi referans gösterildi.",
      en: "He founded Bilisim Cumhuriyeti (Republic of Informatics); featuring uncensored, objective reporting with international tech journalists and commentators. Known as BC, its original investigative articles were cited internationally."
    },
    image: "/images/bc.png",
    highlights: {
      tr: ["Bağımsız Teknoloji Portalı", "Uluslararası Referanslar"],
      en: ["Independent Tech Media", "Global Citations"]
    }
  },
  {
    id: 16,
    period: "2002 — 2004",
    category: "media",
    title: {
      tr: "Yazılım Hakları & BSA Mücadelesi",
      en: "Software Rights & Antitrust"
    },
    description: {
      tr: "Çokuluslu yazılım kartellerinin uzantısı olan ve yerel esnafa orantısız baskınlar düzenleyip lisans dayatması yapan yapılara karşı kamuoyunu aydınlattı, açık kaynak alternatiflerin ve yerli çözümlerin hakkını savundu.",
      en: "He fought against anti-competitive practices by multinational proprietary software cartels that targeted local small businesses, actively promoting open-source alternatives and software freedom."
    },
    image: "/images/BSA3.jpg",
    highlights: {
      tr: ["Açık Kaynak Hakları", "Tekelcilikle Mücadele"],
      en: ["Open Source Rights", "Anti-monopoly Movement"]
    }
  },
  {
    id: 17,
    period: "2004 — 2006",
    category: "academy",
    title: {
      tr: "Rekabetçi Türkiye & Kümelenme",
      en: "Competitive Turkey & Clusters"
    },
    description: {
      tr: "Prof. Michael Porter'ın (Harvard) kümelenme kuramını uygulayan URAK (CAT) bünyesinde Prof. Dr. Melih Bulu ile birlikte projeler geliştirdi. İlk savunma sanayii kümelenmesi ve Arçelik Türk kahve makinesinin (Telve) inovasyon analizi bu çalışmalar arasındadır. Yüksek teknoloji stratejilerinin tartışıldığı TurkeyHighTech platformunda çalışmalar yürüttü.",
      en: "Applying Prof. Michael Porter's (Harvard) clustering theory at URAK (CAT), he collaborated on strategic projects with Prof. Dr. Melih Bulu. These included Turkey's first defense industry clustering and Arcelik Turkish coffee machine innovation. He actively contributed to TurkeyHighTech strategy symposiums."
    },
    image: "/images/tubitak_rakip.png",
    highlights: {
      tr: ["Harvard Kümelenme Modeli", "Savunma Kümelenmesi", "TurkeyHighTech"],
      en: ["Harvard Clustering Model", "Defense Industry Cluster", "Tech Policy"]
    }
  },
  {
    id: 18,
    period: "2002 — 2003",
    category: "media",
    title: {
      tr: "Linux & 'The Code' Belgeseli",
      en: "Linux & 'The Code' Documentary"
    },
    description: {
      tr: "Açık kaynak felsefesini ve Linux hareketini Türkiye genelinde kitlelere tanıtmak amacıyla, Linux'un doğuşunu anlatan dünyaca ünlü 'The Code' belgeselinin yayın haklarını kendi imkanlarıyla temin ederek Türkiye'de sinema salonlarında gösterime soktu.",
      en: "To evangelize open source philosophy and the Linux movement across Turkey, he acquired the distribution rights for the acclaimed documentary 'The Code' (featuring Linus Torvalds, Richard Stallman) and screened it in commercial movie theaters."
    },
    image: "/images/bg5.jpg",
    highlights: {
      tr: ["The Code Sinema Gösterimi", "Linux & Açık Kaynak Hareketi"],
      en: ["The Code Theatrical Release", "Linux & FOSS Movement"]
    }
  },
  {
    id: 19,
    period: "2001 — 2008",
    category: "telecom",
    title: {
      tr: "Telekom Sektörü: Aria & Motorola",
      en: "Telecom Industry: Aria & Motorola"
    },
    description: {
      tr: "Telecom Italia Mobile ve İş Bankası ortaklığıyla faaliyete geçen Aria'da uzman olarak çalıştı. Daha sonra Motorola bünyesinde geliştirdiği akıllı optimizasyon sistemi ile tek bir bölge için haftalar süren frekans planlama işinin tüm Türkiye için bir haftada tamamlanabilmesini sağladı. Bu başarı Motorola küreselde 'Global Success Story' olarak paylaşıldı. Motorola ABD akıllı evler ve Motorola İngiltere GPON projelerinde görev aldı.",
      en: "He served as an expert at Aria (Telecom Italia Mobile & Isbank partnership). Later at Motorola, he developed an intelligent optimization system that compressed nationwide frequency planning from months to a single week, published as a Motorola Global Success Story. He contributed to Motorola US Smart Home and Motorola UK GPON broadband initiatives."
    },
    image: "/images/volkan_g.jpg",
    highlights: {
      tr: ["Motorola Global Success Story", "Akıllı Frekans Planlama", "GPON & Smart Home"],
      en: ["Motorola Global Success Story", "Intelligent RF Optimization", "GPON & Smart Home"]
    }
  },
  {
    id: 20,
    period: "2009 — 2017",
    category: "telecom",
    title: {
      tr: "Huawei & Bireysel Altın Madalya",
      en: "Huawei & Individual Gold Medal"
    },
    description: {
      tr: "Huawei'de Orta Asya ve Kafkasya Bölgesel Ağ Analiz Merkezi liderliğini üstlendi. Ardından C-level Profesyonel Servis Çözüm Yöneticiliği görevinde bulundu. Müşteri Deneyimi (CEM), Servis Kalitesi (SQM), Ağ Performansı ve Büyük Veri alanındaki üstün başarıları nedeniyle 180 bini aşkın çalışan arasında sadece 39 kişiye verilen 'Bireysel Altın Madalya Ödülü'nü (Individual Gold Medal Award) kazandı.",
      en: "At Huawei, he led the Central Asia and Caucasus Regional Network Analysis Center, followed by C-level roles as Professional Services Solution Director. For groundbreaking achievements in Customer Experience Management (CEM), Service Quality (SQM), Network Performance, and Big Data, he was awarded Huawei's prestigious 'Individual Gold Medal Award', presented to only 39 out of 180,000+ global employees."
    },
    image: "/images/CIMG35161.JPG",
    highlights: {
      tr: ["Bölgesel Ağ Analiz Merkezi Lideri", "Bireysel Altın Madalya (180.000'de 39)", "Müşteri Deneyimi (CEM)"],
      en: ["Regional Network Center Leader", "Individual Gold Medal (39 / 180,000)", "Customer Experience (CEM)"]
    }
  },
  {
    id: 21,
    period: "2016 — 2020",
    category: "telecom",
    title: {
      tr: "4.5G & 5G Servis Çözümleri",
      en: "4.5G & 5G Service Solutions"
    },
    description: {
      tr: "Türkiye'de 4.5G şebekelerinin kurulduğu dönemde Servis Çözüm Satış Direktörlüğü görevini yürüttü. Bu süreçte 'Profesyonel Servisler' ilk kez geleneksel donanım satışlarının önüne geçerek tarihi bir gelir payına ulaştı. 5G teknolojileri, şebeke dilimleme (network slicing) ve yeni nesil telekom stratejileri üzerine üst düzey çalışmalar yürüttü.",
      en: "During Turkey's nationwide 4.5G network rollout, he served as Service Solution Sales Director. During his tenure, professional services revenue surpassed hardware sales for the first time. He directed key 5G, network slicing, and next-generation telco transformation strategies."
    },
    video: "https://www.youtube.com/embed/soT2KiLUZdU",
    highlights: {
      tr: ["4.5G Türkiye Dağıtımı", "Profesyonel Servisler Liderliği", "5G Stratejileri"],
      en: ["4.5G Nationwide Rollout", "Professional Services Leadership", "5G Roadmaps"]
    }
  },
  {
    id: 22,
    period: "2018 — Günümüz",
    category: "telecom",
    title: {
      tr: "Huawei OpenLab & Ekosistem",
      en: "Huawei OpenLab & Innovation Ecosystem"
    },
    description: {
      tr: "Huawei'nin inovasyon ve çözüm merkezi OpenLab bünyesinde yöneticilik yaptı. 5G, Nesnelerin İnterneti (IoT), Yapay Zeka, Büyük Veri, Akıllı ve Güvenli Şehirler alanlarında yerli yazılım firmaları ve start-up'larla inovasyon ekosistemi kurdu. Kamu, BTK, büyükşehir belediyeleri, operatörler ve üniversiteler ile ortak projeler gerçekleştirdi. Uluslararası Yatırımcılar Derneği'nde (YASED) Huawei'yi temsil etti.",
      en: "He directed operations at Huawei OpenLab innovation center. He fostered joint industry ecosystems covering 5G, Internet of Things (IoT), AI, Big Data, and Smart & Safe Cities with domestic ISVs, telco operators, municipalities, BTK, and academia. He represented Huawei at YASED (International Investors Association)."
    },
    image: "/images/18278897_10154867563183355_6993968459582310517_o_10154867563183355.jpg",
    highlights: {
      tr: ["OpenLab İnovasyon Yöneticisi", "Akıllı Şehirler & AI & IoT", "YASED Temsilciliği"],
      en: ["OpenLab Innovation Director", "Smart Cities, AI & IoT", "YASED Representative"]
    }
  }
];

export const expertiseDomains = [
  {
    id: 'telecom',
    icon: 'signal',
    title: {
      tr: 'Telekomünikasyon, 4.5G & 5G',
      en: 'Telecommunications, 4.5G & 5G'
    },
    description: {
      tr: 'Mobil şebeke optimizasyonu, frekans planlama, 4.5G/5G servis çözümleri, radyo erişim şebekeleri (RAN) ve yeni nesil mimariler.',
      en: 'Mobile network optimization, RF planning, 4.5G/5G service solutions, Radio Access Networks (RAN), and next-gen architectures.'
    },
    tags: ['5G', '4.5G LTE', 'RF Optimization', 'CEM / SQM', 'Network Slicing']
  },
  {
    id: 'network',
    icon: 'network',
    title: {
      tr: 'Ağ Mimarisi & Altyapı',
      en: 'Network Architecture & Systems'
    },
    description: {
      tr: 'Türkiye’nin ilk internet altyapılarının inşası, ISP operasyonları, yönlendirici ve güvenlik duvarı cihazları, TCP/IP, CWIS.',
      en: 'Pioneered Turkey’s earliest public Internet infrastructure, ISP operations, router/firewall hardware development, TCP/IP, CWIS.'
    },
    tags: ['ISP Operations', 'TCP/IP', 'Routing & Switching', 'Firewalls', 'CWIS']
  },
  {
    id: 'ai-iot',
    icon: 'cpu',
    title: {
      tr: 'Yapay Zeka, IoT & Akıllı Şehirler',
      en: 'AI, IoT & Smart Cities'
    },
    description: {
      tr: 'Prolog tabanlı erken yapay zeka çalışmalarından, OpenLab bünyesindeki IoT sensör ağları, akıllı şehir çözümleri ve büyük veri analitiğine.',
      en: 'From early Prolog AI research to large-scale OpenLab IoT sensor deployments, smart city frameworks, and big data analytics.'
    },
    tags: ['Artificial Intelligence', 'IoT Ecosystems', 'Smart Cities', 'Big Data', 'Prolog']
  },
  {
    id: 'opensource',
    icon: 'terminal',
    title: {
      tr: 'Açık Kaynak & Linux Savunuculuğu',
      en: 'Open Source & Linux Advocacy'
    },
    description: {
      tr: 'Milli teknoloji duruşu, tekelcilikle mücadele, Bilişim Cumhuriyeti portalı ve ‘The Code’ belgeselini Türkiye sinemalarına getiren vizyon.',
      en: 'Advocacy for open source software, tech sovereignty, founding Bilisim Cumhuriyeti, and bringing ‘The Code’ documentary to Turkish cinemas.'
    },
    tags: ['Linux', 'Open Source Software', 'Tech Sovereignty', 'Independent Media']
  }
];
