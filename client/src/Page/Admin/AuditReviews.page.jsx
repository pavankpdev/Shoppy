// Libraries
import React, { useEffect, useState } from "react";
import { Container, Table, Button, Row, Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

// Redux Actions
import {
  GetPendingReview,
  AuditReview,
} from "../../redux/reducer/Admin/Admin.action";

const AuditReviews = () => {
  const [pendingReviews, setPendingReviews] = useState([]);
  const [auditedReviews, setAuditedReviews] = useState([]);

  const dispatch = useDispatch();
  const reduxState = useSelector(({ Admin }) => ({ Admin }));

  useEffect(() => {
    const GetPendingReviewAction = async () => {
      const pendingList = await dispatch(GetPendingReview());
      setPendingReviews(pendingList.payload);
    };
    GetPendingReviewAction();
  }, []);

  const ApproveReview = (id) => {
    setPendingReviews(
      pendingReviews.map((review) => {
        if (review.audit_id === id) {
          review.audit_status = "Approved";
          return review;
        }
        return review;
      })
    );

    setAuditedReviews(
      pendingReviews.map(({ audit_id, audit_status }) => ({
        audit_id,
        audit_status,
      }))
    );
  };
  const RejectReview = (id) => {
    setPendingReviews(
      pendingReviews.map((review) => {
        if (review.audit_id === id) {
          review.audit_status = "Rejected";
          return review;
        }
        return review;
      })
    );
    setAuditedReviews(
      pendingReviews.map(({ audit_id, audit_status }) => ({
        audit_id,
        audit_status,
      }))
    );
  };

  const SubmitAuditReview = async () => {
    try {
      if (auditedReviews.length > 0) {
        const AuditReviewAction = await dispatch(AuditReview(auditedReviews));
        return setPendingReviews(AuditReviewAction.payload);
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log(pendingReviews);
  return (
    <>
      <Container className="mt-3">
        <Row className="mb-4 justify-content-between border-bottom border-primary">
          <h1 className="text-primary">Review Audit</h1>
        </Row>
        {pendingReviews.length === 0 ? (
          <h1 className="text-primary">Hurray no reviews to audit... 🥳</h1>
        ) : (
          <>
            <Table responsive hover>
              <thead>
                <th>Status</th>
                <th>Date</th>
                <th>Subject</th>
                <th>Review</th>
                <th>Action</th>
              </thead>
              <tbody>
                {pendingReviews.map(
                  ({
                    audit_id,
                    review_desc,
                    subject,
                    reviewdate,
                    audit_status,
                  }) => (
                    <>
                      <tr key={audit_id}>
                        <td>
                          {audit_status === "Pending" ? (
                            <span className="text-info font-weight-600">
                              {audit_status}
                            </span>
                          ) : audit_status === "Approved" ? (
                            <span className="text-success font-weight-600">
                              {audit_status}
                            </span>
                          ) : (
                            <span className="text-danger font-weight-600">
                              {audit_status}
                            </span>
                          )}
                        </td>
                        <td>{moment(reviewdate).format("MMM DD")}</td>
                        <td>{subject}</td>
                        <td
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "scroll",
                            maxWidth: "2px",
                            width: "80%",
                          }}
                        >
                          {review_desc}
                        </td>
                        <td>
                          <Button
                            className="btn-icon btn-12"
                            color="success"
                            type="button"
                            size="sm"
                            data-toggle="tooltip"
                            title="Approve Review"
                            outline
                            onClick={() => ApproveReview(audit_id)}
                          >
                            <i className="fas fa-check" />
                          </Button>
                          <Button
                            className="btn-icon btn-12"
                            color="danger"
                            type="button"
                            size="sm"
                            title="Reject Review"
                            outline
                            onClick={() => RejectReview(audit_id)}
                          >
                            <i className="fas fa-times" />
                          </Button>
                        </td>
                      </tr>
                    </>
                  )
                )}
              </tbody>
            </Table>
            <div className="d-flex justify-content-center">
              <Button
                color="primary"
                className=" mt-3"
                onClick={SubmitAuditReview}
                disabled={auditedReviews.length === 0}
              >
                {reduxState.Admin.loading ? (
                  <Spinner size="sm" />
                ) : (
                  "Submit Audits"
                )}
              </Button>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default AuditReviews;
