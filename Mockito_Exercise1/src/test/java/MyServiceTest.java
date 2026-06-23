import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        // Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Use mock in service
        MyService service = new MyService(mockApi);

        String result = service.fetchData();

        // Verify result
        assertEquals("Mock Data", result);
    }
}