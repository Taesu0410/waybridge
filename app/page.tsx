import Image from 'next/image';
import {
  ArrowUpRight,
  BookOpenCheck,
  Check,
  GraduationCap,
  MessageCircle,
  Phone,
  Target,
} from 'lucide-react';

const cumulativeAdmissions = [
  ['Harvard', 'Computer Science', '1'],
  ['MIT', 'Chemical Engineering · Mathematics', '2'],
  ['Dartmouth', 'Government', '1'],
  ['UPenn', 'Computer Science 1명 · College of Arts & Sciences 2명', '3'],
  ['NYU', 'Dental ×2 · Stern · Undecided', '4'],
  ['UDM', '7-year Dental Program', '2'],
  ['UoP', '7-year Dental Program', '1'],
  ['USC', 'Architecture', '1'],
  ['Columbia', 'Biology', '1'],
  ['Michigan', 'Physiology', '1'],
  ['UCLA', 'Computer Science', '1'],
];

const cumulativeAdmissionsTotal = cumulativeAdmissions.reduce((total, [, , count]) => total + Number(count), 0);

const professionalAdmissions = [
  ['Columbia University', 'College of Dental Medicine', 'D.D.S.', 'Class of 2029'],
  ['University of Pennsylvania', 'School of Dental Medicine', 'D.M.D.', 'Class of 2030'],
  ['University of Southern California', 'Herman Ostrow School of Dentistry', 'D.D.S.', 'Class of 2030'],
  ['University of Pennsylvania', 'School of Dental Medicine', 'D.M.D.', 'Class of 2028 · 2024'],
];

// 2026 U.S. News National Universities order: 6, 7, 15, 32, 36, 46, 88.
const undergraduate2026 = [
  ['University of Chicago', 'Transfer Admission'],
  ['University of Pennsylvania ×2', 'College of Arts & Sciences'],
  ['Columbia University', 'School of General Studies'],
  ['New York University ×2', 'Liberal Studies Core · CAS Prehealth / Dental Track'],
  ['University of Wisconsin–Madison', 'College of Letters & Science'],
  ['Purdue University', 'Computer & Information Technology'],
  ['Rochester Institute of Technology', 'Electrical Engineering · Computer Engineering Option'],
];

// Owner-reported total; the school/program list above contains the supplied breakdown.
const undergraduate2026Total = 10;

const admissions2024to2025 = [
  'Harvard · Computer Science',
  'MIT · Mathematics',
  'Dartmouth · Government',
  'NYU · Predental',
  'NYU Stern',
  'NYU · Undecided',
  'USC · Architecture',
  'Columbia · Biology',
  'University of Pennsylvania · BS/MD',
  'UCLA · Computer Science',
  'Michigan · Psychology',
  'Michigan · Biology',
  'Michigan · Nursing',
];

const scores = [
  ['1600', '800 / 800', '2022.10'],
  ['1600', '800 / 800', '2025.8'],
  ['1580', '790 / 790', '2026.3'],
  ['1570', '770 / 800', '2026.3'],
  ['1540', '770 / 770', '2026.9 · +100점'],
  ['1520', '760 / 760', '2025.12'],
  ['1510', '710 / 800', '2026.9 · +130점'],
  ['1500', '710 / 790', '2026.9 · +160점'],
  ['1580', '780 / 800', '2026.8 · +340점'],
];

const subjects = [
  'DAT · All Sections',
  'SAT / ACT',
  'AP Calculus BC',
  'AP Physics C · E&M',
  'AP Chemistry',
  'AP Micro / Macro Economics',
  'AP Biology',
  'AP Statistics',
  'AP Precalculus',
  'AMC · AIME · USMO',
];

// ADA Table 1 (old to new, updated 2025-01-29): approximate equivalents,
// not scores from a new-scale administration.
const datConcordanceUrl = 'https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/education/dat_scorereportingscale.pdf';
const instructorDatScores = [
  ['Academic Average', '27', '540'],
  ['Biology', '27', '550'],
  ['General Chemistry', '28', '570'],
  ['Organic Chemistry', '30', '590'],
];

const methods = [
  [Target, '이해 중심', '정답보다 문제의 구조와 재현 가능한 풀이를 만듭니다.'],
  [MessageCircle, '매일 관리', '수업이 없는 날도 카카오톡과 전담 TA로 체크합니다.'],
  [BookOpenCheck, '전 과목 DB', 'SAT·ACT·AP·IB 자료와 자체 프로그램을 활용합니다.'],
] as const;

const waybridgeSites = [
  { name: 'Waybridge', description: 'way-bridge.com', href: 'https://way-bridge.com/' },
  { name: 'Waybridge Consulting', description: '미국·캐나다 유학 컨설팅', href: 'https://www.waybridgeconsulting.com/' },
] as const;

export default function Home() {
  return (
    <main>
      <div className="phone-bar">
        <a href="tel:01080333896" aria-label="010-8033-3896으로 전화 상담">
          <Phone size={14} aria-hidden="true" />
          <span>전화 상담</span>
          <strong>010-8033-3896</strong>
        </a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jay 페이지 맨 위로">
          <span className="brand-mark" aria-hidden="true">W.</span>
          <span className="brand-wordmark">Waybridge<small>JAY · INSTRUCTOR &amp; FOUNDER</small></span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#dat-results">DAT</a>
          <a href="#class">SAT · AP</a>
          <a className="nav-secondary" href="#profile">소개</a>
          <a href="#results">결과</a>
          <a className="nav-secondary" href="#story">설립 이야기</a>
          <a className="nav-cta" href="#contact">문의 <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <Image
          className="hero-busan"
          src="/busan-gwangan-bridge.jpg"
          alt="마린시티에서 바라본 부산 광안대교 야경"
          fill
          sizes="100vw"
          loading="eager"
        />
        <div className="hero-shade" aria-hidden="true" />

        <div className="hero-layout shell">
          <div className="hero-copy">
            <div className="hero-intro">
              <p className="eyebrow">DAT · SAT · AP/IB · ACT</p>
              <h1>Jay <span>Founder of Waybridge</span></h1>
            </div>
            <p className="hero-specialty">DAT 전문 강사 / STEM Major &amp; 미국 치대 입시 컨설팅</p>
            <p className="hero-lead">University of Pennsylvania 치대 합격 · DAT AA 27 · SAT 1590 · 미국 입시 과외 및 컨설팅 6년째</p>
            <div className="credential-row" aria-label="핵심 이력">
              <span>Founder of Waybridge</span>
              <span>Maine School of Science and Mathematics</span>
              <span>UDM 7-Year Dental</span>
              <span>Vivian &amp; Stanley 국제학교 AP Chem&amp;Bio 강사</span>
              <span>Honors 어학원 SAT 대표 강사</span>
            </div>
            <div className="hero-actions">
              <a className="primary-button" href="#dat-results">DAT 성과 <ArrowUpRight size={16} /></a>
              <a className="primary-button" href="#class">SAT · AP 성과 <ArrowUpRight size={16} /></a>
              <a className="primary-button" href="#results">합격 리스트 보기 <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-site-links" role="group" aria-label="Waybridge 사이트 바로가기">
              {waybridgeSites.map((site) => (
                <a key={site.href} href={site.href} target="_blank" rel="noopener noreferrer" aria-label={`${site.name} — ${site.description} (새 탭에서 열기)`}>
                  <span><strong>{site.name}</strong><small>{site.description}</small></span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <figure className="hero-photo">
            <Image
              src="/joo-taesu-cutout-cropped.png"
              alt="Jay, Founder of Waybridge"
              width={520}
              height={840}
              sizes="(max-width: 680px) 190px, 420px"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption><span>JAY</span><span>FOUNDER OF WAYBRIDGE</span></figcaption>
          </figure>

          <div className="hero-proof" aria-label="핵심 성과">
            <div className="hero-score-pair">
              <p><strong>1590</strong><span>강사 SAT</span></p>
              <p><strong>27</strong><span>강사 DAT AA · 환산 약 540</span></p>
            </div>
            <div><strong>60%+</strong><span>SAT 수강생 1550점 이상</span></div>
            <div><strong>50+</strong><span>누적 AP 5점</span></div>
            <div><strong>16명</strong><span>Top 20 대학 입학</span></div>
          </div>
        </div>

      </section>

      <section className="compact-section shell" id="class">
        <div className="section-title">
          <p>01 / SAT &amp; AP RESULTS</p>
          <h2>SAT 고득점부터<br />AP 5점까지.</h2>
        </div>

        <div className="class-grid">
          <div className="sat-panel">
            <div className="sat-highlights">
              <div><span>강사 SAT</span><strong>1590</strong></div>
              <div><span>강사 DAT</span><strong>27</strong><p>Academic Average</p></div>
              <div><span>2026 여름</span><strong>8명</strong><p>+300점 또는 1550+</p></div>
              <div><span>1550+ 비율</span><strong>60%+</strong></div>
            </div>
            <div className="score-strip" aria-label="SAT 점수 기록">
              {scores.map(([total, split, note], index) => (
                <div key={`${total}-${index}`}><strong>{total}</strong><span>RW / M {split}</span><em>{note}</em></div>
              ))}
            </div>
            <p className="score-note">학생 성적 기록 기준 · RW / M 순서</p>
          </div>

          <div className="subjects-panel">
            <div className="ap-highlight"><div><p className="card-kicker">AP RESULTS</p><h3>누적 AP 5점</h3></div><strong>50<span>개 이상</span></strong></div>
            <p className="subjects-label">수업 가능 과목</p>
            <div className="subject-list">{subjects.map((subject) => <span key={subject}>{subject}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="compact-section shell" id="profile">
        <div className="section-title">
          <p>02 / PROFILE</p>
          <h2>짧고 명확하게.<br />끝까지 관리합니다.</h2>
        </div>

        <div className="profile-grid">
          <article className="bio-card">
            <p className="card-kicker">EDUCATION &amp; CAREER</p>
            <h3>DAT · SAT · AP부터<br />미국 대학·치대 입시까지.</h3>
            <ul>
              <li><Check size={15} /> Maine School of Science and Mathematics 졸업</li>
              <li><Check size={15} /> University of Detroit Mercy 7-Year Dental Program</li>
              <li><Check size={15} /> University of Pennsylvania School of Dental Medicine D.M.D. 합격</li>
              <li><Check size={15} /> Vivian &amp; Stanley 국제학교 · AP Chemistry / Calculus 선생님</li>
              <li><Check size={15} /> Honors 어학원 · AP / SAT 강사</li>
            </ul>
            <div className="score-jump"><span>직접 경험한 SAT 상승</span><strong>1320 → 1570</strong><em>3개월</em></div>
            <a className="story-jump" href="#story">Waybridge를 시작한 이야기 <ArrowUpRight size={16} aria-hidden="true" /></a>
          </article>

          <div className="method-stack">
            {methods.map(([Icon, title, copy], index) => (
              <article key={title}>
                <span className="method-no">0{index + 1}</span>
                <Icon size={20} />
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
            <p className="outcome-note">AP 4점 이상 · 교과 A− 이상을 꾸준히 달성</p>
          </div>
        </div>

        <section className="founder-story" id="story" aria-labelledby="story-title">
          <div className="story-heading">
            <p className="card-kicker">WHY WAYBRIDGE</p>
            <h2 id="story-title">제가 받았던 도움을,<br />다음 학생에게도.</h2>
            <p>유학을 떠났던 학생이, 후배들의 길을 함께하는 사람이 되기까지.</p>
          </div>
          <div className="story-grid">
            <article className="story-narrative" aria-labelledby="story-origin-title">
              <h3 id="story-origin-title">Waybridge를 시작한 이유</h3>
              <p>저는 중학교 때 지인의 소개로 유학원을 통해 처음 미국에 갔습니다. Kansas City 지역의 Bishop Miege에 다녔지만, 홈스테이 문제로 약 6개월 동안 마음고생을 했습니다. 낯선 곳에서 도움이 필요했을 때, 기대했던 도움을 받지 못한 시간이었습니다.</p>
              <p>결국 부모님과 직접 학교를 알아보다 Maine School of Science and Mathematics를 만났습니다. 기숙사에서 생활하며 혼자 감당하던 어려움이 줄었고, 학교와 미국 생활에도 잘 적응할 수 있었습니다. <strong>학생에게 맞는 학교란 성적뿐 아니라 생활과 적응까지 함께 생각해야 한다는 것</strong>을 그때 배웠습니다.</p>
              <p>대학 진학을 준비하며 다시 여러 유학원의 도움을 구했지만, 해야 할 일을 하나부터 열까지 직접 챙겨야 했습니다. 그 과정의 마지막에 만난 분이 지금의 Waybridge 헤드 컨설턴트인 윤유선 컨설턴트님입니다. 진학 준비에 실질적인 도움을 받았고, 여러 학교에 합격하며 깊은 신뢰를 쌓았습니다.</p>
              <p>저는 후배들이 같은 어려움을 겪지 않았으면 했습니다. 제가 받았던 도움을 다음 학생들에게도 전하고 싶어 함께해 보자고 제안했습니다. <strong>도움을 받던 학생과 그 길을 함께했던 컨설턴트가 동료가 되어</strong>, 같은 뜻을 가진 사람들과 Waybridge를 만들었습니다.</p>
              <p>크리스천으로서 이웃을 사랑하고 돌보는 가치를 제 일에서도 실천하고 싶습니다. 필요한 순간에 곁에서 함께 고민해 주는 사람, 학생 한 명 한 명의 가능성을 진심으로 응원하는 사람이 되겠습니다.</p>
              <p className="story-signature">Jay · Founder of Waybridge</p>
            </article>
            <aside className="story-values" aria-labelledby="story-values-title">
              <p className="card-kicker">OUR VALUES &amp; VISION</p>
              <h3 id="story-values-title">입학 이후에도,<br />함께 성장하는 크루.</h3>
              <p className="story-values-intro">학생을 서비스를 받는 고객으로만 보지 않습니다. 우리의 후배이자 친구, 앞으로 함께 성장할 크루의 일원으로 바라봅니다.</p>
              <ul>
                <li><h4>재능을 발견하고, 열정을 키웁니다.</h4><p>학생의 재능과 가능성을 함께 발견하고, 앞으로 어떤 삶을 살아가면 좋을지 꾸준히 이야기하며 방향과 비전을 찾아갑니다.</p></li>
                <li><h4>계획 이후에도 함께합니다.</h4><p>길을 제시하고, 함께 의논하고, 함께 호흡합니다. 준비 과정을 꾸준히 살피며 상황이 달라지면 다음 계획도 함께 조정합니다.</p></li>
                <li><h4>받은 도움을 다음 사람에게 전합니다.</h4><p>좋은 학교에 가는 것과 함께, 자신의 자리에서 최선을 다하고 다른 사람을 배려하는 사람으로 성장하기를 바랍니다.</p></li>
              </ul>
              <div className="story-vision"><h4>우리가 만들어 가고 싶은 공동체</h4><p>대학생활부터 치대·의대·법대, 박사과정과 MBA 등 다음 진로까지. 장기적으로는 미국에서의 취업과 생활 경험도 나누며, 먼저 경험한 사람이 후배에게 힘이 되어 주는 공동체를 만들고 싶습니다.</p></div>
              <a href="https://www.waybridgeconsulting.com/" target="_blank" rel="noopener noreferrer" aria-label="Waybridge Consulting 알아보기 (새 탭에서 열기)">Waybridge Consulting 알아보기 <ArrowUpRight size={16} aria-hidden="true" /></a>
            </aside>
          </div>
        </section>
      </section>

      <section className="results-section" id="results">
        <div className="shell">
          <div className="section-title light-title">
            <p>03 / RESULTS</p>
            <h2>입학과 합격으로<br />증명한 결과</h2>
          </div>

          <div className="result-stats">
            <div><strong>{cumulativeAdmissionsTotal}</strong><span>누적 주요 대학 입학생</span></div>
            <div><strong>50+</strong><span>학생 누적 AP 5점</span></div>
            <div><strong>{undergraduate2026Total}</strong><span>2026 학부 결과</span></div>
            <div><strong>4</strong><span>Dental / Professional</span></div>
            <div><strong>13</strong><span>2024–2025 RESULT</span></div>
          </div>

          <div className="result-group professional-group">
            <div className="group-heading">
              <p>GRADUATE &amp; PROFESSIONAL</p>
              <h3>치과대학·전문대학원</h3>
            </div>
            <div className="professional-grid">
              {professionalAdmissions.map(([school, unit, degree, note]) => (
                <article key={`${school}-${note}`}>
                  <GraduationCap size={18} />
                  <div><h4>{school}</h4><p>{unit}</p></div>
                  <strong>{degree}</strong><span>{note}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="results-columns">
            <div className="result-group">
              <div className="group-heading inline-heading">
                <div><p>CUMULATIVE</p><h3>주요 대학 입학 · {cumulativeAdmissionsTotal}명</h3></div>
                <span>학생 중복 없음</span>
              </div>
              <div className="dense-list">
                {cumulativeAdmissions.map(([school, program, count]) => (
                  <div key={`${school}-${program}`}><strong>{school}</strong><span>{program}</span><em>{count}명</em></div>
                ))}
              </div>
            </div>

            <div className="result-group">
              <div className="group-heading inline-heading">
                <div><p>2026</p><h3>학부 합격 · {undergraduate2026Total}건</h3></div>
              </div>
              <div className="dense-list">
                {undergraduate2026.map(([school, program]) => (
                  <div key={`${school}-${program}`}><strong>{school}</strong><span>{program}</span><em>합격</em></div>
                ))}
              </div>
            </div>
          </div>

          <details className="archive-results">
            <summary><span>2024–2025 RESULT</span><strong>13 ADMISSIONS +</strong></summary>
            <div>{admissions2024to2025.map((item) => <span key={item}>{item}</span>)}</div>
          </details>

          <p className="results-note">합격 결과는 과정과 연도별로 구분하여 표기했습니다.</p>
        </div>
      </section>

      <section className="dat-section shell" id="dat-results" aria-labelledby="dat-title">
        <div className="dat-section-heading">
          <div><p className="card-kicker">04 / DAT RESULTS</p><h2 id="dat-title">DAT, 8명 모두 22점 이상.</h2></div>
          <p>Biology · General Chemistry · Organic Chemistry</p>
        </div>
        <div className="dat-focus-grid">
          <article className="dat-student-panel">
            <h3>DAT 수강생 누적 성과</h3>
            <div className="dat-student-stats">
              <div><span>누적 지도 학생</span><strong>8 / 8<small>명</small></strong><p>전원 기준 달성</p></div>
              <div><span>Academic Average</span><strong>22<small>점 이상</small></strong><p>신척도 환산 약 460+</p></div>
              <div><span>Bio · Gen Chem 각각</span><strong>23<small>점 이상</small></strong><p>신척도 환산 각각 약 470+</p></div>
            </div>
            <p className="dat-cohort-note">누적 수강생 8명 전원 AA 22점 이상, Biology·General Chemistry 각각 23점 이상 달성.</p>
          </article>
          <article className="dat-instructor-panel">
            <div className="dat-instructor-heading"><h3>Jay의 DAT 점수</h3><span>기존 점수 / 신척도 근사 환산</span></div>
            <dl className="dat-instructor-scores">
              {instructorDatScores.map(([subject, score, converted]) => (
                <div key={subject}><dt>{subject}</dt><dd><strong>{score}</strong><span>약 {converted}</span></dd></div>
              ))}
            </dl>
          </article>
        </div>
        <p className="dat-conversion-note">기존 점수는 1–30점 척도입니다. 환산값은 <a href={datConcordanceUrl} target="_blank" rel="noreferrer">ADA 공식 환산표</a>에 따른 200–600점 척도의 근사값이며, 신척도로 응시한 실제 성적과는 구분됩니다.</p>
      </section>

      <section className="faith-section shell" id="faith" aria-labelledby="faith-title">
        <div className="faith-panel">
          <p className="card-kicker">05 / FAITH &amp; VALUES</p>
          <div>
            <h2 id="faith-title">믿음을 바탕으로, 진심을 다해.</h2>
            <p className="faith-statement">크리스천으로서 하나님 앞에 부끄럽지 않도록, 학생 한 명 한 명을 진심으로 가르치고 책임 있게 관리합니다.</p>
            <p className="faith-signature">Jay · Founder of Waybridge</p>
            <figure className="faith-verse">
              <blockquote>
                <p lang="ko">두려워 말라 내가 너와 함께 함이니라<br />놀라지 말라 나는 네 하나님이 됨이니라</p>
                <p className="faith-verse-english" lang="en">So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.</p>
              </blockquote>
              <figcaption>
                <span>이사야 41장 10절 · Isaiah 41:10, NIV</span>
                <span><a href="https://www.bskorea.or.kr/bible/korbibReadpage.php?linkBible=BHANisa041010" target="_blank" rel="noreferrer">개역한글</a> · <a href="https://www.biblegateway.com/passage/?search=ISAIAH+41%3A10&amp;version=NIV" target="_blank" rel="noreferrer">NIV</a></span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <div><p>DAT · SAT · AP &amp; ADMISSIONS</p><h2>시험 준비부터<br />미국 대학·치대 진학까지.</h2></div>
          <a className="contact-status" href="tel:01080333896">DAT · SAT · AP 수업 상담 <Phone size={19} /></a>
        </div>
        <div className="shell contact-site-links" role="group" aria-label="Waybridge 관련 사이트">
          {waybridgeSites.map((site) => (
            <a key={site.href} href={site.href} target="_blank" rel="noopener noreferrer" aria-label={`${site.name} (새 탭에서 열기)`}>
              {site.name}<ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <footer className="site-footer shell">
        <span>© 2026 JAY</span>
        <p>모든 결과는 개인별 여건에 따라 달라질 수 있습니다. 학생 개인정보는 비식별 형태로 표시했습니다.</p>
      </footer>
    </main>
  );
}
