import axios from "axios";
import cheerio from 'cheerio';
import xlsx from 'xlsx';

async function scrapeJobs(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const jobs = [];
    $('.JobItemV2').each((index, element) => {
      const eachJobOBJ = {
        title:$(element).find('h2').text(),
        salary: $(element).find('.f14').text(),
        company: $(element).find('.JobDetail.CompanyDetail.text-secondary').text(),
        postedOn: $(element).find('.JobDetail.JobPostedOnDetail.text-secondary').text(),
        experience: $(element).find('.JobDetail.ExperienceDetail.text-secondary').text(),
      }
      jobs.push(eachJobOBJ);
    });
    return jobs;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
async function writeToExcel(url){
    const data = await scrapeJobs(url);
    const WorkSheet = xlsx.utils.json_to_sheet(data);
    const WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(WorkBook, WorkSheet, 'Jobs Data');
    xlsx.writeFile(WorkBook,'jobs_data.xlsx');
}

writeToExcel("https://www.workindia.in/work-from-home-jobs-in-sector-62-+-noida-delhi/")
