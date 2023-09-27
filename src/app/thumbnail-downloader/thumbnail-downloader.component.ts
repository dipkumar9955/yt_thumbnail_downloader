import { Component } from '@angular/core';

@Component({
  selector: 'app-thumbnail-downloader',
  templateUrl: './thumbnail-downloader.component.html',
  styleUrls: ['./thumbnail-downloader.component.css']
})
export class ThumbnailDownloaderComponent {
  videoUrl: string = '';
  thumbnails: any[] = [];

  getThumbnails(videoUrl: string) {
    // Extract the video ID from the videoUrl
    const videoIdMatch = videoUrl.match(/(?:\/|v=)([a-zA-Z0-9_-]{11})/);
  
    if (videoIdMatch && videoIdMatch[1]) {
      const videoId = videoIdMatch[1];
  
      // Create thumbnail URLs for different sizes
      const maxresdefaultUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      const hqdefaultUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      const defaultUrl = `https://img.youtube.com/vi/${videoId}/default.jpg`;
  
      // Populate this.thumbnails array with thumbnail objects
      this.thumbnails = [
        { size: 'maxresdefault', url: maxresdefaultUrl },
        { size: 'hqdefault', url: hqdefaultUrl },
        { size: 'default', url: defaultUrl },
        // Add URLs for other thumbnail sizes if needed
      ];
    } else {
      // Handle the case where the video ID couldn't be extracted from the URL
      console.error('Invalid YouTube video URL');
    }
  }
  
}
