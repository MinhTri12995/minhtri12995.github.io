(function () {
  'use strict';

  const TRANSLATIONS = {
    en: {
      nav_work: 'Systems',
      nav_services: 'Services',
      nav_workflow: 'Workflow',
      nav_estimate: 'Quick Brief',
      status_available: 'Open for micro-gigs',
      hero_eyebrow: 'Systems-First Vibe Coder · 20x AI Orchestration',
      hero_title: 'Ship reliable AI apps & automations in days — at indie-friendly rates.',
      hero_lead:
        'I combine 20x frontier AI agent compute with real systems engineering (atomic ledgers, distributed locks, proxy resilience & security checks). You get production-grade software fast on a per-gig budget — no agency bloat, no full-time retainer required.',
      hero_cta_primary: 'Build Your 30-Sec Brief →',
      hero_cta_secondary: 'Inspect Shipped Systems',
      proof_1: 'Full-stack SaaS, AI Workspace & Ops Engines shipped',
      proof_2: 'Parallel multi-agent coding, testing & verification',
      proof_3: 'Scoped per-project pricing · 1–7 days turnaround',
      proof_4: 'Built to survive concurrency, timeouts & edge cases',
      work_eyebrow: 'Production Case Studies',
      work_title: 'Systems shipped beyond "demo mode"',
      work_desc: 'Every system below was engineered to handle real traffic, unreliable external APIs, and concurrent user actions.',
      badge_live: 'Live Production',
      badge_private: 'Private Prod System',
      lbl_problem: 'Problem',
      lbl_arch: 'Architecture',
      lbl_outcome: 'Outcome',
      case1_summary: 'Full-stack bilingual IELTS preparation SaaS powered by an isolated scoring engine, dual-examiner LLM panel, and atomic credit billing.',
      case1_prob: 'Single-prompt AI graders drift wildly in band scores and lose user credits when LLM calls timeout.',
      case1_arch: '4-stage evaluation pipeline + Blind Adjudication on ≥1.0 band variance + idempotent credit ledger with auto-refund.',
      case1_out: 'Consistent scoring grounded to character offsets, Render scoring server + Vercel failover, Stripe/PayOS/Crypto ready.',
      case2_title: 'Automated Digital Vault & AI Dispute Engine',
      case2_summary: 'High-concurrency digital inventory manager, automated access fulfillment portal, and AI Vision payment verification workflow.',
      case2_prob: 'Concurrent stock claims caused double-assignments; proxy blocks and fake warranty screenshots caused stock loss.',
      case2_arch: 'Lease-locked worker queue, SQLite WAL + Supabase RPC, rotating proxy circuit breaker & AI Vision OCR matching.',
      case2_out: 'Zero double-claims under load, >95% card OCR verification accuracy, automated Telegram ops alerts.',
      case3_summary: 'Pitch-black multi-model chat workspace streaming 65+ LLMs via a secure Express SSE proxy with Firebase authentication and Firestore history.',
      case3_prob: 'Client-side LLM apps leak API keys and break when switching across different provider schemas.',
      case3_arch: 'React/Vite UI → Firebase ID Token verification → Express SSE adapter proxy with graceful seed fallback.',
      case3_out: 'Fast real-time streaming across frontier models with zero exposed upstream keys and clean fallback resilience.',
      btn_open_live: 'Open Live App ↗',
      btn_inspect: 'Inspect Architecture',
      btn_hide: 'Hide Architecture',
      arch_heading: 'Verified Engineering Mechanics:',
      arch_ielts_1: 'Stage 0 Vision Pipeline: Extracts structured chart data for Task 1 prompts before grading so examiners verify figures accurately.',
      arch_ielts_2: '2-Examiner Panel + Blind Adjudicator: Runs two distinct LLMs in parallel and auto-invokes a third blind judge when scores diverge by ≥ 1.0 band.',
      arch_ielts_3: 'Atomic Quota Ledger: SHA-256 request deduplication with RESERVED → COMMITTED | REFUNDED transitions across wallet pools.',
      arch_vault_1: 'Atomic Lease-Locking Queue: Workers claim jobs with 180s expiring lease tokens and fingerprint guards so stale workers never overwrite fresh state.',
      arch_vault_2: 'Dual-Evidence Verifier: Strict HTTP & JSON classification prevents 429/5xx network errors from being misread as valid or dead items.',
      arch_vault_3: 'Security Hardening: CSRF protection, multi-tier rate limiting, scrypt/werkzeug hashed auth, and zero credential logging.',
      arch_trigpt_1: 'Zero Key Exposure: Browser holds only short-lived Firebase ID tokens; upstream LLM credentials remain strictly on the Express backend.',
      arch_trigpt_2: 'Graceful Degradation: Automatically degrades to catalog seed mode if upstream config is missing, preventing white-screen crashes.',
      svc_eyebrow: 'Scoped Gigs & Transparent Rates',
      svc_title: 'Small, fast, affordable — pay per shipped milestone',
      svc_desc: 'No full-time lock-in. Pick the exact size of work you need and pay less because 20x AI compute cuts build time down to days.',
      svc1_price: 'From $35+',
      svc1_time: '1–3 Days',
      svc1_title: 'Python Bots, Scrapers & Automation',
      svc1_li1: 'Proxy-resilient data scrapers & auto-checkers',
      svc1_li2: 'Telegram / Discord alert & workflow bots',
      svc1_li3: 'AI Vision OCR & document parsing scripts',
      svc1_li4: 'Clean CLI, logs, and retry safety included',
      svc2_price: 'From $50+',
      svc2_time: '1–3 Days',
      svc2_title: 'Vibe-Code Rescue & Production Fix',
      svc2_li1: 'Fix stuck Cursor, Lovable, or Bolt prototypes',
      svc2_li2: 'Eliminate race conditions, DB locks & auth leaks',
      svc2_li3: 'Add rate limiting, CSRF & error fallbacks',
      svc2_li4: 'Deploy cleanly to Vercel, Render, or VPS',
      svc3_price: 'From $120+',
      svc3_time: '3–7 Days',
      svc3_title: 'Fast-Track AI Web App / SaaS MVP',
      svc3_li1: 'Next.js / React + Python or Node backend',
      svc3_li2: 'Multi-LLM API streaming & credit/quota ledger',
      svc3_li3: 'Firebase / Supabase Auth + Stripe / PayOS billing',
      svc3_li4: 'Responsive dark/light UI + full source handover',
      wf_eyebrow: 'Engineering Workflow',
      wf_title: "Why my vibe coding doesn't break in production",
      wf1_t: 'Systems Spec First',
      wf1_d: 'Define state transitions, failure modes, rate limits, and database invariants before generating code.',
      wf2_t: '20x Parallel AI Agents',
      wf2_d: 'Orchestrate high-quota frontier models across frontend, backend, and tests simultaneously for rapid delivery.',
      wf3_t: 'Adversarial Verification',
      wf3_d: 'Stress-test concurrency, API 429/500 timeouts, auth boundaries, and input validation before handoff.',
      wf4_t: 'Clean Deploy & Handover',
      wf4_d: 'Deliver documented GitHub repo, .env.example, and live Vercel/Render deployment ready for real users.',
      est_eyebrow: '30-Second Gig Brief',
      est_title: 'Scope your job & send it in one click',
      est_desc: 'Select what you need below to generate a structured project brief. Copy it to send on Telegram/Facebook/Upwork, or submit directly via GitHub.',
      fld_type: '1. Project Type',
      opt_type_1: 'AI Web App / MVP',
      opt_type_2: 'Python Bot / Automation',
      opt_type_3: 'Fix Vibe-Coded App',
      fld_timeline: '2. Target Timeline',
      opt_time_1: 'Urgent (48h)',
      opt_time_2: 'Standard (3–5 days)',
      opt_time_3: 'Flexible',
      fld_budget: '3. Budget Comfort Zone',
      opt_bud_1: '$35 – $100',
      opt_bud_2: '$100 – $250',
      opt_bud_3: '$250 – $500+',
      opt_bud_4: 'Suggest Scope',
      fld_idea: '4. Short Description',
      fld_contact: '5. Your Contact (Telegram / Zalo / Email / FB)',
      fld_preview: 'Generated Brief Preview',
      btn_copy: 'Copy Brief',
      btn_submit_gh: 'Submit via GitHub Inquiry →',
      footer_hire: 'Book a Gig',
      copied_msg: 'Copied to clipboard — ready to paste!'
    },
    vi: {
      nav_work: 'Dự án thật',
      nav_services: 'Dịch vụ & Giá',
      nav_workflow: 'Quy trình',
      nav_estimate: 'Tạo Brief',
      status_available: 'Nhận job lẻ nhanh',
      hero_eyebrow: 'Systems-First Vibe Coder · Điều phối 20x AI Agents',
      hero_title: 'Biến ý tưởng thành Web AI & Tool tự động chạy ổn định trong vài ngày — chi phí hợp túi tiền.',
      hero_lead:
        'Mình kết hợp sức mạnh tính toán 20x AI Agents với tư duy thiết kế hệ thống (ledger nguyên tử, khóa hàng đợi chống đụng độ, proxy fallback & bảo mật). Bạn nhận sản phẩm chuẩn Production nhanh theo từng job lẻ — không tốn phí agency hay lương fulltime.',
      hero_cta_primary: 'Tạo Brief 30 giây →',
      hero_cta_secondary: 'Xem các hệ thống đã ship',
      proof_1: 'SaaS AI, Workspace đa mô hình & Hệ thống tự động hóa đã chạy thật',
      proof_2: 'Chạy song song nhiều AI Agents code, rà lỗi và kiểm thử',
      proof_3: 'Giá mềm theo từng job · Hoàn thiện 1–7 ngày',
      proof_4: 'Chịu tải đồng thời, chống sập khi API lỗi hoặc quá tải',
      work_eyebrow: 'Dự án thực chiến',
      work_title: 'Những hệ thống chạy thật, không chỉ là bản demo',
      work_desc: 'Mỗi sản phẩm dưới đây đều được thiết kế để xử lý traffic thật, lỗi API ngoài và truy cập đồng thời.',
      badge_live: 'Đang chạy Live',
      badge_private: 'Hệ thống Private',
      lbl_problem: 'Bài toán',
      lbl_arch: 'Kiến trúc',
      lbl_outcome: 'Kết quả',
      case1_summary: 'Nền tảng EdTech SaaS luyện thi IELTS Writing & Speaking bằng AI, tách riêng server chấm bài, hội đồng 2 giám khảo AI và ví credit chống trừ nhầm.',
      case1_prob: 'AI chấm bài 1 prompt thường lệch điểm nặng và mất tiền credit của user khi API bị timeout.',
      case1_arch: 'Pipeline 4 tầng + Trọng tài mù (Blind Adjudication) khi lệch ≥ 1.0 band + ví credit nguyên tử tự hoàn tiền khi lỗi.',
      case1_out: 'Điểm số nhất quán bám sát từng câu, Render scoring server + Vercel dự phòng, tích hợp sẵn PayOS, Stripe & Crypto.',
      case2_title: 'Hệ thống Quản lý Kho Số & Đối soát Khiếu nại AI',
      case2_summary: 'Cổng quản trị kho tài khoản tự động, phân phối mã truy cập chịu tải cao và quy trình AI Vision đối soát ảnh thanh toán.',
      case2_prob: 'Nhiều người dùng bấm nhận cùng lúc gây cấp trùng; proxy bị chặn hoặc ảnh bảo hành giả gây thất thoát kho.',
      case2_arch: 'Hàng đợi khóa lease nguyên tử, SQLite WAL + Supabase RPC, proxy xoay có circuit breaker & AI Vision OCR.',
      case2_out: 'Triệt tiêu cấp trùng 100%, nhận diện thẻ thanh toán >95%, cảnh báo Telegram theo thời gian thực.',
      case3_summary: 'Workspace chat AI nền tối hỗ trợ 65+ mô hình qua proxy Express SSE bảo mật, đăng nhập Firebase và lưu lịch sử Firestore.',
      case3_prob: 'App gọi AI trực tiếp từ frontend dễ lộ API key và lỗi khi chuyển đổi qua lại nhiều nhà cung cấp LLM.',
      case3_arch: 'React/Vite UI → Xác thực Firebase ID Token → Express SSE proxy ẩn toàn bộ API key ở backend.',
      case3_out: 'Stream mượt 65+ models thời gian thực, cô lập 100% key bí mật và tự fallback khi thiếu cấu hình.',
      btn_open_live: 'Mở Web Live ↗',
      btn_inspect: 'Xem kiến trúc kỹ thuật',
      btn_hide: 'Thu gọn kiến trúc',
      arch_heading: 'Chi tiết kỹ thuật đã triển khai:',
      arch_ielts_1: 'Tầng 0 Vision AI: Tự động trích xuất số liệu biểu đồ Task 1 trước khi chấm để AI không bịa số.',
      arch_ielts_2: 'Hội đồng 2 Giám khảo + Trọng tài mù: Chạy song song 2 LLM độc lập, tự gọi giám khảo thứ 3 phân xử nếu điểm lệch ≥ 1.0 band.',
      arch_ielts_3: 'Ví Credit nguyên tử: Chống trùng request bằng SHA-256 với trạng thái RESERVED → COMMITTED | REFUNDED.',
      arch_vault_1: 'Hàng đợi Lease-Lock: Worker nhận việc kèm token hết hạn 180s và fingerprint, không bao giờ ghi đè dữ liệu mới.',
      arch_vault_2: 'Xác minh kép HTTP & JSON: Phân biệt rạch ròi lỗi mạng 429/5xx (UNKNOWN) với tài khoản hỏng thật, tránh xóa nhầm kho.',
      arch_vault_3: 'Gia cố bảo mật: Bảo vệ CSRF, giới hạn tần suất (Rate Limit), băm mật khẩu scrypt và không ghi log thông tin nhạy cảm.',
      arch_trigpt_1: 'Không lộ Key: Trình duyệt chỉ giữ Firebase ID Token ngắn hạn; mọi API key AI nằm hoàn toàn ở Express server.',
      arch_trigpt_2: 'Chế độ Degrade an toàn: Tự chuyển sang catalog mẫu nếu thiếu kết nối ngoài, đảm bảo giao diện không bao giờ sập trắng.',
      svc_eyebrow: 'Gói dịch vụ lẻ & Báo giá minh bạch',
      svc_title: 'Nhỏ gọn, nhanh, chi phí dễ chịu — làm xong việc nào tính tiền việc đó',
      svc_desc: 'Không cần thuê fulltime. Chọn đúng phần việc bạn cần — lợi thế 20x AI giúp mình hoàn thành nhanh với mức giá tối ưu.',
      svc1_price: 'Từ 800k+ ($35)',
      svc1_time: '1–3 Ngày',
      svc1_title: 'Tool Python, Scraper & Bot tự động',
      svc1_li1: 'Tool cào dữ liệu & auto-check chạy qua proxy xoay',
      svc1_li2: 'Bot Telegram / Discord cảnh báo & tự động quy trình',
      svc1_li3: 'Script AI Vision OCR bóc tách ảnh, hóa đơn, tài liệu',
      svc1_li4: 'Kèm hướng dẫn chạy, log rõ ràng & cơ chế retry an toàn',
      svc2_price: 'Từ 1.2M+ ($50)',
      svc2_time: '1–3 Ngày',
      svc2_title: 'Cứu & Sửa App Vibe-Code bị lỗi',
      svc2_li1: 'Sửa web làm dở bằng Cursor, Lovable, Bolt bị kẹt bug',
      svc2_li2: 'Xử lý lỗi race condition, khóa DB & hở quyền Auth',
      svc2_li3: 'Bổ sung Rate Limit, chống spam & xử lý lỗi API',
      svc2_li4: 'Deploy hoàn chỉnh lên Vercel, Render hoặc VPS',
      svc3_price: 'Từ 3M+ ($120)',
      svc3_time: '3–7 Ngày',
      svc3_title: 'Làm Web App AI / Micro-SaaS MVP',
      svc3_li1: 'Next.js / React kết hợp Python hoặc Node.js backend',
      svc3_li2: 'Tích hợp stream đa mô hình AI & hệ thống tính Credit',
      svc3_li3: 'Đăng nhập Firebase / Supabase + thanh toán PayOS / Stripe',
      svc3_li4: 'Giao diện mượt trên mobile & desktop, bàn giao full source',
      wf_eyebrow: 'Quy trình thực hiện',
      wf_title: 'Vì sao app Vibe-Code của mình không sập khi chạy thật',
      wf1_t: 'Chốt thiết kế hệ thống trước',
      wf1_d: 'Xác định rõ luồng trạng thái, giới hạn tải, cách xử lý lỗi mạng và ràng buộc DB trước khi code.',
      wf2_t: '20x AI Agents chạy song song',
      wf2_d: 'Điều phối nhiều mô hình AI mạnh làm đồng thời frontend, backend và viết test giúp tốc độ vượt trội.',
      wf3_t: 'Kiểm thử phản biện (Adversarial)',
      wf3_d: 'Tự test kịch bản bấm trùng đồng thời, API timeout 429/500 và rà soát lỗ hổng bảo mật trước khi giao.',
      wf4_t: 'Deploy sạch & Bàn giao gọn',
      wf4_d: 'Bàn giao mã nguồn GitHub sạch sẽ, file .env.example và link chạy thật trên Vercel/Render.',
      est_eyebrow: 'Tạo Brief Nhanh 30 Giây',
      est_title: 'Chọn nhanh nhu cầu & Gửi yêu cầu trong 1 cú click',
      est_desc: 'Bấm chọn các mục bên dưới để tự tạo mẫu yêu cầu chuẩn. Bạn có thể copy gửi qua Facebook/Zalo/Telegram hoặc gửi thẳng lên GitHub.',
      fld_type: '1. Loại công việc',
      opt_type_1: 'Web App AI / SaaS MVP',
      opt_type_2: 'Tool Python / Bot tự động',
      opt_type_3: 'Sửa App Vibe-Code lỗi',
      fld_timeline: '2. Thời gian mong muốn',
      opt_time_1: 'Gấp (48 giờ)',
      opt_time_2: 'Tiêu chuẩn (3–5 ngày)',
      opt_time_3: 'Linh hoạt',
      fld_budget: '3. Ngân sách dự kiến',
      opt_bud_1: '$35 – $100 (800k–2.5M)',
      opt_bud_2: '$100 – $250 (2.5M–6M)',
      opt_bud_3: '$250 – $500+ (6M+)',
      opt_bud_4: 'Đề xuất giúp mình',
      fld_idea: '4. Mô tả ngắn ý tưởng / lỗi cần xử lý',
      fld_contact: '5. Kênh liên hệ của bạn (Zalo / Telegram / Email / FB)',
      fld_preview: 'Mẫu Brief tạo sẵn',
      btn_copy: 'Copy Brief',
      btn_submit_gh: 'Gửi thẳng qua GitHub Inquiry →',
      footer_hire: 'Đặt Job',
      copied_msg: 'Đã copy Brief — chỉ cần dán và gửi cho mình nhé!'
    }
  };

  let currentLang = 'en';
  try {
    const saved = localStorage.getItem('mt_portfolio_lang');
    if (saved === 'vi' || saved === 'en') {
      currentLang = saved;
    }
  } catch (_) {
    // Ignore storage access errors in restricted contexts
  }

  const state = {
    type: 'AI Web App / Micro-SaaS MVP',
    timeline: 'Standard (3–5 days)',
    budget: '$100 – $250 (Feature / Bot / Tool)',
    idea: '',
    contact: ''
  };

  const briefPreview = document.getElementById('briefPreview');
  const githubSubmitLink = document.getElementById('githubSubmitLink');
  const ideaInput = document.getElementById('ideaInput');
  const contactInput = document.getElementById('contactInput');
  const copyFeedback = document.getElementById('copyFeedback');
  const copyBriefBtn = document.getElementById('copyBriefBtn');

  function updateBrief() {
    if (!briefPreview || !githubSubmitLink) return;
    const isVi = currentLang === 'vi';
    const ideaText = (ideaInput && ideaInput.value.trim()) ||
      (isVi ? '(Điền mô tả ngắn ở ô số 4...)' : '(Add 1-2 lines describing your goal or bug...)');
    const contactText = (contactInput && contactInput.value.trim()) ||
      (isVi ? '(Điền Telegram / Zalo / Email ở ô số 5...)' : '(Add your Telegram / Email / Discord...)');

    const lines = isVi
      ? [
          `[YÊU CẦU DỰ ÁN] ${state.type}`,
          `• Loại việc: ${state.type}`,
          `• Thời gian: ${state.timeline}`,
          `• Ngân sách: ${state.budget}`,
          `• Mô tả: ${ideaText}`,
          `• Liên hệ: ${contactText}`
        ]
      : [
          `[PROJECT BRIEF] ${state.type}`,
          `• Type: ${state.type}`,
          `• Timeline: ${state.timeline}`,
          `• Budget: ${state.budget}`,
          `• Scope: ${ideaText}`,
          `• Contact: ${contactText}`
        ];

    const bodyText = lines.join('\n');
    briefPreview.textContent = bodyText;

    const issueTitle = `[Project Inquiry] ${state.type} (${state.budget})`;
    const url = new URL('https://github.com/MinhTri12995/MinhTri12995/issues/new');
    url.searchParams.set('template', 'project-inquiry.yml');
    url.searchParams.set('title', issueTitle);
    url.searchParams.set('body', bodyText);
    githubSubmitLink.href = url.toString();
  }

  function applyLanguage(lang) {
    currentLang = lang === 'vi' ? 'vi' : 'en';
    document.documentElement.lang = currentLang;

    const dict = TRANSLATIONS[currentLang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key || !Object.prototype.hasOwnProperty.call(dict, key)) return;
      if (el.classList.contains('drawer-toggle')) {
        const expanded = el.getAttribute('aria-expanded') === 'true';
        el.textContent = expanded ? dict.btn_hide : dict.btn_inspect;
      } else {
        el.textContent = dict[key];
      }
    });

    if (ideaInput) {
      ideaInput.placeholder = currentLang === 'vi'
        ? 'VD: Làm web AI có đăng nhập + thanh toán PayOS, hoặc sửa bug cho app làm bằng Cursor...'
        : 'e.g., Build a Next.js AI landing page with Stripe/PayOS, or fix auth & deploy my Cursor app...';
    }
    if (contactInput) {
      contactInput.placeholder = currentLang === 'vi'
        ? 'VD: Zalo 09xx... hoặc @telegram hoặc email'
        : 'e.g., @your_handle or email@domain.com';
    }

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === currentLang));
    });

    try {
      localStorage.setItem('mt_portfolio_lang', currentLang);
    } catch (_) {
      // Ignore storage errors
    }

    updateBrief();
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  document.querySelectorAll('.drawer-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');
      const drawer = targetId ? document.getElementById(targetId) : null;
      if (!drawer) return;
      const willExpand = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(willExpand));
      drawer.hidden = !willExpand;
      const dict = TRANSLATIONS[currentLang];
      btn.textContent = willExpand ? dict.btn_hide : dict.btn_inspect;
    });
  });

  document.querySelectorAll('.chip-group').forEach((group) => {
    const groupName = group.getAttribute('data-group');
    group.querySelectorAll('.chip-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.chip-btn').forEach((sibling) => {
          sibling.setAttribute('aria-pressed', 'false');
        });
        btn.setAttribute('aria-pressed', 'true');
        if (groupName && Object.prototype.hasOwnProperty.call(state, groupName)) {
          state[groupName] = btn.getAttribute('data-value') || '';
        }
        updateBrief();
      });
    });
  });

  if (ideaInput) ideaInput.addEventListener('input', updateBrief);
  if (contactInput) contactInput.addEventListener('input', updateBrief);

  if (copyBriefBtn && briefPreview) {
    copyBriefBtn.addEventListener('click', async () => {
      const text = briefPreview.textContent || '';
      try {
        await navigator.clipboard.writeText(text);
        if (copyFeedback) {
          copyFeedback.textContent = TRANSLATIONS[currentLang].copied_msg;
          setTimeout(() => {
            copyFeedback.textContent = '';
          }, 3000);
        }
      } catch (_) {
        const range = document.createRange();
        range.selectNodeContents(briefPreview);
        const sel = window.getSelection();
        if (sel) {
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    });
  }

  applyLanguage(currentLang);
})();
