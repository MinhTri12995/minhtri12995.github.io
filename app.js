(function () {
  'use strict';

  const TRANSLATIONS = {
    en: {
      nav_work: 'Work',
      nav_services: 'Services',
      nav_workflow: 'Workflow',
      nav_estimate: 'Quick Brief',
      status_available: 'Available for projects',
      hero_eyebrow: 'Full-Stack Web & Python Automation Developer',
      hero_title: 'Build fast, reliable web apps and automation tools — without agency overhead.',
      hero_lead:
        'I design and ship production-ready Next.js apps, payment workflows, Python automation bots, and practical AI integrations. Built with real systems reliability — atomic billing ledgers, distributed locks, proxy failover, and clean handoff — on fast per-project budgets.',
      hero_cta_primary: 'Build Your 30-Sec Brief →',
      hero_cta_secondary: 'Inspect Shipped Work',
      proof_1: 'Live EdTech SaaS & high-concurrency Python ops shipped',
      proof_2: 'Fast per-project delivery with clean code handoff',
      proof_3: 'Transparent fixed milestones · No full-time commitment',
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
      case1_prob: 'Single-prompt AI graders drift wildly in band scores and lose user credits when API calls timeout.',
      case1_arch: '4-stage evaluation pipeline + Blind Adjudication on ≥1.0 band variance + idempotent credit ledger with auto-refund.',
      case1_out: 'Consistent scoring grounded to character offsets, Render scoring server + Vercel failover, Stripe/PayOS/Crypto ready.',
      case2_title: 'Automated Digital Fulfillment & Dispute Verification System',
      case2_summary: 'High-concurrency digital inventory manager, automated access fulfillment portal, and AI Vision payment verification workflow.',
      case2_prob: 'Concurrent stock claims caused double-assignments; proxy blocks and fake warranty screenshots caused inventory loss.',
      case2_arch: 'Lease-locked worker queue, SQLite WAL + Supabase RPC, rotating proxy circuit breaker & AI Vision OCR matching.',
      case2_out: 'Zero double-claims under load, >95% card OCR verification accuracy, automated Telegram ops alerts.',
      btn_open_live: 'Open ieltsup.app ↗',
      btn_inspect: 'Inspect Architecture',
      btn_hide: 'Hide Architecture',
      arch_heading: 'Verified Engineering Mechanics:',
      arch_ielts_1: 'Stage 0 Vision Pipeline: Extracts structured chart data for Task 1 prompts before grading so examiners verify figures accurately.',
      arch_ielts_2: '2-Examiner Panel + Blind Adjudicator: Runs two distinct models in parallel and auto-invokes a third blind judge when scores diverge by ≥ 1.0 band.',
      arch_ielts_3: 'Atomic Quota Ledger: SHA-256 request deduplication with RESERVED → COMMITTED | REFUNDED transitions across wallet pools.',
      arch_vault_1: 'Atomic Lease-Locking Queue: Workers claim jobs with 180s expiring lease tokens and fingerprint guards so stale workers never overwrite fresh state.',
      arch_vault_2: 'Dual-Evidence Verifier: Strict HTTP & JSON classification prevents 429/5xx network errors from being misread as valid or dead items.',
      arch_vault_3: 'Security Hardening: CSRF protection, multi-tier rate limiting, scrypt/werkzeug hashed auth, and zero credential logging.',
      svc_eyebrow: 'Scoped Projects & Transparent Rates',
      svc_title: 'Small, fast, affordable — pay per shipped milestone',
      svc_desc: 'No full-time lock-in. Pick the exact scope you need with clear deliverables, realistic timelines, and indie-friendly pricing.',
      svc1_price: 'From $35+',
      svc1_time: '1–3 Days',
      svc1_title: 'Python Bots, Scrapers & Automation',
      svc1_li1: 'Proxy-resilient data scrapers & auto-checkers',
      svc1_li2: 'Telegram / Discord alert & workflow bots',
      svc1_li3: 'AI Vision OCR & document parsing scripts',
      svc1_li4: 'Clean CLI, logs, and retry safety included',
      svc2_price: 'From $50+',
      svc2_time: '1–3 Days',
      svc2_title: 'Bug Fixing, Optimization & Deployment',
      svc2_li1: 'Debug stuck React, Next.js, Node, or Python apps',
      svc2_li2: 'Eliminate race conditions, DB locks & auth leaks',
      svc2_li3: 'Add rate limiting, validation & error fallbacks',
      svc2_li4: 'Deploy cleanly to Vercel, Render, or VPS',
      svc3_price: 'From $120+',
      svc3_time: '3–7 Days',
      svc3_title: 'Full-Stack Web App / SaaS MVP',
      svc3_li1: 'Next.js / React + Python or Node backend',
      svc3_li2: 'Practical AI workflows & usage credit ledger',
      svc3_li3: 'Firebase / Supabase Auth + Stripe / PayOS billing',
      svc3_li4: 'Responsive dark/light UI + full source handover',
      wf_eyebrow: 'How We Work Together',
      wf_title: 'Simple process from brief to production launch',
      wf1_t: 'Clear Scope & Spec',
      wf1_d: 'Align on core features, data flows, failure modes, and fixed pricing upfront before any coding begins.',
      wf2_t: 'Rapid Full-Stack Build',
      wf2_d: 'Ship modular UI, clean API routes, and database schemas quickly with daily progress previews.',
      wf3_t: 'Real-World Stress Testing',
      wf3_d: 'Test concurrency, API 429/500 timeouts, webhook safety, and input validation before handoff.',
      wf4_t: 'Clean Deploy & Handover',
      wf4_d: 'Deliver documented GitHub repo, .env.example, and live Vercel/Render deployment ready for real users.',
      est_eyebrow: '30-Second Project Brief',
      est_title: 'Scope your job & send it in one click',
      est_desc: 'Select what you need below to generate a structured project brief. Copy it to send on Telegram/Facebook/Upwork, or submit directly via GitHub.',
      fld_type: '1. Project Type',
      opt_type_1: 'Web App / SaaS MVP',
      opt_type_2: 'Python Bot / Automation',
      opt_type_3: 'Bug Fix & App Deployment',
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
      footer_hire: 'Start a Project',
      copied_msg: 'Copied to clipboard — ready to paste!'
    },
    vi: {
      nav_work: 'Dự án thật',
      nav_services: 'Dịch vụ & Giá',
      nav_workflow: 'Quy trình',
      nav_estimate: 'Tạo Brief',
      status_available: 'Nhận job lẻ nhanh',
      hero_eyebrow: 'Lập trình Web Full-Stack & Python Automation · Hệ thống ổn định & AI thực chiến',
      hero_title: 'Xây dựng Web App & Tool tự động chạy ổn định trong vài ngày — chi phí hợp túi tiền.',
      hero_lead:
        'Mình thiết kế và phát triển Web App (Next.js / React), tích hợp thanh toán, Bot/Tool tự động bằng Python và các luồng AI thực tế. Tập trung vào độ tin cậy hệ thống — ví credit chống trừ nhầm, khóa hàng đợi chống đụng độ, proxy fallback — với mức giá gọn nhẹ theo từng dự án.',
      hero_cta_primary: 'Tạo Brief 30 giây →',
      hero_cta_secondary: 'Xem các hệ thống đã ship',
      proof_1: 'SaaS AI & Hệ thống tự động hóa đang chạy thực tế',
      proof_2: 'Hoàn thiện nhanh theo từng đầu việc, bàn giao source sạch',
      proof_3: 'Báo giá trọn gói từng job · Không cần thuê fulltime',
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
      case2_title: 'Hệ thống Xử lý Đơn Số & Đối soát Khiếu nại Tự động',
      case2_summary: 'Cổng quản trị kho tài khoản tự động, phân phối mã truy cập chịu tải cao và quy trình AI Vision đối soát ảnh thanh toán.',
      case2_prob: 'Nhiều người dùng bấm nhận cùng lúc gây cấp trùng; proxy bị chặn hoặc ảnh bảo hành giả gây thất thoát kho.',
      case2_arch: 'Hàng đợi khóa lease nguyên tử, SQLite WAL + Supabase RPC, proxy xoay có circuit breaker & AI Vision OCR.',
      case2_out: 'Triệt tiêu cấp trùng 100%, nhận diện thẻ thanh toán >95%, cảnh báo Telegram theo thời gian thực.',
      btn_open_live: 'Mở ieltsup.app ↗',
      btn_inspect: 'Xem kiến trúc kỹ thuật',
      btn_hide: 'Thu gọn kiến trúc',
      arch_heading: 'Chi tiết kỹ thuật đã triển khai:',
      arch_ielts_1: 'Tầng 0 Vision AI: Tự động trích xuất số liệu biểu đồ Task 1 trước khi chấm để AI không bịa số.',
      arch_ielts_2: 'Hội đồng 2 Giám khảo + Trọng tài mù: Chạy song song 2 mô hình độc lập, tự gọi giám khảo thứ 3 phân xử nếu điểm lệch ≥ 1.0 band.',
      arch_ielts_3: 'Ví Credit nguyên tử: Chống trùng request bằng SHA-256 với trạng thái RESERVED → COMMITTED | REFUNDED.',
      arch_vault_1: 'Hàng đợi Lease-Lock: Worker nhận việc kèm token hết hạn 180s và fingerprint, không bao giờ ghi đè dữ liệu mới.',
      arch_vault_2: 'Xác minh kép HTTP & JSON: Phân biệt rạch ròi lỗi mạng 429/5xx (UNKNOWN) với tài khoản hỏng thật, tránh xóa nhầm kho.',
      arch_vault_3: 'Gia cố bảo mật: Bảo vệ CSRF, giới hạn tần suất (Rate Limit), băm mật khẩu scrypt và không ghi log thông tin nhạy cảm.',
      svc_eyebrow: 'Gói dịch vụ lẻ & Báo giá minh bạch',
      svc_title: 'Nhỏ gọn, nhanh, chi phí dễ chịu — làm xong việc nào tính tiền việc đó',
      svc_desc: 'Không cần thuê fulltime. Chọn đúng phạm vi công việc bạn cần với đầu ra rõ ràng, tiến độ nhanh và chi phí tối ưu.',
      svc1_price: 'Từ 800k+ ($35)',
      svc1_time: '1–3 Ngày',
      svc1_title: 'Tool Python, Scraper & Bot tự động',
      svc1_li1: 'Tool cào dữ liệu & auto-check chạy qua proxy xoay',
      svc1_li2: 'Bot Telegram / Discord cảnh báo & tự động quy trình',
      svc1_li3: 'Script AI Vision OCR bóc tách ảnh, hóa đơn, tài liệu',
      svc1_li4: 'Kèm hướng dẫn chạy, log rõ ràng & cơ chế retry an toàn',
      svc2_price: 'Từ 1.2M+ ($50)',
      svc2_time: '1–3 Ngày',
      svc2_title: 'Sửa lỗi, Tối ưu & Deploy Web App',
      svc2_li1: 'Gỡ bug và hoàn thiện app React, Next.js, Node hoặc Python',
      svc2_li2: 'Xử lý lỗi race condition, khóa DB & hở quyền Auth',
      svc2_li3: 'Bổ sung Rate Limit, validate dữ liệu & xử lý lỗi API',
      svc2_li4: 'Deploy hoàn chỉnh lên Vercel, Render hoặc VPS',
      svc3_price: 'Từ 3M+ ($120)',
      svc3_time: '3–7 Ngày',
      svc3_title: 'Làm Web App / Micro-SaaS MVP',
      svc3_li1: 'Next.js / React kết hợp Python hoặc Node.js backend',
      svc3_li2: 'Tích hợp luồng AI thực tế & hệ thống tính Credit',
      svc3_li3: 'Đăng nhập Firebase / Supabase + thanh toán PayOS / Stripe',
      svc3_li4: 'Giao diện mượt trên mobile & desktop, bàn giao full source',
      wf_eyebrow: 'Quy trình làm việc rõ ràng',
      wf_title: 'Từ lúc chốt yêu cầu đến khi chạy thật trên Production',
      wf1_t: 'Chốt phạm vi & Thiết kế rõ ràng',
      wf1_d: 'Thống nhất tính năng, luồng dữ liệu, xử lý lỗi và chi phí trọn gói trước khi bắt đầu code.',
      wf2_t: 'Triển khai Full-Stack tốc độ cao',
      wf2_d: 'Xây dựng UI, API backend và cơ sở dữ liệu gọn gàng, cập nhật bản xem trước hàng ngày.',
      wf3_t: 'Kiểm thử kịch bản thực tế',
      wf3_d: 'Test bấm trùng đồng thời, API timeout 429/500, webhook thanh toán và rà soát bảo mật trước khi giao.',
      wf4_t: 'Deploy sạch & Bàn giao gọn',
      wf4_d: 'Bàn giao mã nguồn GitHub sạch sẽ, file .env.example và link chạy thật trên Vercel/Render.',
      est_eyebrow: 'Tạo Brief Nhanh 30 Giây',
      est_title: 'Chọn nhanh nhu cầu & Gửi yêu cầu trong 1 cú click',
      est_desc: 'Bấm chọn các mục bên dưới để tự tạo mẫu yêu cầu chuẩn. Bạn có thể copy gửi qua Facebook/Zalo/Telegram hoặc gửi thẳng lên GitHub.',
      fld_type: '1. Loại công việc',
      opt_type_1: 'Web App / SaaS MVP',
      opt_type_2: 'Tool Python / Bot tự động',
      opt_type_3: 'Sửa lỗi & Deploy App',
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
        ? 'VD: Làm web bán hàng/SaaS tích hợp thanh toán PayOS, viết bot Python Telegram hoặc sửa lỗi app...'
        : 'e.g., Build a Next.js web app with Stripe/PayOS checkout, create a Python bot, or fix bugs & deploy an existing app...';
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
