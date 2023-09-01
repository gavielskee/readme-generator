// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    if (license === 'No License') {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
    let link = '';
    if (license === 'MIT') {
        link = 'https://choosealicense.com/licenses/mit/'
    }
    return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'No License') {
        return ''
    }
    return '- [License](#license)'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Tests 

${data.test}

## Credits

    $(data.contributor)


`
}

