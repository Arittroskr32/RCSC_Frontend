import React from 'react';
import './Tools.css';

const Tools = () => {
  const toolCategories = [
    {
      category: 'OSINT',
      tools: [
        {
          name: 'Wayback Machine',
          description: 'Online archive that allows users to view past versions of websites by accessing stored snapshots.',
          link: 'https://web.archive.org',
        },
        {
          name: 'Google Images',
          description: 'Search engine that allows users to find images online using keywords or reverse image search',
          link: 'https://images.google.com/',
        },
        {
          name: 'WhatsMyName',
          description: 'OSINT tool for discovering usernames across various websites and online platforms.',
          link: 'https://whatsmyname.app/',
        },
      ],
    },
    {
      category: 'Web Application Security',
      tools: [
        {
          name: 'Burp Suite',
          description: 'Integrated platform for performing security testing of web applications.',
          link: 'https://portswigger.net/burp',
        },
        {
          name: 'OWASP ZAP',
          description: 'Free security tool that helps automatically find security vulnerabilities in web applications.',
          link: 'https://www.zaproxy.org/',
        },
        {
          name: 'SQLmap',
          description: 'Automatic SQL injection and database takeover tool.',
          link: 'http://sqlmap.org/',
        },
      ],
    },
    {
      category: 'Cryptography',
      tools: [
        {
          name: 'Cipher Identifier',
          description: 'Online tool for detecting and identifying encryption and encoding methods used in text.',
          link: 'https://www.dcode.fr/cipher-identifier',
        },
        {
          name: 'CyberChef',
          description: 'Versatile web-based tool for encryption, encoding, data analysis, and cybersecurity operations.',
          link: 'https://gchq.github.io/CyberChef/',
        },
        {
          name: 'CrackStation',
          description: 'Online password-cracking tool that uses a large database of precomputed hashes to recover plaintext passwords.',
          link: 'https://crackstation.net/',
        },
      ],
    },
    {
      category: 'Digital Forensics',
      tools: [
        {
          name: 'Autopsy',
          description: 'Digital forensics platform and graphical interface to The Sleuth Kit and other digital forensics tools.',
          link: 'https://www.autopsy.com/',
        },
        {
          name: 'Wireshark',
          description: 'Network protocol analyzer that lets you capture and interactively browse the traffic running on a computer network.',
          link: 'https://www.wireshark.org/',
        },
        {
          name: 'FTK Imager',
          description: 'Data preview and imaging tool used to acquire data in a forensically sound manner.',
          link: 'https://accessdata.com/product-download/ftk-imager-version-4-5',
        },
      ],
    },
    {
      category: 'Steganography',
      tools: [
        {
          name: 'Binwalk, Zsteg, Foremost etc',
          description: 'Steganography detection tool for extracting hidden data from PNG and BMP image files.',
          link: 'https://www.kali.org/tools/',
        },
        {
          name: 'HxD',
          description: "Fast and efficient hex editor that allows viewing, editing, and analyzing raw binary data from files, memory, and disks.",
          link: 'https://hexed.it/',
        },
        {
          name: 'StegSolver',
          description: 'GUI-based steganography analysis tool used to detect and extract hidden messages from images through color plane manipulation and various filters.',
          link: 'https://github.com/zardus/ctf-tools/blob/master/stegsolve/install',
        },
      ],
    },
    {
      category: 'Reverse Engineering',
      tools: [
        {
          name: 'IDA Pro',
          description: 'Advanced disassembler and debugger used for reverse engineering and malware analysis.',
          link: 'https://hex-rays.com/ida-pro',
        },
        {
          name: 'Ghidra',
          description: 'Open-source reverse engineering tool developed by the NSA, featuring disassembly, decompilation, and debugging capabilities.',
          link: 'https://www.kali.org/tools/ghidra/',
        },
        {
          name: 'GDB',
          description: 'Command-line debugger for analyzing and troubleshooting compiled programs by inspecting memory, registers, and execution flow.',
          link: 'https://www.kali.org/tools/gdb/',
        },
      ],
    },
  ];

  return (
    <div className="tools-container">
      <h2 className="tools-header">Essential Cybersecurity Tools</h2>
      <p className="tools-description">
        Here's a curated list of tools that every cybersecurity enthusiast should be familiar with.
        We’ve categorized them based on their primary function.
      </p>
      <div className="tools-grid">
        {toolCategories.map((category, index) => (
          <div key={index} className="tool-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="tools-list">
              {category.tools.map((tool, idx) => (
                <div key={idx} className="tool-item">
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tool-link"
                  >
                    {tool.name}
                  </a>
                  <p className="tool-description">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="workshop-section">
        <h3 className="workshop-title">Tool Workshops</h3>
        <p className="workshop-description">
          We regularly conduct workshops on how to use these tools effectively. Join our club to participate in these hands-on sessions.
        </p>
        <a
          href="/activities"
          className="workshop-button"
        >
          View Upcoming Workshops
        </a>
      </div>
    </div>
  );
};

export default Tools;
