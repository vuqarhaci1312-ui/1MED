/**
 * 13 Fevral 2026-dan sonra ardıcıl 20 gün üçün blog yazıları əlavə edir:
 * BlogData.json və BlogV3Data.json-un əvvəlinə (ən yeni üstə) yazır.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const TAG_TO_THUMB = {
  SEO: "covers/cover-seo.svg",
  Analitika: "covers/cover-strategy.svg",
  Vebsayt: "covers/cover-web.svg",
  LinkedIn: "covers/cover-social.svg",
  Email: "covers/cover-email.svg",
  Reklam: "covers/cover-ads.svg",
  Məzmun: "covers/cover-content.svg",
  Video: "covers/cover-video.svg",
  Strategiya: "covers/cover-strategy.svg",
  "Sosial Media": "covers/cover-social.svg",
};

function thumb(tag) {
  return TAG_TO_THUMB[tag] ?? "covers/cover-default.svg";
}

function delay(i) {
  const d = ["300ms", "700ms", "500ms"];
  return d[i % 3];
}

function baseCard(p, i) {
  const th = thumb(p.tag);
  return {
    dateIcon: "far fa-calendar-alt",
    author: "1MEDIA Komandası",
    authorIcon: "far fa-user-circle",
    btnText: "Davamı",
    btnIcon: "fas fa-angle-right",
    thumbFull: th,
    thumb: th,
    animationDelay: delay(i),
    id: p.id,
    date: p.date,
    tag: p.tag,
    title: p.title,
    text: p.text,
  };
}

/** Ən yeni → ən köhnə: 05 Mart … 14 Fevral */
const POSTS = [
  {
    id: 76,
    date: "05 Mart, 2026",
    tag: "Analitika",
    title: "GA4-də konversiya hadisələri: adlandırma qaydası və hesabatların uyğunluğu",
    text: "Eyni əməliyyat üçün fərqli hadisə adları hesabatları çətinləşdirir. Vahid terminologiya və təkrarlanmayan identifikatorlar komanda daxilində aydınlıq yaradır.",
    title2: "Vahid hadisə modeli və təhlil keyfiyyəti",
    fullContent: {
      intro: "Google Analytics 4-də hadisələrin düzgün qurulması marketinq və məhsul komandasının eyni rəqəmlərə baxmasına imkan verir. Əks halda, eyni konversiya müxtəlif adlar altında ikiqat sayıla bilər və ya ümumiyyətlə itirilə bilər.",
      paragraph1: "Hadisə adlarında böyük hərflər, boşluqlar və alt xətt ilə tire qarışığını minimuma endirmək tövsiyə olunur. Məsələn, “purchase” və “Purchase” fərqli hadisə kimi qəbul oluna bilər.",
      paragraph2: "Parametrlər vasitəsilə mənbə, kampaniya və ya məhsul növü ayrılmalı, əsas hadisə adı isə sabit saxlanılmalıdır. Bu yanaşma sonradan Looker Studio və daxili hesabatlarda filtrasiyanı asanlaşdırır.",
      quote: "Analitikada intizam, qərar qəbul etmə sürətini birbaşa artırır.",
      paragraph3: "Dəyişiklik edərkən köhnə hadisələrin tarixçəsini saxlamaq və ya keçid müddətində paralel izləmə aparmaq müqayisə üçün faydalıdır.",
      subheading: "Yoxlama siyahısı",
      listItems: [
        "Kritik funnel addımları üçün hadisə siyahısı",
        "Test mühitində real vaxtlı yoxlama",
        "Reklam platformaları ilə uyğunluq (məsələn, UTM ilə)",
        "İstifadəçi məxfiliyi və razılıq tələblərinə uyğunluq",
      ],
      conclusion: "Analitika quruluşunu sadələşdirmək və ya sıfırdan planlamaq üçün 1MEDIA komandası ilə əlaqə saxlaya bilərsiniz.",
    },
  },
  {
    id: 75,
    date: "04 Mart, 2026",
    tag: "Vebsayt",
    title: "Core Web Vitals: LCP və CLS üçün praktik təkmilləşdirmə addımları",
    text: "Səhifənin əsas məzmununun gec yüklənməsi və təsadüfi yer dəyişmələri istifadəçini yorur. Şəkillərin ölçüsü, font yüklənməsi və reklam bloklarının yerləşməsi bu göstəricilərə birbaşa təsir edir.",
    title2: "Sürət və vizual sabitlik",
    fullContent: {
      intro: "Core Web Vitals istifadəçi təcrübəsi ilə axtarış nəticələrində keyfiyyət siqnalı kimi qarşımıza çıxır. Kiçik biznes saytlarında da bir neçə düzgün addımla yaxşılaşma mümkündür.",
      paragraph1: "LCP üçün ən böyük şəkil və ya hero blokunun prioritetlə yüklənməsi, lazımsız skriptlərin təxirə salınması və server cavab müddətinin yoxlanması əsas istiqamətlərdəndir.",
      paragraph2: "CLS üçün isə ölçüsü əvvəlcədən bilinməyən şəkillər, dinamik reklam və ya son anda çıxan çubuqlar əsas problemdir. Rezerv edilmiş hündürlik və enlər bu sıçramanı azaldır.",
      quote: "Sürət yalnız texniki məsələ deyil, həm də etibar hissidir.",
      paragraph3: "Laboratoriya və sahə məlumatlarını birlikdə oxumaq real istifadəçi şəraitini daha yaxşı əks etdirir.",
      subheading: "Prioritet sırası",
      listItems: [
        "Kritik CSS və şəkil formatı (məsələn, WebP)",
        "Üçüncü tərəf skriptlərinin sayının azaldılması",
        "Şrift yükləmə strategiyası",
        "Mobil şəbəkədə test",
      ],
      conclusion: "Vebsayt auditi və performans təkmilləşdirməsi üçün 1MEDIA ilə əlaqə saxlayın.",
    },
  },
  {
    id: 74,
    date: "03 Mart, 2026",
    tag: "LinkedIn",
    title: "LinkedIn-də şərh strategiyası: fikir paylaşımı və görünürlük",
    text: "Peşəkar şəbəkədə qısa, dəqiq şərhlər bəzən uzun paylaşımdan daha çox əlaqə gətirir. Mövzunu oxumaq və əlavə dəyər vermək etibarın əsas hissəsidir.",
    title2: "Şərh yox, töhfə",
    fullContent: {
      intro: "LinkedIn alqoritmi müzakirəni nəzərə alır. Bu o demək deyil ki, hər yazının altına eyni ümumi cümlə yazmaq məqsədəuyğundur.",
      paragraph1: "Müəllifin fikrini qısa şəkildə təkrarlayıb üzərinə konkret nümunə, məlumat və ya sual əlavə etmək şərhi dəyərli edir.",
      paragraph2: "Öz məhsulunuzu hər şərhdə təqdim etmək aqressiv təsir yarada bilər. Əksinə, bəzən ümumi tövsiyə və ya təcrübə paylaşımı daha uzunmüddətli əlaqə gətirir.",
      quote: "Görünürlük tez-tez paylaşmaqdan yox, düzgün yerdə düzgün sözdən doğulur.",
      paragraph3: "Həftədə bir neçə dəfə seçilmiş yazılara səliqəli şərh yazmaq, heç bir şərh yazmamaqdan yaxşıdır.",
      subheading: "Şərh yazmazdan əvvəl",
      listItems: [
        "Yazının əsas iddiasını ayırmaq",
        "Oxucuya faydalı əlavə nöqtə tapmaq",
        "Həddindən artıq hashtagdan çəkinmək",
        "Peşəkar tonu qorumaq",
      ],
      conclusion: "B2B məzmun və LinkedIn strategiyası üçün 1MEDIA ilə işləyə bilərsiniz.",
    },
  },
  {
    id: 73,
    date: "02 Mart, 2026",
    tag: "SEO",
    title: "FAQ strukturlaşdırılmış məlumatı: axtarışda zəngin nəticə üçün şərtlər",
    text: "Tez-tez verilən suallar bölməsi istifadəçiyə faydalıdırsa, uyğun sxem ilə işarələmə axtarış nəticəsində əlavə görünüş verə bilər. Məzmun isə real suallara cavab verməlidir.",
    title2: "Sxem və məzmun uyğunluğu",
    fullContent: {
      intro: "Strukturlaşdırılmış məlumat axtarış motoruna səhifənin məzmununu daha yaxşı başa düşməyə kömək edir, lakin avtomatik “möcüzə” vəd etmir.",
      paragraph1: "FAQ blokunda hər sual üçün qısa, konkret cavab yazılmalıdır. Kopyalanmış ümumi mətnlər və ya boş suallar siyasət baxımından risklidir.",
      paragraph2: "Sxemin texniki doğruluğu (JSON-LD və ya uyğun format) yoxlanılmalı, səhifədə göstərilən cavablar sxemdəki mətnlə uyğun olmalıdır.",
      quote: "Struktur yalnız keyfiyyətli məzmunun üstünə tikiləndə işləyir.",
      paragraph3: "Yeni səhifələrdə FAQ əlavə edərkən mövcud naviqasiya və başlıq ierarxiyası ilə ziddiyyət yaratmamaq vacibdir.",
      subheading: "Tətbiqdə diqqət",
      listItems: [
        "Sualların istifadəçi dilində olması",
        "Cavabların yenilənməsi",
        "Səhifə başlığı ilə uyğunluq",
        "Rich result test alətləri ilə yoxlama",
      ],
      conclusion: "Texniki SEO və məzmun planı üçün 1MEDIA ilə əlaqə saxlayın.",
    },
  },
  {
    id: 72,
    date: "01 Mart, 2026",
    tag: "Email",
    title: "E-poçt siyahısının təmizlənməsi: bounce, etibar və çatdırılma",
    text: "Aktiv olmayan ünvanlar və səhv daxil edilmiş kontaktlar göndərici reputasiyasını aşağı salır. Ardıcıl təmizləmə kampaniyanın effektivliyini qoruyur.",
    title2: "Siyahı gigiyenası",
    fullContent: {
      intro: "E-poçt marketinqində siyahının keyfiyyəti, məzmunun keyfiyyəti qədər vacib ola bilər. Yüksək bounce dərəcəsi gələcək göndərişlərin çatmasına mane olur.",
      paragraph1: "Son açılış və ya klik tarixçəsinə əsaslanaraq segmentləşdirmək və uzun müddətdir reaksiya verməyən ünvanlara fərqli strategiya tətbiq etmək adi tətbiqdir.",
      paragraph2: "İkiqat təsdiq və ya aydın abunəlik prosesi səhv ünvanların siyahıya düşməsini azaldır.",
      quote: "Böyük siyahı yalnız rəqəm deyil; aktiv auditoriya həqiqi dəyərdir.",
      paragraph3: "Hər təmizləmə kampaniyadan əvvəl ehtiyat nüsxəsi və ya ixrac faylı saxlamaq tövsiyə olunur.",
      subheading: "Təmizləmə meyarları",
      listItems: [
        "Hard bounce qeydləri",
        "Şikayət və çıxış statistikası",
        "Domen və göndərici reputasiyası monitorinqi",
        "Segmentlərə uyğun mesaj tezliyi",
      ],
      conclusion: "E-poçt avtomatlaşdırması və siyahı idarəetməsi üçün 1MEDIA ilə danışa bilərsiniz.",
    },
  },
  {
    id: 71,
    date: "28 Fevral, 2026",
    tag: "Reklam",
    title: "Meta reklamında yaradıcı set: A/B testini düzgün qurmaq və oxumaq",
    text: "Eyni auditoriyaya fərqli vizual və başlıq kombinasiyaları verərkən nəticələri təkcə kliklə deyil, keyfiyyət siqnalları ilə qiymətləndirmək lazımdır.",
    title2: "Test hipotezi və ölçü",
    fullContent: {
      intro: "Yaradıcı set Meta tərəfindən avtomatik optimallaşdırıla bilər, amma marketinq komandasının hansı elementi sınaqdan keçirdiyini bilməsi öyrənmə üçün vacibdir.",
      paragraph1: "Eyni anda çox fərqli mesaj dəyişdirmək nəticənin hansı dəyişiklikdən gəldiyini ayırd etməyi çətinləşdirir. Bir dəfədə bir əsas fərq daha aydın nəticə verir.",
      paragraph2: "Statistik əhəmiyyət üçün kifayət qədər göstərim və vaxlamaq lazımdır; bir günə əsaslanan qənaətlər çox vaxt səhv yönləndirir.",
      quote: "Testin məqsədi qalibiyyət elan etmək deyil, növbəti addımı seçməkdir.",
      paragraph3: "Qalib yaradıcı tapıldıqdan sonra onu tədricən təkmilləşdirmək dayandırılmış innovasiyadan yaxşıdır.",
      subheading: "Hesabatda baxılmalılar",
      listItems: [
        "CTR və CPC dinamikası",
        "Konversiya və ya gözlənilən əməliyyat",
        "Tezliklə yorulma əlamətləri",
        "Auditoriya bölgüsü üzrə fərqlər",
      ],
      conclusion: "Reklam hesablarının qurulması və yaradıcı testlər üçün 1MEDIA ilə əlaqə saxlayın.",
    },
  },
  {
    id: 70,
    date: "27 Fevral, 2026",
    tag: "Məzmun",
    title: "Bloq məqaləsində H1 və meta təsvirinin uyğunluğu: axtarış və klik",
    text: "Başlıq real mövzunu əks etdirmirsə, meta təsvir isə həddindən artıq vəd verirsə, istifadəçi səhifədə tez çıxır. Bu, həm reputasiya, həm də siqnal baxımından mənfidir.",
    title2: "Gözlənti ilə məzmunun uyğunluğu",
    fullContent: {
      intro: "H1 səhifənin əsas mövzusunu bir cümlədə ifadə etməlidir. Meta təsvir isə axtarış nəticəsində həmin mövzunu qısa və cəlbedici şəkildə təqdim edir.",
      paragraph1: "Açar sözləri təbii şəkildə daxil etmək olar, amma eyni sözün təkrarı oxunuşu pozmamalıdır.",
      paragraph2: "Məqalənin ilk abzası istifadəçiyə dərhal dəyər vəd etməlidir; əks halda meta təsvirdəki cəlbedicilik boşa çıxır.",
      quote: "Klik almaq asandır; saxlamaq məzmunun işidir.",
      paragraph3: "Daxili keçidlər və məzmun xəritəsi oxucunu növbəti faydalı məqaləyə yönləndirməklə sessiyanı uzada bilər.",
      subheading: "Dərcdən əvvəl yoxlama",
      listItems: [
        "H1 ilə səhifə başlığının uyğunluğu",
        "Meta uzunluğu və oxunaqlıq",
        "Strukturlaşdırılmış alt başlıqlar",
        "Çağırış məzmuna uyğundurmu?",
      ],
      conclusion: "SEO məzmunu və bloq strategiyası üçün 1MEDIA ilə işləyə bilərsiniz.",
    },
  },
  {
    id: 69,
    date: "26 Fevral, 2026",
    tag: "Video",
    title: "Altyazı formatları: SRT faylı ilə platforma daxili altyazının fərqi",
    text: "Səssiz izləmə çox yayılıb. Altyazının sinxronluğu və oxunaqlığı tamamlama dərəcəsinə birbaşa təsir edir.",
    title2: "Əlçatanlıq və izlənmə",
    fullContent: {
      intro: "Hər platformanın öz altyazı redaktoru və ya fayl qəbul qaydası var. Bir formatda hazırlanan məzmunu başqa yerə köçərkən vaxt kodlarının sürüşməsi tez-tez rastlaşan problemdir.",
      paragraph1: "SRT ümumi və portativ formatdır; redaktə asandır və tərcümə prosesinə uyğundur.",
      paragraph2: "Platforma daxili altyazı bəzən avtomatik tərcümə və ya stil seçimləri təklif edir, amma ixrac və ehtiyat nüsxəsi üçün SRT saxlamaq faydalıdır.",
      quote: "Yaxşı altyazı eşitməyən auditoriya üçün də vizual məzmundur.",
      paragraph3: "Sətir uzunluğu və oxuma sürəti mobil ekran üçün xüsusilə vacibdir.",
      subheading: "Yoxlama",
      listItems: [
        "Səsdən bir neçə saniyə gecikmə testi",
        "Sətirlərin çox uzun olmaması",
        "Ədəbi düzgünlük və terminologiya",
        "Dil seçimlərinin mövcudluğu",
      ],
      conclusion: "Video montaj və altyazı xidmətləri üçün 1MEDIA ilə əlaqə saxlayın.",
    },
  },
  {
    id: 68,
    date: "25 Fevral, 2026",
    tag: "Strategiya",
    title: "Rəqib reklam kitabxanasını izləmək: etik hüdudlar və öyrənmə",
    text: "Açıq məlumatlardan istifadə etmək rəqabət təhlilinin hissəsidir, amma məzmunu birbaşa kopyalamaq həm hüquqi, həm də brend baxımından risklidir.",
    title2: "İlham və kopya arasında",
    fullContent: {
      intro: "Platformaların reklam şəffaflığı alətləri marketinq mütəxəssislərinə ümumi mesaj istiqaməti haqqında fikir verir.",
      paragraph1: "Rəqibin təklif etdiyi dəyər təklifini başa düşmək, özünüzün fərqləndirici cəhətlərinizi gücləndirmək üçündür; eyni vizualı təkrarlamaq deyil.",
      paragraph2: "Həftəlik və ya aylıq qısa qeyd formatında hansı mövzuların daha çox işləndiyini izləmək planlama üçün kifayət edə bilər.",
      quote: "Rəqabət təhlili öz səsinizi tapmaq üçündür, başqasının səsini oğurlamaq üçün deyil.",
      paragraph3: "Daxili hüquq və ya komplayens qaydaları varsa, təhlil prosesini əvvəlcədən uyğunlaşdırmaq vacibdir.",
      subheading: "Sənədləşdirmə",
      listItems: [
        "İzlənən brend və dövr",
        "Çıxarılan nəticə və növbəti təcrübə",
        "Etik qırmızı xətlər",
        "Öz kampaniyalarınızla müqayisə",
      ],
      conclusion: "Strategiya və rəqabət təhlili üçün 1MEDIA ilə danışa bilərsiniz.",
    },
  },
  {
    id: 67,
    date: "24 Fevral, 2026",
    tag: "SEO",
    title: "Daxili keçidlərdə anchor mətni: təbii dil və istifadəçi naviqasiyası",
    text: "Hər keçidə eyni açar sözü yazmaq köhnə üsuldur və oxunuşu pozur. Keçid mətni cümlənin məntiqi davamı olmalıdır.",
    title2: "Keçid mətninin məntiqi",
    fullContent: {
      intro: "Daxili keçidlər saytın strukturunu axtarış motoruna və insan oxucuya göstərir. Anchor mətni həmin keçidin məzmununa işarə etməlidir.",
      paragraph1: "“Buraya klikləyin” kimi ümumi ifadələr əlçatanlıq baxımından da zəif sayılır, çünki keçidin hədəfini açıqlamır.",
      paragraph2: "Eyni hədəf səhifəyə onlarla fərqli anchor ilə keçid bəzən təbii ola bilər, amma spam kimi görünən təkrarlar qaçınılmalıdır.",
      quote: "Yaxşı anchor oxucuya yol göstərir, açar sözü “doldurmur”.",
      paragraph3: "Köhnəlmiş və ya silinmiş səhifələrə keçidlərin vaxtaşırı yoxlanması texniki sağlamlıq üçün vacibdir.",
      subheading: "Yeniləmə planı",
      listItems: [
        "Hər bölmə üçün daxili keçid xəritəsi",
        "404 və döngə yoxlaması",
        "Yeni məqalələrin köhnələrlə əlaqələndirilməsi",
        "Mobil menyuda oxşar məntiq",
      ],
      conclusion: "Texniki SEO audit və məzmun üçün 1MEDIA ilə əlaqə saxlayın.",
    },
  },
  {
    id: 66,
    date: "23 Fevral, 2026",
    tag: "Sosial Media",
    title: "Məzmun bankı: brend üçün təkrarlanmayan ideya axını necə qurulur",
    text: "Hər gün sıfırdan düşünmək yorucudur. Mövzuları mövsüm, məhsul və auditoriya suallarına görə qruplaşdırmaq planı sadələşdirir.",
    title2: "Bank və təqvim",
    fullContent: {
      intro: "Məzmun bankı təkcə yazılmış postların saxlanması deyil, həm də təsvir, sitat, müştəri sualı və statistika kimi xammaldır.",
      paragraph1: "Hər mövzunu bir neçə formatda (qısa video, karusel, mətn) fikirləşmək eyni dəyəri müxtəlif auditoriyaya çatdırmağa kömək edir.",
      paragraph2: "Bankı ayda bir yeniləmək və köhnəlmiş məlumatı işarələmək keyfiyyəti qoruyur.",
      quote: "Strukturlaşdırılmış bank yaradıcılığı öldürmür; əksinə, komandaya vaxt qazandırır.",
      paragraph3: "Komanda üzvlərinin banka töhfə verməsi üçün sadə şablon və təsdiq addımı olmalıdır.",
      subheading: "Bankda saxlanıla bilər",
      listItems: [
        "Tez-tez verilən suallar",
        "Uğurlu kampaniya nümunələri",
        "Statistik cümlələr (mənbə ilə)",
        "Mövsümi təklif ideyaları",
      ],
      conclusion: "Sosial media məzmun planı üçün 1MEDIA ilə işləyə bilərsiniz.",
    },
  },
  {
    id: 65,
    date: "22 Fevral, 2026",
    tag: "Analitika",
    title: "UTM parametrləri ilə kampaniya mənbəyinin izlənməsi",
    text: "Eyni link müxtəlif yerlərdə paylaşılanda, hansı mənbənin daha yaxşı işlədiyini bilmək üçün vahid UTM qaydası lazımdır.",
    title2: "Mənbə və medium",
    fullContent: {
      intro: "UTM linkləri analitikada kampaniyaları ayırmaq üçün istifadə olunur. Qayda komanda üzrə yazılı deyilsə, hər kəs öz adlandırmasını yaradır və hesabatlar çirklənir.",
      paragraph1: "Kiçik hərf, tire ilə ayırma və ya alt xətt seçimi fərq etməz, vacib olanın hamı üçün eyni olmasıdır.",
      paragraph2: "Qısa link xidmətləri UTM-i gizlədə bilər; daxili sənədləşdirmədə tam URL saxlamaq faydalıdır.",
      quote: "Ölçülməyən kanal, tez-tez “işləyir” hesab olunur.",
      paragraph3: "Offline materiallarda QR ilə UTM birləşdirməsi real həyat kampaniyalarını da rəqəmləşdirir.",
      subheading: "Minimum set",
      listItems: [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "Lazım gələrsə utm_content",
      ],
      conclusion: "Analitika və ölçülmə üçün 1MEDIA ilə əlaqə saxlayın.",
    },
  },
  {
    id: 64,
    date: "21 Fevral, 2026",
    tag: "Vebsayt",
    title: "Vebsaytda forma: minimum sahə prinsipi və konversiya",
    text: "Hər əlavə sahə istifadəçinin formanı tamamlama ehtimalını azalda bilər. Yalnız zəruri məlumatı toplamaq həm hüquqi, həm də praktik faydalıdır.",
    title2: "Sadəlik və etibar",
    fullContent: {
      intro: "Əlaqə və ya sifariş forması çox vaxt vebsaytın ən kritik nöqtəsidir. Sahələrin sayı və etiketlərin aydınlığı birbaşa təslim olma dərəcəsinə təsir edir.",
      paragraph1: "Telefon nömrəsi formatı, ölkə kodu və səhv mesajları istifadəçidə çaşqınlıq yaradırsa, konversiya düşür.",
      paragraph2: "Məxfilik qeydi qısa olsa belə, məlumatın necə işlənəcəyinə keçid vermək etibar artırır.",
      quote: "Forma qısadırsa, istifadəçi də qərarı tez verir.",
      paragraph3: "Mobil klaviaturada uyğun input növü (məsələn, e-poçt üçün uyğun klaviatura) xırda detal kimi görünsə də, təsir edir.",
      subheading: "Optimallaşdırma",
      listItems: [
        "Sahə sayının azaldılması testi",
        "Avtomatik doldurma uyğunluğu",
        "Göndərmədən əvvəl xülasə addımı",
        "Uğurlu göndərmə mesajı",
      ],
      conclusion: "Vebsayt və konversiya optimallaşdırması üçün 1MEDIA ilə danışın.",
    },
  },
  {
    id: 63,
    date: "20 Fevral, 2026",
    tag: "Email",
    title: "E-poçt mövzu sətri: diqqət çəkən, amma aldadıcı olmayan dil",
    text: "Həddindən artıq iddia və ya saxta təcili mesajlar qısa müddətdə açılışı artırsa da, uzunmüddətdə etibarı sarsıdır.",
    title2: "Ton və həqiqət",
    fullContent: {
      intro: "Mövzu sətri məktubun açılıb-açılmayacağını müəyyənləşdirir. O, məktubun əsas vədini bir neçə sözlə ifadə etməlidir.",
      paragraph1: "Şəffaflıq: endirim varsa şərtləri qısaca göstərmək, yoxdursa iddia etməmək.",
      paragraph2: "Şəxsi salamlama ilə məzmunun uyğunluğu vacibdir; uyğunsuz şəxsi ton spam siqnalı ola bilər.",
      quote: "Açılış uğuru yalnız rəqəm deyil; sonrakı kliklər də hesablanmalıdır.",
      paragraph3: "A/B testində bir dəfədə bir dəyişiklik etmək nəticəni izah etməyi asanlaşdırır.",
      subheading: "Çəkiniləcək ifadələr",
      listItems: [
        "Yalan təcili dil",
        "Aldadıcı mükafat vədleri",
        "Həddindən artıq böyük hərflər",
        "Spam filtrini işə sala bilən simvol sırası",
      ],
      conclusion: "E-poçt marketinq məzmunu üçün 1MEDIA ilə əlaqə saxlayın.",
    },
  },
  {
    id: 62,
    date: "19 Fevral, 2026",
    tag: "Məzmun",
    title: "İstifadəçi suallarından bloq mövzusu çıxarmaq: dəstək və satışın kəsişməsi",
    text: "Dəstək və ya satış komandasının eşitdiyi suallar çox vaxt ən yaxşı bloq ideyalarını verir, çünki onlar real ehtiyacı əks etdirir.",
    title2: "Sualdan məqaləyə",
    fullContent: {
      intro: "Tez-tez təkrarlanan sual bir bloq mövzusuna çevrilə bilər. Bu, həm SEO, həm də növbəti müştəriyə vaxt qənaətidir.",
      paragraph1: "Sualları anonimləşdirib, ümumi dillə yazmaq məxfilik tələblərinə uyğundur.",
      paragraph2: "Məqalənin sonunda əlavə sual üçün aydın çağırış və ya dəstək keçidi qoymaq məntiqlidir.",
      quote: "Ən yaxşı mövzular çox vaxt ofisdə, axtarış konsolunda deyil.",
      paragraph3: "Mövzunu dərc etdikdən sonra komandaya keçid vermək dəstək yükünü azalda bilər.",
      subheading: "Toplama üsulu",
      listItems: [
        "Həftəlik sual qeydi",
        "Satış zənglərindən ümumi mövzular",
        "Çat tarixçəsinin təhlili",
        "Prioritet: təhlükəsizlik və məxfilik",
      ],
      conclusion: "Məzmun strategiyası üçün 1MEDIA ilə işləyə bilərsiniz.",
    },
  },
  {
    id: 61,
    date: "18 Fevral, 2026",
    tag: "Reklam",
    title: "Google Ads-də uyğunluq növü: geniş və dəqiq açar sözlər nə vaxt seçilməlidir",
    text: "Kampaniyanın məqsədi öyrənmədirsə, çox dar uyğunluq məlumat toplamağı yavaşlada bilər. Satış hədəflidirsə, niyyətin keyfiyyəti önə çıxır.",
    title2: "Uyğunluq və məlumat",
    fullContent: {
      intro: "Uyğunluq növü açar sözün axtarış sorğusu ilə nə qədər yaxın olmalı olduğunu müəyyənləşdirir. Seçim büdcə və məqsədlə bağlıdır.",
      paragraph1: "Yeni hesabda çox dar başlamaq bəzən göstərimi sıfıra yaxın saxlayır; geniş açar sözlərdən mərhələli keçid planlana bilər.",
      paragraph2: "Mənfi açar sözlərin vaxtaşır yenilənməsi reklam xərclərinin sərfiyyatını təmiz saxlayır.",
      quote: "Uyğunluq düyməsi təkbaşına strategiya deyil; o, strategiyanın alətidir.",
      paragraph3: "Axtarış sorğuları hesabatı həqiqi istifadəçi dilini öyrənmək üçün dəyərlidir.",
      subheading: "Hesabatda izləniləcəklər",
      listItems: [
        "Axtarış sorğusu və niyyət",
        "Çevrilmə və ya mikroçevrilmə",
        "Keyfiyyət balları",
        "Reklam uzantılarının təsiri",
      ],
      conclusion: "Google Ads idarəetməsi üçün 1MEDIA ilə əlaqə saxlayın.",
    },
  },
  {
    id: 60,
    date: "17 Fevral, 2026",
    tag: "Video",
    title: "Reels və qısa videolarda musiqi: lisenziya və platforma qaydaları",
    text: "Platforma kitabxanasından seçilmiş trek adətən daha təhlükəsizdir. Xarici treki uyğunsuz istifadə məzmunun silinməsinə və ya səsi söndürməyə gətirib çıxara bilər.",
    title2: "Hüquq və görünürlük",
    fullContent: {
      intro: "Hər platformanın müəllif hüququ siyasəti var. Kommersiya hesablarında bu məsələ daha həssasdır.",
      paragraph1: "Biznes üçün bəzən pullu kitabxana və ya özəl kompozisiya seçmək uzunmüddətli riski azaldır.",
      paragraph2: "Musiqi səsi azaldılıb danışıq önə çəkilərsə, bəzi hallarda hüquq riski dəyişir, amma hər platforma üçün yoxlamaq lazımdır.",
      quote: "Viral olmaq bir günə, hüquq məsələsi illərlə qala bilər.",
      paragraph3: "Canlı ifa və ya öz instrumentalınız ən təmiz yoldur, amma həmişə mümkün deyil.",
      subheading: "Yoxlama addımları",
      listItems: [
        "Platformanın kommersiya icazəsi",
        "Musiqi mənbəyinin sənədləşməsi",
        "Beynəlxalq auditoriya üçün əlavə risklər",
        "Arxivdəki köhnə videoların yenidən nəzərdən keçirilməsi",
      ],
      conclusion: "Video istehsalı və hüquqi məsləhət üçün 1MEDIA ilə danışa bilərsiniz.",
    },
  },
  {
    id: 59,
    date: "16 Fevral, 2026",
    tag: "Strategiya",
    title: "Marketinq KPI-lərinin biznes hədəfləri ilə uyğunlaşdırılması",
    text: "Yalnız izlənilə bilən rəqəmlər yox, həqiqətən idarəetmə qərarını dəyişdirən göstəricilər seçilməlidir.",
    title2: "Ölçü və məna",
    fullContent: {
      intro: "Çox vaxt “baxış sayı” və ya “abunəçi artımı” gözəl görünür, amma gəliri izah etmir. KPI seçimi strategiyanın mərkəzində dayanmalıdır.",
      paragraph1: "Hədəf auditoriya, qiymət nöqtəsi və satış dövrü KPI-lərin təbii çərçivəsini verir.",
      paragraph2: "Hər KPI üçün məsul şəxs və yenilənmə tezliyi yazılı olmalıdır.",
      quote: "Hər şeyi ölçmək, heç nəyi başa düşməmək deməkdir.",
      paragraph3: "Ara göstəricilər (məsələn, keyfiyyətli lead) uzun satış dövründə faydalıdır.",
      subheading: "Dəstək KPI nümunələri",
      listItems: [
        "Satışa təsir edən lead sayı",
        "Müştəri saxlama dərəcəsi ilə əlaqəli kampaniya",
        "Çevrilmə dəyəri və büdcə",
        "Məzmunla bağlı mikroçevrilmə",
      ],
      conclusion: "Strategiya sessiyası və KPI çərçivəsi üçün 1MEDIA ilə əlaqə saxlayın.",
    },
  },
  {
    id: 58,
    date: "15 Fevral, 2026",
    tag: "SEO",
    title: "Şəkil alt mətnində açar sözlər: təbii dil və əlçatanlıq",
    text: "Alt mətn əsasən ekran oxuyanlar və şəkil yüklənmə anı üçündür. Açar sözü təbii cümləyə hopdurmaq lazımdır, söz söz təkrar yox.",
    title2: "Alt mətnin iki vəzifəsi",
    fullContent: {
      intro: "Alt mətn şəklin məzmununu mətnlə təsvir edir. Boş və ya ümumi “şəkil1” kimi dəyərlər həm əlçatanlıq, həm də axtarış baxımından zəifdir.",
      paragraph1: "Dekorativ şəkillər üçün boş alt (dəstəklənən hallarda) bəzən məqsədəuyğundur; məlumat daşıyan şəkil üçün isə təsvir vacibdir.",
      paragraph2: "Fayl adını birbaşa alt mətnə kopyalamaq çox vaxt mənasız olur; insan oxucu üçün qısa təsvir yazmaq daha yaxşıdır.",
      quote: "Alt mətn açar söz doldurma sahəsi deyil; məzmun sahəsidir.",
      paragraph3: "E-ticarətdə məhsul şəkillərində rəng, model və ya əsas xüsusiyyət qısaca qeyd edilə bilər.",
      subheading: "Yaxşı nümunənin əlamətləri",
      listItems: [
        "Şəklin əsas mesajını izah edir",
        "Cümlə quruluşu təbii saxlanılıb",
        "Həddindən artıq açar söz yoxdur",
        "Səhifə konteksti ilə ziddiyyət yaratmır",
      ],
      conclusion: "SEO və əlçatanlıq auditləri üçün 1MEDIA ilə işləyə bilərsiniz.",
    },
  },
  {
    id: 57,
    date: "14 Fevral, 2026",
    tag: "Sosial Media",
    title: "Xüsusi günlərdə brend səsi: tonun seçimi və həssas mövzular",
    text: "Hər təqvim hadisəsi marketinq fürsəti deyil. Auditoriyanın mədəniyyətini və günün məzmununu nəzərə almadan paylaşım etmək tərs təsir buraxa bilər.",
    title2: "Həssaslıq və məqsəd",
    fullContent: {
      intro: "Xüsusi günlərdə brendlər çox vaxt qısa təbrik və ya faydalı məzmun seçir. Satış təzyiqi o gün üçün uyğun olmaya bilər.",
      paragraph1: "Daxili qayda: hansı günlərdə aktiv olunacaq, hansı günlərdə susacaq və ya yalnız faydalı məlumat veriləcəyi əvvəlcədən müzakirə edilə bilər.",
      paragraph2: "Cəmiyyətdə həssas olan mövzularda zarafat və ya yüngülük tonu xüsusilə risklidir.",
      quote: "Susmaq da bəzən brendin ən düzgün mesajıdır.",
      paragraph3: "Təcili reaksiya əvəzinə təsdiq olunmuş mətn şablonları böhran anında kömək edir, amma hər situasiya unikaldır.",
      subheading: "Planlaşdırma",
      listItems: [
        "Təqvimdə qeyd olunan xüsusi günlər",
        "Təsdiq zənciri",
        "Fərqli dillərdə auditoriya varsa, tərcümə yoxlaması",
        "Kampaniya ilə təbrikin ayrılması",
      ],
      conclusion: "Sosial media idarəetməsi və böhran kommunikasiyası üçün 1MEDIA ilə əlaqə saxlayın.",
    },
  },
];

function toV3(p, i) {
  const card = baseCard(p, i);
  return {
    ...card,
    title2: p.title2,
    fullContent: p.fullContent,
  };
}

const blogDataPath = path.join(root, "src", "assets", "jsonData", "blog", "BlogData.json");
const blogV3Path = path.join(root, "src", "assets", "jsonData", "blog", "BlogV3Data.json");

const existingData = JSON.parse(fs.readFileSync(blogDataPath, "utf8"));
const existingV3 = JSON.parse(fs.readFileSync(blogV3Path, "utf8"));

if (existingData.some((b) => b.id === 76)) {
  console.log("Bu məqalələr artıq əlavə olunub (id 76 tapıldı). Çıxılır.");
  process.exit(0);
}

const newCards = POSTS.map((p, i) => baseCard(p, i));
const newV3 = POSTS.map((p, i) => toV3(p, i));

const mergedData = [...newCards, ...existingData];
const mergedV3 = [...newV3, ...existingV3];

fs.writeFileSync(blogDataPath, JSON.stringify(mergedData, null, 4) + "\n", "utf8");
fs.writeFileSync(blogV3Path, JSON.stringify(mergedV3, null, 4) + "\n", "utf8");

console.log(`Əlavə edildi: ${POSTS.length} məqalə (id ${POSTS[POSTS.length - 1].id}–${POSTS[0].id}).`);
