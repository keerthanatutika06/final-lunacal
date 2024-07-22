import './index.css';

const LearnSection = () => {
    return (
        <div className='learn-setion'>
            <h1 className='learn-heading'>What will you Learn in ACCA</h1>
            <hr className='horiz'/>
            <div className='learn-cards-container'>
                <div className='learn-card'>
                    <div className='header'>
                        <p className='header-title'>Knowledge Level</p>
                    </div>
                    <div className='learnings'>
                        <ul className='learnings-list'>
                            <li>Business and Technology (BT)</li>
                            <li>Management Accounting (MA)</li>
                            <li>Financial Accounting (FA)</li>
                        </ul>
                    </div>
                    <div className='footer'>
                        <p className='footer-title'>3 papers</p>
                    </div>
                </div>
                <div className='learn-card'>
                    <div className='header'>
                        <p className='header-title'>Skill Level</p>
                    </div>
                    <div className='learnings'>
                        <ul className='learnings-list'>
                            <li>Corporate and Business Law (LW)</li>
                            <li>Performance Management (PM)</li>
                            <li>Taxation (TX)</li>
                            <li>Financial Reporting (FR)</li>
                            <li>Audit and Assurance (AA)</li>
                            <li>Financial Management (FM)</li>
                        </ul>
                    </div>
                    <div className='footer'>
                        <p className='footer-title'>6 papers</p>
                    </div>
                </div>
                <div className='learn-card'>
                    <div className='header'>
                        <p className='header-title'>Professional Level</p>
                    </div>
                    <div className='learnings'>
                        <ul className='learnings-list'>
                            <h4 className='list-heading'>Compulsory</h4>
                            <li>Strategic Business Leader (SBL)</li>
                            <li>Strategic Business Reporting (SBR)</li>
                            <h4 className='list-heading'>Choose Two</h4>
                            <li>Advanced Financial Management (AFM)</li>
                            <li> Advanced Performance Management (APM)</li>
                            <li> Advanced Taxation (ATX)</li>
                            <li>Advanced Audit and Assurance (AAA)</li>
                        </ul>
                    </div>
                    <div className='footer'>
                        <p className='footer-title'>4 papers</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearnSection;
