import { request } from './axios.config';
import axios from 'axios';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dwkp0e1yo/image/upload';

export const common = {
  async uploadByQiniu(file: File | Blob): Promise<string> {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'easy-email-test');

    const res = await axios.post<{ url: string }>(CLOUDINARY_URL, data);
    return res.data.url;
  },
  uploadByUrl(url: string) {
    return request.get<string>('/upload/user/upload-by-url', {
      params: {
        url,
      },
    });
  },
  getMenu(): Promise<IAppMenuItem[]> {
    return Promise.resolve([
      {
        name: '数据模板',
        icon: 'bar-chart',
        isOpen: true,
        children: [
          {
            name: '数据模板',
            url: '/',
          },
        ],
      },
    ]);
  },
  sendTestEmail(data: {
    toEmail: string;
    subject: string;
    html: string;
    text: string;
    token: string;
  }) {
    return request
      .post<{ code: number; message: string }>(
        'http://ma-sihai-dev.marketin.cn/api/email/template/send',
        {
          email: {
            content: data.html,
            subject: null,
          },
          receiver: data.toEmail,
          sender: { address: null, name: null },
        },
        { headers: { Authorization: `bearer ${data.token}` } },
      )
      .then(res => {
        if (res.code != 0) {
          return Promise.reject(res.message);
        }
      });
  },
};

export interface IAppMenuItem {
  name: string;
  url?: string;
  icon: string;
  isOpen?: boolean;
  children: IAppSubMenuItem[];
}

export interface IAppSubMenuItem {
  name: string;
  url: string;
  isOpen?: boolean;
}
