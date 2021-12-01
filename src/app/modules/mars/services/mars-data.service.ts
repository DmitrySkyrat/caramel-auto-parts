import { Injectable } from "@angular/core";
import { VideoData } from "../models/video.model";

@Injectable({
    providedIn: 'root'
})
export class MarsDataService {
    getVideos(): VideoData[] {
        return [
            {
                href: 'https://www.youtube.com/watch?v=LWhYN4KEElM&ab_channel=KOSMO',
                src: 'assets/images/1.jpg',
                title: `What have we found on Mars? Geography of the red planet.`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content:
                    'We supply a series of design principles, practical patterns and high quality design resources ' +
                    '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
            },
            {
                href: 'https://www.youtube.com/watch?v=CqkDv4eAAJc&ab_channel=KOSMO',
                src: 'assets/images/2.jpg',
                title: `WHAT COULD DISCOVER THE CURIOCITY ON MARS? PANORAMAS, MARS 2019.`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content:
                    'We supply a series of design principles, practical patterns and high quality design resources ' +
                    '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
            },
            {
                href: 'https://www.youtube.com/watch?v=eQRit_6tu0k&ab_channel=KOSMO',
                src: 'assets/images/3.jpg',
                title: `WHAT COULD HINDER FLIGHT TO MARS 2030?`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content:
                    'We supply a series of design principles, practical patterns and high quality design resources ' +
                    '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
            },
            {
                href: 'https://www.youtube.com/watch?v=odrDS6C7foc&ab_channel=KOSMO',
                src: 'assets/images/4.jpg',
                title: `OPPORTUNITY ASKS FOR HELP AFTER A DUST STORM ON MARS?`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content:
                    'We supply a series of design principles, practical patterns and high quality design resources ' +
                    '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
            }
        ]
    }
}