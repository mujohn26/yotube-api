import responseHelper from '../helpers/response';
import  {google} from 'googleapis';
   const youtubeV3 = google.youtube( { version: 'v3', auth: `${process.env.API_KEY}` } );
class Youtube{

    static async getYoutubeVideos(req,res){
        try {
            const request =  youtubeV3.search.list({
                part: 'snippet',
                type: 'video',
                q: 'Cat',
                maxResults: 50,
                order: 'date',
                safeSearch: 'moderate',
                videoEmbeddable: true,
                channelId:'UCA4rAP2BF16aKVTiqLcrWoQ'
            }, (err,response) => {
              // your code here
              let youtubeData = [];
              for(let i=1;i<=12;i++){
                  youtubeData.push(response.data.items[i]);
                }
               return responseHelper.successMessage(
                    res,
                    'Youtube data returned successfully',
                    200,
                    youtubeData
                  );
            });
        } catch (error) {
            return responseHelper.errorMessage(res, e.message, 500);
 
        }
    }
}
export default Youtube;