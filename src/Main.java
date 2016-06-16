/*import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.vision.v1.model.AnnotateImageRequest;
import com.google.api.services.vision.v1.model.AnnotateImageResponse;
import com.google.api.services.vision.v1.model.BatchAnnotateImagesRequest;
import com.google.api.services.vision.v1.model.BatchAnnotateImagesResponse;
import com.google.api.services.vision.v1.model.FaceAnnotation;
import com.google.api.services.vision.v1.model.Feature;
import com.google.api.services.vision.v1.model.Image;
import com.google.common.collect.ImmutableList;
import com.google.api.services.vision.v1.Vision;
import com.google.api.services.vision.v1.VisionScopes;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.GeneralSecurityException;
import java.util.List;

public class Main {

	private static final String APPLICATION_NAME = "SingPost PO Office Crowd Sense";

	private static final int MAX_FACIAL_RESULT = 40; 

	private final Vision vision;

	public static void main(String[] args) throws IOException,GeneralSecurityException {
		if (args.length != 1) {
			System.err.println("Enter input image path\n");
			System.exit(1);
		}

		Path inputImage = Paths.get(args[0]);
		if (!inputImage.toString().toLowerCase().endsWith(".jpg")
				|| !inputImage.toString().toLowerCase().endsWith(".png")
				|| !inputImage.toString().toLowerCase().endsWith(".jpeg")) {
			System.err.println("Input image must be of jpeg or png format");
		}
		;

		Main app = new Main(getVisionService());
		List<FaceAnnotation> faces = app.detectFaces(inputImage, MAX_FACIAL_RESULT); // Find out more	
		System.out.printf("Number of people %s\n", numOfPeople(faces));
	}

	/**
	 * This class is required to connect to the vision api using Application
	 * Default Credentials.
	 * 
	 * @return Connection to Google Vision API
	 * @throws IOException
	 * @throws GeneralSecurityException
	 */
/*
	public static Vision getVisionService() throws IOException, GeneralSecurityException {
		GoogleCredential credential = GoogleCredential.getApplicationDefault().createScoped(VisionScopes.all());
		JsonFactory jsonFactory = JacksonFactory.getDefaultInstance();

		return new Vision.Builder(GoogleNetHttpTransport.newTrustedTransport(), jsonFactory, credential)
				.setApplicationName("Crowd Sense").build();
	}

	public Main(Vision vision) {
		this.vision = vision;
	}

	private List<FaceAnnotation> detectFaces(Path path, int maxResults) throws IOException {
		byte[] data = Files.readAllBytes(path);

		AnnotateImageRequest request = new AnnotateImageRequest().setImage(new Image().encodeContent(data))
				.setFeatures(ImmutableList.of(new Feature().setType("Face Detection").setMaxResults(maxResults)));
		
		Vision.Images.Annotate annotate = vision.images()
				.annotate(new BatchAnnotateImagesRequest().setRequests(ImmutableList.of(request)));	
		
		annotate.setDisableGZipContent(true);
		
		BatchAnnotateImagesResponse batchResponse = annotate.execute();
		
		assert batchResponse.getResponses().size() == 1;
		
		AnnotateImageResponse response = batchResponse.getResponses().get(0);
		if (response.getFaceAnnotations() == null) {
			System.exit(1);
		}
		return response.getFaceAnnotations();
	}
	
	private static int numOfPeople (List<FaceAnnotation> faces) {
		return faces.size();
	}
} */
