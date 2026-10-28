from django.utils import timezone
from rest_framework.response import Response


def api_response(
    data=None,
    message="Success",
    statuscode=200,
    status=True,
):
    return Response(
        {
            "status": status,
            "statuscode": statuscode,
            "message": message,
            "data": data if data is not None else [],
            "timestamp": timezone.now().isoformat(),
        },
        status=statuscode,
    )
