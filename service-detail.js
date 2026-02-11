// ============================================
// DESIGN AID SERVICE DETAILS - ISOLATED VERSION
// ============================================

(function() {
    'use strict';
    
    // Wait for everything to load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        console.log('Service Detail: Initializing...');
        
        // Find all service cards
        var cards = document.querySelectorAll('.service-card');
        console.log('Found cards:', cards.length);
        
        if (cards.length === 0) {
            console.error('No service cards found!');
            return;
        }
        
        // Service data
        var services = [
            {
                id: 'npd',
                title: 'New Product Development',
                tagline: 'From Concept to Market',
                icon: 'fa-rocket',
                color: '#0066ff',
                overview: 'Design AID Engineering has collaboratively delivered 15+ new products through end-to-end new product development, encompassing engineering design, prototype fabrication, testing and validation, manufacturing, and execution.',
                description: 'Over the past four months, AID Engineering has exported production parts and engineered components to the Indian market. Our on-demand manufacturing services allow customers to order precisely what they need, when they need it.',
                stats: [
                    {value: '15+', label: 'Products'},
                    {value: '4', label: 'Months Export'},
                    {value: '100%', label: 'End-to-End'}
                ],
                features: ['Engineering Design & CAD', 'Prototype Fabrication', 'Testing & Validation', 'Manufacturing Execution', 'Export Documentation', 'On-Demand Production'],
                deliverables: ['3D CAD Models', 'Functional Prototypes', 'Test Reports', 'Manufacturing Drawings', 'Quality Plans'],
                projects: [
                    {title: 'Garbage Compactor', category: 'Transportation', desc: 'Heavy-duty waste management system'},
                    {title: 'Bus Interior Design', category: 'Transportation', desc: 'Commercial vehicle interior'},
                    {title: 'Single Reduction EV', category: 'Transportation', desc: 'EV drivetrain development'},
                    {title: 'Food Serving Station', category: 'Consumer', desc: 'Automated food equipment'},
                    {title: 'Pulse Huller Machine', category: 'Agricultural', desc: 'Processing machinery'},
                    {title: 'Casting Gearbox', category: 'Aerospace', desc: 'Aerospace transmission'}
                ]
            },
            {
                id: 'material-handling',
                title: 'Material Handling',
                tagline: 'Optimize Your Workflow',
                icon: 'fa-truck-loading',
                color: '#d4af37',
                overview: 'Material handling involves the systematic planning, execution, and control of processes associated with the movement, storage, protection, and management of materials and products.',
                description: 'We ensure efficient, safe, and timely flow of materials while optimizing operational costs and enhancing productivity. We design conveyor systems, SPMs, and customized equipment.',
                stats: [
                    {value: '100%', label: 'Safety'},
                    {value: 'Custom', label: 'Solutions'},
                    {value: '24/7', label: 'Support'}
                ],
                features: ['Systematic Planning', 'Storage Systems', 'Distribution Management', 'Cost Optimization', 'Safety Enhancement', 'SPM Design'],
                deliverables: ['System Designs', 'Equipment Drawings', 'Safety Reports', 'Installation Guides'],
                projects: [
                    {title: 'Side Conveyor', category: 'Automotive', desc: 'Line-side delivery system'},
                    {title: 'Industrial Trolley', category: 'Warehouse', desc: 'Heavy-load transport'},
                    {title: '90° Turnover', category: 'Manufacturing', desc: 'Component orientation'}
                ],
                industries: ['Automotive', 'Bulk Material', 'Warehouse']
            },
            {
                id: 'reverse-engineering',
                title: 'Reverse Engineering',
                tagline: 'Unlock Design Value',
                icon: 'fa-undo-alt',
                color: '#00d4ff',
                overview: 'Successfully executed 10+ projects across aerospace, automotive, consumer goods, and industrial sectors.',
                description: 'We unlock design reuse opportunities, optimize product costs, and enhance functionality while achieving faster turnaround times.',
                stats: [
                    {value: '10+', label: 'Projects'},
                    {value: '4', label: 'Industries'},
                    {value: '100%', label: 'Docs'}
                ],
                features: ['3D Scanning', 'GD&T Analysis', 'Material Specs', 'Heat Treatment Analysis', 'BOM Development', 'Cost Optimization'],
                deliverables: ['3D CAD Models', 'Manufacturing Drawings', 'Material Reports', 'Assembly Docs', 'Complete BOM'],
                projects: [
                    {title: '2T Rear Axle', category: 'Automotive', desc: 'LCV axle reconstruction'},
                    {title: 'Aerospace Part', category: 'Aerospace', desc: 'Legacy digitization'},
                    {title: 'Consumer Product', category: 'Consumer', desc: 'Competitive analysis'}
                ]
            },
            {
                id: 'aerospace',
                title: 'Aerospace & Defence',
                tagline: 'Precision Without Compromise',
                icon: 'fa-plane',
                color: '#ff6b35',
                overview: 'Integrated team of tooling designers specializing in aero forging and assembly tooling.',
                description: 'Expertise covers detailed, assembly, and installation tooling ensuring precision, repeatability, and compliance with aerospace standards.',
                stats: [
                    {value: 'AS9100', label: 'Compliant'},
                    {value: 'Full', label: 'Spectrum'},
                    {value: '99.9%', label: 'Precision'}
                ],
                features: ['Standards Compliance', 'GD&T Implementation', 'Tooling Design', 'Fixture Development', 'Drill Jigs', 'Installation Planning'],
                deliverables: ['3D Tooling Models', 'Assembly Drawings', 'Installation Guides', 'Tooling Plans', 'GD&T Docs'],
                projects: [
                    {title: 'Aero Forging', category: 'Tooling', desc: 'High-temp die sets'},
                    {title: 'Assembly Jigs', category: 'Fixtures', desc: 'Determinant assembly'},
                    {title: '2D to 3D', category: 'Digital', desc: 'Legacy modernization'}
                ],
                capabilities: {
                    'Forging Tool Design': 'Complete tooling for aero forging',
                    '2D to 3D Conversion': 'Digital transformation',
                    'Assembly Tooling': 'Jigs and fixtures',
                    'Installation Aids': 'Precision installation'
                },
                process: ['Interpret 2D drawings', 'Create 3D CAD models', 'Apply tolerances', 'Develop assemblies', 'Validate manufacturability']
            },
            {
                id: 'costing',
                title: 'Should Cost Analysis',
                tagline: 'Data-Driven Optimization',
                icon: 'fa-calculator',
                color: '#10b981',
                overview: 'In today\'s competitive environment, manufacturers face continuous pressure on profit margins.',
                description: 'We develop transparent, data-driven cost models helping you optimize product costs and maximize market share.',
                stats: [
                    {value: '10+', label: 'Years'},
                    {value: '30%', label: 'Savings'},
                    {value: '100%', label: 'Transparent'}
                ],
                features: ['Cost Analysis', 'Driver Identification', 'Process Optimization', 'Design Strategy', 'Market Analysis', 'Validation'],
                deliverables: ['Cost Breakdown', 'Optimization Roadmap', 'Technology Recommendations', 'Design Guidelines'],
                approach: ['Cost element analysis', 'Early optimization', 'Data-driven models', 'Customer handholding', 'Business alignment']
            },
            {
                id: 'staffing',
                title: 'Staffing & Training',
                tagline: 'Build Your Team',
                icon: 'fa-users',
                color: '#8b5cf6',
                overview: 'We simplify hiring by connecting you with high-impact engineering talent.',
                description: 'Proactive talent acquisition for engineering and manufacturing ecosystem.',
                stats: [
                    {value: 'Proactive', label: 'Hiring'},
                    {value: '6 Mo', label: 'Training'},
                    {value: '100%', label: 'Placement'}
                ],
                features: ['Niche Expertise', 'Talent Pipeline', 'Technical Assessment', 'Executive Search', 'Training Programs', 'Placement Support'],
                deliverables: ['Qualified Candidates', 'Skill Assessments', 'Certificates', 'Portfolios', 'Placement Assistance'],
                staffing: {
                    title: 'Engineering Staffing',
                    desc: 'Mechanical engineers and technical support for projects and organizations.',
                    points: ['Technical requirements analysis', 'Project scope review', 'Strategic alignment', 'Rigorous selection', 'Quality assurance']
                },
                training: {
                    title: 'Training & Placement',
                    duration: '6 Months',
                    desc: 'Industry-oriented mechanical design training with job assurance.',
                    tools: ['Inventor, SolidWorks, Creo, NX', 'SolidWorks/Ansys', 'Engineering refresh', 'Live projects'],
                    prereq: 'B.E. Mech/Auto Graduates',
                    curriculum: ['Industry Standards', 'Part Design', 'Assembly Design', 'Surface Design', 'Sheet Metal', '2D to 3D', 'Drafting', 'FEA', 'DFX', 'NPD', 'Projects', 'Soft Skills'],
                    outcome: 'Job Assurance'
                }
            }
        ];
        
        // Create overlay HTML
        var overlay = document.createElement('div');
        overlay.id = 'da-service-overlay';
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#0a0e27;z-index:99999;display:none;overflow-y:auto;';
        overlay.innerHTML = '<div id="da-overlay-content"></div>';
        document.body.appendChild(overlay);
        
        // Add styles
        var styles = document.createElement('style');
        styles.textContent = `
            #da-service-overlay { font-family: 'Inter', sans-serif; color: white; }
            #da-service-overlay * { box-sizing: border-box; }
            
            .da-close { position: fixed; top: 30px; left: 30px; z-index: 100000; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 50px; cursor: pointer; font-size: 14px; font-weight: 600; backdrop-filter: blur(10px); transition: all 0.3s; }
            .da-close:hover { background: rgba(255,255,255,0.2); transform: translateX(-5px); }
            
            .da-hero { min-height: 80vh; display: flex; align-items: center; padding: 100px 60px 60px; position: relative; background: linear-gradient(135deg, #0a0e27 0%, #1a1f4b 100%); }
            .da-hero-content { max-width: 1400px; margin: 0 auto; width: 100%; }
            .da-label { color: #d4af37; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 20px; display: inline-block; padding: 10px 20px; background: rgba(212,175,55,0.1); border-radius: 50px; border: 1px solid rgba(212,175,55,0.3); }
            .da-title { font-family: "Playfair Display", serif; font-size: clamp(40px, 5vw, 72px); font-weight: 700; margin-bottom: 20px; line-height: 1.1; }
            .da-tagline { font-size: 24px; opacity: 0.9; margin-bottom: 40px; max-width: 600px; }
            .da-stats { display: flex; gap: 40px; }
            .da-stat { text-align: center; padding: 20px 30px; background: rgba(255,255,255,0.05); border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); }
            .da-stat-num { display: block; font-size: 42px; font-weight: 800; color: #0066ff; line-height: 1; margin-bottom: 5px; }
            .da-stat-label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8; }
            
            .da-body { max-width: 1400px; margin: 0 auto; padding: 60px; display: grid; grid-template-columns: 1fr 350px; gap: 60px; }
            .da-main { color: white; }
            .da-section { margin-bottom: 60px; }
            .da-section h2 { font-family: "Playfair Display", serif; font-size: 32px; margin-bottom: 24px; padding-bottom: 15px; border-bottom: 3px solid #0066ff; display: inline-block; }
            .da-lead { font-size: 20px; line-height: 1.7; margin-bottom: 15px; opacity: 0.95; }
            .da-text { font-size: 16px; line-height: 1.8; opacity: 0.7; }
            
            .da-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
            .da-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
            
            .da-item { background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 12px; }
            .da-item::before { content: "✓"; color: #0066ff; font-weight: bold; font-size: 18px; }
            .da-item:hover { background: rgba(0,102,255,0.1); border-color: #0066ff; transform: translateX(5px); transition: all 0.3s; }
            
            .da-project { background: rgba(255,255,255,0.05); border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); transition: all 0.3s; }
            .da-project:hover { transform: translateY(-10px); border-color: #0066ff; }
            .da-project-img { height: 180px; background: linear-gradient(135deg, #1a1f4b, #0a0e27); display: flex; align-items: center; justify-content: center; font-size: 48px; color: rgba(255,255,255,0.1); }
            .da-project-info { padding: 20px; }
            .da-project-cat { color: #d4af37; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; margin-bottom: 8px; }
            .da-project-title { font-family: "Playfair Display", serif; font-size: 18px; margin-bottom: 8px; }
            .da-project-desc { font-size: 14px; opacity: 0.7; line-height: 1.5; }
            
            .da-side { position: sticky; top: 100px; height: fit-content; }
            .da-box { background: rgba(255,255,255,0.05); border-radius: 20px; padding: 30px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.1); }
            .da-box h3 { font-family: "Playfair Display", serif; font-size: 20px; margin-bottom: 20px; }
            .da-nav-item { padding: 14px; margin-bottom: 8px; border-radius: 10px; cursor: pointer; opacity: 0.7; border-left: 3px solid transparent; display: flex; align-items: center; gap: 10px; }
            .da-nav-item:hover, .da-nav-item.active { background: rgba(0,102,255,0.1); opacity: 1; border-left-color: #0066ff; }
            .da-nav-item i { width: 20px; text-align: center; color: #d4af37; }
            
            .da-btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 16px; border-radius: 10px; text-decoration: none; font-weight: 700; margin-bottom: 10px; transition: all 0.3s; }
            .da-btn-wa { background: #25D366; color: white; }
            .da-btn-call { background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2); }
            .da-btn:hover { transform: translateY(-3px); }
            
            .da-cap-item { background: rgba(255,255,255,0.05); padding: 24px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); }
            .da-cap-item h4 { color: #d4af37; margin-bottom: 10px; font-size: 18px; }
            .da-cap-item p { opacity: 0.7; font-size: 14px; line-height: 1.6; }
            
            .da-step { display: flex; align-items: center; gap: 16px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 12px; margin-bottom: 12px; }
            .da-step-num { width: 40px; height: 40px; background: #0066ff; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0; }
            
            .da-tag { display: inline-block; padding: 10px 20px; border: 2px solid #0066ff; color: #0066ff; border-radius: 50px; font-weight: 700; margin: 5px; }
            
            @media (max-width: 1100px) {
                .da-body { grid-template-columns: 1fr; }
                .da-side { position: static; order: -1; }
                .da-grid-2, .da-grid-3 { grid-template-columns: 1fr; }
                .da-hero { padding: 100px 30px 40px; min-height: auto; }
                .da-body { padding: 40px 30px; }
            }
        `;
        document.head.appendChild(styles);
        
        // Click handlers
        cards.forEach(function(card, index) {
            card.style.cursor = 'pointer';
            
            card.addEventListener('click', function(e) {
                // Don't interfere with links
                if (e.target.tagName === 'A' || e.target.closest('a')) {
                    return;
                }
                
                console.log('Opening service:', index);
                var service = services[index];
                if (service) {
                    openOverlay(service, services);
                }
            });
        });
        
        function openOverlay(service, allServices) {
            var content = document.getElementById('da-overlay-content');
            var overlay = document.getElementById('da-service-overlay');
            
            // Build HTML
            var html = '';
            
            // Close button
            html += '<button class="da-close" onclick="closeServiceOverlay()">← Back to Services</button>';
            
            // Hero
            html += '<div class="da-hero">';
            html += '<div class="da-hero-content">';
            html += '<span class="da-label">Service Details</span>';
            html += '<h1 class="da-title">' + service.title + '</h1>';
            html += '<p class="da-tagline">' + service.tagline + '</p>';
            html += '<div class="da-stats">';
            service.stats.forEach(function(stat) {
                html += '<div class="da-stat"><span class="da-stat-num">' + stat.value + '</span><span class="da-stat-label">' + stat.label + '</span></div>';
            });
            html += '</div></div></div>';
            
            // Body
            html += '<div class="da-body">';
            html += '<div class="da-main">';
            
            // Overview
            html += '<div class="da-section">';
            html += '<h2>Overview</h2>';
            html += '<p class="da-lead">' + service.overview + '</p>';
            html += '<p class="da-text">' + service.description + '</p>';
            html += '</div>';
            
            // Capabilities (if exists)
            if (service.capabilities) {
                html += '<div class="da-section"><h2>Capabilities</h2><div class="da-grid-2">';
                for (var key in service.capabilities) {
                    html += '<div class="da-cap-item"><h4>' + key + '</h4><p>' + service.capabilities[key] + '</p></div>';
                }
                html += '</div></div>';
            }
            
            // Approach (if exists)
            if (service.approach) {
                html += '<div class="da-section"><h2>Our Approach</h2><div class="da-grid-2">';
                service.approach.forEach(function(item) {
                    html += '<div class="da-item">' + item + '</div>';
                });
                html += '</div></div>';
            }
            
            // Process (if exists)
            if (service.process) {
                html += '<div class="da-section"><h2>Process</h2>';
                service.process.forEach(function(step, i) {
                    html += '<div class="da-step"><span class="da-step-num">' + (i+1) + '</span><p>' + step + '</p></div>';
                });
                html += '</div>';
            }
            
            // Staffing/Training special section
            if (service.staffing || service.training) {
                html += '<div class="da-section"><h2>Services</h2>';
                
                if (service.staffing) {
                    html += '<div style="background:rgba(255,255,255,0.05);padding:30px;border-radius:20px;margin-bottom:20px;border:1px solid rgba(255,255,255,0.1);">';
                    html += '<h3 style="font-family:Playfair Display;font-size:24px;margin-bottom:15px;color:#d4af37;"><i class="fas fa-user-tie" style="margin-right:10px;"></i>' + service.staffing.title + '</h3>';
                    html += '<p style="opacity:0.8;margin-bottom:20px;line-height:1.7;">' + service.staffing.desc + '</p>';
                    html += '<div class="da-grid-2">';
                    service.staffing.points.forEach(function(p) {
                        html += '<div class="da-item">' + p + '</div>';
                    });
                    html += '</div></div>';
                }
                
                if (service.training) {
                    html += '<div style="background:rgba(255,255,255,0.05);padding:30px;border-radius:20px;border:1px solid rgba(255,255,255,0.1);">';
                    html += '<div style="display:inline-block;padding:10px 20px;background:#d4af37;color:#0a0e27;border-radius:50px;font-weight:700;font-size:14px;margin-bottom:15px;"><i class="fas fa-clock" style="margin-right:8px;"></i>' + service.training.duration + ' Program</div>';
                    html += '<h3 style="font-family:Playfair Display;font-size:24px;margin-bottom:15px;color:#d4af37;"><i class="fas fa-graduation-cap" style="margin-right:10px;"></i>' + service.training.title + '</h3>';
                    html += '<p style="opacity:0.8;margin-bottom:20px;line-height:1.7;">' + service.training.desc + '</p>';
                    
                    html += '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:20px;">';
                    service.training.tools.forEach(function(tool) {
                        html += '<div style="padding:12px;background:rgba(255,255,255,0.05);border-radius:8px;font-size:13px;"><i class="fas fa-check" style="color:#0066ff;margin-right:8px;"></i>' + tool + '</div>';
                    });
                    html += '</div>';
                    
                    html += '<p style="margin-bottom:15px;"><strong style="color:#d4af37;">Prerequisites:</strong> ' + service.training.prereq + '</p>';
                    
                    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;">';
                    service.training.curriculum.forEach(function(c) {
                        html += '<span style="padding:8px 16px;background:rgba(0,102,255,0.15);color:#0066ff;border-radius:50px;font-size:13px;font-weight:600;">' + c + '</span>';
                    });
                    html += '</div>';
                    
                    html += '<div style="padding-top:20px;border-top:1px solid rgba(255,255,255,0.1);"><span style="color:#0066ff;font-weight:700;font-size:18px;"><i class="fas fa-check-circle" style="margin-right:10px;"></i>' + service.training.outcome + '</span></div>';
                    html += '</div>';
                }
                
                html += '</div>';
            }
            
            // Features
            html += '<div class="da-section"><h2>Key Features</h2><div class="da-grid-2">';
            service.features.forEach(function(f) {
                html += '<div class="da-item">' + f + '</div>';
            });
            html += '</div></div>';
            
            // Deliverables
            html += '<div class="da-section"><h2>Deliverables</h2><div class="da-grid-2">';
            service.deliverables.forEach(function(d) {
                html += '<div class="da-item">' + d + '</div>';
            });
            html += '</div></div>';
            
            // Projects
            if (service.projects) {
                html += '<div class="da-section"><h2>Featured Projects</h2><div class="da-grid-3">';
                service.projects.forEach(function(p) {
                    html += '<div class="da-project">';
                    html += '<div class="da-project-img"><i class="fas fa-image"></i></div>';
                    html += '<div class="da-project-info">';
                    html += '<div class="da-project-cat">' + p.category + '</div>';
                    html += '<h3 class="da-project-title">' + p.title + '</h3>';
                    html += '<p class="da-project-desc">' + p.desc + '</p>';
                    html += '</div></div>';
                });
                html += '</div></div>';
            }
            
            // Industries
            if (service.industries) {
                html += '<div class="da-section"><h2>Industries</h2>';
                service.industries.forEach(function(ind) {
                    html += '<span class="da-tag">' + ind + '</span>';
                });
                html += '</div>';
            }
            
            html += '</div>'; // End main
            
            // Sidebar
            html += '<aside class="da-side">';
            
            // Nav
            html += '<div class="da-box"><h3>All Services</h3>';
            allServices.forEach(function(s, idx) {
                var activeClass = (s.id === service.id) ? 'active' : '';
                html += '<div class="da-nav-item ' + activeClass + '" onclick="switchToService(' + idx + ')">';
                html += '<i class="fas ' + s.icon + '"></i><span>' + s.title + '</span></div>';
            });
            html += '</div>';
            
            // Contact
            html += '<div class="da-box"><h3>Get Started</h3>';
            html += '<p style="opacity:0.7;margin-bottom:20px;font-size:14px;line-height:1.6;">Ready to discuss your project?</p>';
            html += '<a href="https://wa.me/919611391279" target="_blank" class="da-btn da-btn-wa"><i class="fab fa-whatsapp"></i> WhatsApp</a>';
            html += '<a href="tel:+919611391279" class="da-btn da-btn-call"><i class="fas fa-phone"></i> Call Now</a>';
            html += '</div>';
            
            html += '</aside>'; // End side
            html += '</div>'; // End body
            
            content.innerHTML = html;
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Scroll to top
            overlay.scrollTop = 0;
        }
        
        // Global functions
        window.closeServiceOverlay = function() {
            var overlay = document.getElementById('da-service-overlay');
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        };
        
        window.switchToService = function(index) {
            var service = services[index];
            if (service) {
                openOverlay(service, services);
            }
        };
        
        // Close on backdrop click
        document.getElementById('da-service-overlay').addEventListener('click', function(e) {
            if (e.target === this) {
                closeServiceOverlay();
            }
        });
        
        // ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeServiceOverlay();
            }
        });
        
        console.log('Service Detail: Ready');
    }
})();