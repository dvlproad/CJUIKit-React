import {ImageUploadType} from "../TRY61ImageActionCollectionViewDemo/ImageActionCollectionView";

export default class TSImageModelsUtil {
    static imageModels() {
        let imageModels = [
                {
                    imageSource: require('./resources/1.jpg'),
                    uploadType: ImageUploadType.NotNeed,
                    uploadProgress: 0,
                    imageIndex: 0,
                },
                {
                    imageSource: require('./resources/2.jpg'),
                    uploadType: ImageUploadType.Uploading,
                    uploadProgress: 20,
                    imageIndex: 1,
                },
                {
                    imageSource: 'https://goss.veer.com/creative/vcg/veer/800water/veer-154552012.jpg',
                    uploadType: ImageUploadType.Uploading,
                    uploadProgress: 60,
                    imageIndex: 2,
                },
                {
                    imageSource: 'https://goss.veer.com/creative/vcg/veer/800water/veer-151051101.jpg',
                    uploadType: ImageUploadType.Success,
                    uploadProgress: 100,
                    imageIndex: 3,
                },
                {
                    imageSource: 'https://goss.veer.com/creative/vcg/veer/800water/veer-310261145.jpg',
                    uploadType: ImageUploadType.Failure,
                    uploadProgress: 77,
                    imageIndex: 4,
                },
            ];
        return imageModels;
    }
}